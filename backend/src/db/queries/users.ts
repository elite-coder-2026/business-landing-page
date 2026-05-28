import { pool } from '../pool.js'

export interface UserRecord {
  id: string
  name: string
  email: string
  passwordHash: string
  createdAt: string
  updatedAt: string
}

interface UserRow {
  id: string
  name: string
  email: string
  password_hash: string
  created_at: string
  updated_at: string
}

export interface PublicUser {
  id: string
  name: string
  email: string
  createdAt: string
}

function mapUser(row: UserRow): UserRecord {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    passwordHash: row.password_hash,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  }
}

export function toPublicUser(user: UserRecord): PublicUser {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
  }
}

export async function findUserByEmail(email: string) {
  const result = await pool.query<UserRow>(
    `
      SELECT id, name, email, password_hash, created_at, updated_at
      FROM users
      WHERE lower(email) = lower($1)
      LIMIT 1
    `,
    [email],
  )

  return result.rows[0] ? mapUser(result.rows[0]) : null
}

export async function findUserById(id: string) {
  const result = await pool.query<UserRow>(
    `
      SELECT id, name, email, password_hash, created_at, updated_at
      FROM users
      WHERE id = $1
      LIMIT 1
    `,
    [id],
  )

  return result.rows[0] ? mapUser(result.rows[0]) : null
}

export async function createUser({
  name,
  email,
  passwordHash,
}: {
  name: string
  email: string
  passwordHash: string
}) {
  const result = await pool.query<UserRow>(
    `
      INSERT INTO users (name, email, password_hash)
      VALUES ($1, lower($2), $3)
      RETURNING id, name, email, password_hash, created_at, updated_at
    `,
    [name, email, passwordHash],
  )

  return mapUser(result.rows[0])
}

export async function updateUserPassword({
  userId,
  passwordHash,
}: {
  userId: string
  passwordHash: string
}) {
  const result = await pool.query<UserRow>(
    `
      UPDATE users
      SET password_hash = $2,
          updated_at = now()
      WHERE id = $1
      RETURNING id, name, email, password_hash, created_at, updated_at
    `,
    [userId, passwordHash],
  )

  return result.rows[0] ? mapUser(result.rows[0]) : null
}
