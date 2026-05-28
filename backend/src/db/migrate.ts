import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { pool } from './pool.js'

const dirname = path.dirname(fileURLToPath(import.meta.url))
const migrationsDir = path.resolve(dirname, '../../migrations')

async function migrate() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS schema_migrations (
      filename TEXT PRIMARY KEY,
      applied_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `)

  const files = (await readdir(migrationsDir))
    .filter((file) => file.endsWith('.sql'))
    .sort()

  for (const file of files) {
    const existing = await pool.query(
      'SELECT filename FROM schema_migrations WHERE filename = $1',
      [file],
    )

    if (existing.rowCount) {
      continue
    }

    const sql = await readFile(path.join(migrationsDir, file), 'utf8')

    await pool.query('BEGIN')
    try {
      await pool.query(sql)
      await pool.query('INSERT INTO schema_migrations (filename) VALUES ($1)', [
        file,
      ])
      await pool.query('COMMIT')
      console.log(`Applied migration ${file}`)
    } catch (error) {
      await pool.query('ROLLBACK')
      throw error
    }
  }
}

migrate()
  .then(async () => {
    await pool.end()
  })
  .catch(async (error) => {
    console.error(error)
    await pool.end()
    process.exit(1)
  })
