import { pool } from '../pool.js'

interface PasswordResetTokenRow {
  id: string
  user_id: string
  token_hash: string
  expires_at: string
  used_at: string | null
  created_at: string
}

export interface PasswordResetTokenRecord {
  id: string
  userId: string
  tokenHash: string
  expiresAt: string
  usedAt: string | null
  createdAt: string
}

function mapPasswordResetToken(
  row: PasswordResetTokenRow,
): PasswordResetTokenRecord {
  return {
    id: row.id,
    userId: row.user_id,
    tokenHash: row.token_hash,
    expiresAt: row.expires_at,
    usedAt: row.used_at,
    createdAt: row.created_at,
  }
}

export async function createPasswordResetToken({
  userId,
  tokenHash,
  expiresAt,
}: {
  userId: string
  tokenHash: string
  expiresAt: Date
}) {
  const result = await pool.query<PasswordResetTokenRow>(
    `
      INSERT INTO password_reset_tokens (user_id, token_hash, expires_at)
      VALUES ($1, $2, $3)
      RETURNING id, user_id, token_hash, expires_at, used_at, created_at
    `,
    [userId, tokenHash, expiresAt],
  )

  return mapPasswordResetToken(result.rows[0])
}

export async function findActivePasswordResetToken(tokenHash: string) {
  const result = await pool.query<PasswordResetTokenRow>(
    `
      SELECT id, user_id, token_hash, expires_at, used_at, created_at
      FROM password_reset_tokens
      WHERE token_hash = $1
        AND used_at IS NULL
        AND expires_at > now()
      LIMIT 1
    `,
    [tokenHash],
  )

  return result.rows[0] ? mapPasswordResetToken(result.rows[0]) : null
}

export async function markPasswordResetTokenUsed(id: string) {
  await pool.query(
    `
      UPDATE password_reset_tokens
      SET used_at = now()
      WHERE id = $1
    `,
    [id],
  )
}

export async function expireUserPasswordResetTokens(userId: string) {
  await pool.query(
    `
      UPDATE password_reset_tokens
      SET used_at = now()
      WHERE user_id = $1
        AND used_at IS NULL
    `,
    [userId],
  )
}
