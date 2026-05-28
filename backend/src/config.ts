import 'dotenv/config'

const sameSiteValues = ['lax', 'strict', 'none'] as const
type SameSiteValue = (typeof sameSiteValues)[number]

function getSameSite(value: string | undefined): SameSiteValue {
  if (sameSiteValues.includes(value as SameSiteValue)) {
    return value as SameSiteValue
  }

  return process.env.NODE_ENV === 'production' ? 'none' : 'lax'
}

export const config = {
  port: Number(process.env.PORT ?? 4000),
  clientOrigin: process.env.CLIENT_ORIGIN ?? 'http://localhost:5173',
  databaseUrl:
    process.env.DATABASE_URL ??
    'postgres://postgres:postgres@localhost:5432/business_landing',
  sessionSecret:
    process.env.SESSION_SECRET ?? 'development-only-change-this-secret',
  isProduction: process.env.NODE_ENV === 'production',
  sessionCookieDomain: process.env.SESSION_COOKIE_DOMAIN || undefined,
  sessionCookieSameSite: getSameSite(process.env.SESSION_COOKIE_SAMESITE),
  sessionCookieSecure:
    process.env.SESSION_COOKIE_SECURE === 'true' ||
    process.env.NODE_ENV === 'production',
  passwordResetTokenMinutes: Number(
    process.env.PASSWORD_RESET_TOKEN_MINUTES ?? 30,
  ),
  passwordResetUrl:
    process.env.PASSWORD_RESET_URL ?? 'http://localhost:5173/reset-password',
  emailFrom: process.env.EMAIL_FROM ?? 'Asme <no-reply@example.com>',
  smtp: {
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === 'true',
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
}
