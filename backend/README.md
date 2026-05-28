# Backend

Express API scaffold for the business landing page.

## Setup

```bash
cd backend
npm install
cp .env.example .env
npm run migrate
npm run dev
```

The API runs on `http://localhost:4000` by default.

## Scripts

- `npm run dev` starts the API in watch mode.
- `npm run migrate` applies SQL files from `migrations`.
- `npm run build` compiles TypeScript into `dist`.
- `npm run start` runs the compiled server.
- `npm run typecheck` checks TypeScript without emitting files.

## Routes

- `GET /api/health`
- `POST /api/auth/login`
- `POST /api/auth/register`
- `POST /api/auth/logout`
- `GET /api/auth/me`
- `POST /api/auth/forgot-password`
- `POST /api/auth/reset-password`
- `POST /api/auth/provider`

Email/password auth uses raw PostgreSQL queries, bcrypt password hashing, cookie sessions stored in Postgres, auth rate limiting, hashed password reset tokens, and SMTP email delivery. If SMTP is not configured, reset links are logged in development. Google/Facebook routes are placeholders until OAuth credentials and callback handling are added.

## Email Delivery

Set these values in `backend/.env` to send password reset emails:

```bash
PASSWORD_RESET_URL=https://yourdomain.com/reset-password
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
EMAIL_FROM="Asme <no-reply@yourdomain.com>"
```

## Production Cookie Settings

Set these in production after the deployment domain is known:

```bash
SESSION_COOKIE_DOMAIN=.yourdomain.com
SESSION_COOKIE_SAMESITE=none
SESSION_COOKIE_SECURE=true
```

Use `SESSION_COOKIE_SAMESITE=lax` when the frontend and backend are same-site. Use `none` only when the API and frontend are cross-site and HTTPS is enabled.
