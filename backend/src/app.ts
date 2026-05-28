import cors from 'cors'
import connectPgSimple from 'connect-pg-simple'
import express from 'express'
import session from 'express-session'
import helmet from 'helmet'
import { config } from './config.js'
import { pool } from './db/pool.js'
import { errorHandler } from './middleware/errorHandler.js'
import { authRouter } from './routes/auth.js'
import { healthRouter } from './routes/health.js'

export function createApp() {
  const app = express()
  const PgSessionStore = connectPgSimple(session)

  app.use(helmet())
  app.use(
    cors({
      origin: config.clientOrigin,
      credentials: true,
    }),
  )
  app.use(express.json())
  app.use(
    session({
      name: 'asme.sid',
      secret: config.sessionSecret,
      resave: false,
      saveUninitialized: false,
      store: new PgSessionStore({
        pool,
        tableName: 'session',
      }),
      cookie: {
        domain: config.sessionCookieDomain,
        httpOnly: true,
        sameSite: config.sessionCookieSameSite,
        secure: config.sessionCookieSecure,
        maxAge: 1000 * 60 * 60 * 24 * 7,
      },
    }),
  )

  app.use('/api/health', healthRouter)
  app.use('/api/auth', authRouter)

  app.use(errorHandler)

  return app
}
