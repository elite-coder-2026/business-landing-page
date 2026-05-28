import { createHash, randomBytes } from 'node:crypto'
import bcrypt from 'bcrypt'
import { Router } from 'express'
import { z } from 'zod'
import { config } from '../config.js'
import {
  createPasswordResetToken,
  expireUserPasswordResetTokens,
  findActivePasswordResetToken,
  markPasswordResetTokenUsed,
} from '../db/queries/passwordResetTokens.js'
import {
  createUser,
  findUserByEmail,
  findUserById,
  toPublicUser,
  updateUserPassword,
} from '../db/queries/users.js'
import { sendCreated, sendOk } from '../lib/http.js'
import { HttpError } from '../lib/httpError.js'
import { sendPasswordResetEmail } from '../lib/mailer.js'
import {
  authRateLimit,
  passwordResetRateLimit,
} from '../middleware/authRateLimit.js'
import { requireAuth } from '../middleware/requireAuth.js'

const loginSchema = z.object({
  email: z.string().email().transform((email) => email.toLowerCase()),
  password: z.string().min(8),
})

const registerSchema = loginSchema
  .extend({
    name: z.string().trim().min(2),
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

const providerSchema = z.object({
  provider: z.enum(['google', 'facebook']),
})

const forgotPasswordSchema = z.object({
  email: z.string().email().transform((email) => email.toLowerCase()),
})

const resetPasswordSchema = z
  .object({
    token: z.string().min(32),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export const authRouter = Router()

function hashToken(token: string) {
  return createHash('sha256').update(token).digest('hex')
}

authRouter.post('/register', authRateLimit, async (request, response, next) => {
  try {
    const payload = registerSchema.parse(request.body)
    const existingUser = await findUserByEmail(payload.email)

    if (existingUser) {
      throw new HttpError(409, 'An account already exists for this email')
    }

    const passwordHash = await bcrypt.hash(payload.password, 12)
    const user = await createUser({
      name: payload.name,
      email: payload.email,
      passwordHash,
    })

    request.session.userId = user.id

    return sendCreated(response, {
      user: toPublicUser(user),
    })
  } catch (error) {
    return next(error)
  }
})

authRouter.post('/login', authRateLimit, async (request, response, next) => {
  try {
    const payload = loginSchema.parse(request.body)
    const user = await findUserByEmail(payload.email)

    if (!user) {
      throw new HttpError(401, 'Invalid email or password')
    }

    const passwordMatches = await bcrypt.compare(payload.password, user.passwordHash)

    if (!passwordMatches) {
      throw new HttpError(401, 'Invalid email or password')
    }

    request.session.userId = user.id

    return sendOk(response, {
      user: toPublicUser(user),
    })
  } catch (error) {
    return next(error)
  }
})

authRouter.post(
  '/forgot-password',
  passwordResetRateLimit,
  async (request, response, next) => {
    try {
      const payload = forgotPasswordSchema.parse(request.body)
      const user = await findUserByEmail(payload.email)
      let resetToken: string | undefined

      if (user) {
        await expireUserPasswordResetTokens(user.id)

        resetToken = randomBytes(32).toString('hex')
        await createPasswordResetToken({
          userId: user.id,
          tokenHash: hashToken(resetToken),
          expiresAt: new Date(
            Date.now() + config.passwordResetTokenMinutes * 60 * 1000,
          ),
        })

        const resetUrl = new URL(config.passwordResetUrl)
        resetUrl.searchParams.set('token', resetToken)

        await sendPasswordResetEmail({
          to: user.email,
          name: user.name,
          resetUrl: resetUrl.toString(),
        })
      }

      return sendOk(response, {
        message:
          'If an account exists for that email, password reset instructions will be sent.',
        resetToken: config.isProduction ? undefined : resetToken,
      })
    } catch (error) {
      return next(error)
    }
  },
)

authRouter.post(
  '/reset-password',
  passwordResetRateLimit,
  async (request, response, next) => {
    try {
      const payload = resetPasswordSchema.parse(request.body)
      const resetToken = await findActivePasswordResetToken(
        hashToken(payload.token),
      )

      if (!resetToken) {
        throw new HttpError(400, 'Invalid or expired password reset token')
      }

      const passwordHash = await bcrypt.hash(payload.password, 12)
      const user = await updateUserPassword({
        userId: resetToken.userId,
        passwordHash,
      })

      if (!user) {
        throw new HttpError(400, 'Invalid or expired password reset token')
      }

      await markPasswordResetTokenUsed(resetToken.id)
      await expireUserPasswordResetTokens(resetToken.userId)

      return sendOk(response, {
        message: 'Password reset complete',
      })
    } catch (error) {
      return next(error)
    }
  },
)

authRouter.post('/logout', (request, response, next) => {
  request.session.destroy((error) => {
    if (error) {
      return next(error)
    }

    response.clearCookie('asme.sid')

    return sendOk(response, {
      message: 'Logged out',
    })
  })
})

authRouter.get('/me', requireAuth, async (request, response, next) => {
  try {
    const { userId } = request.session

    if (!userId) {
      throw new HttpError(401, 'Authentication required')
    }

    const user = await findUserById(userId)

    if (!user) {
      request.session.destroy(() => undefined)
      throw new HttpError(401, 'Authentication required')
    }

    return sendOk(response, {
      user: toPublicUser(user),
    })
  } catch (error) {
    return next(error)
  }
})

authRouter.post('/provider', (request, response, next) => {
  try {
    const payload = providerSchema.parse(request.body)

    return sendOk(response, {
      message: `${payload.provider} OAuth is not configured yet`,
      provider: payload.provider,
    })
  } catch (error) {
    return next(error)
  }
})
