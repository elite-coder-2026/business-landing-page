import type { ErrorRequestHandler } from 'express'
import { ZodError } from 'zod'
import { HttpError } from '../lib/httpError.js'

export const errorHandler: ErrorRequestHandler = (error, _request, response, _next) => {
  if (error instanceof ZodError) {
    return response.status(400).json({
      ok: false,
      error: 'Validation failed',
      details: error.flatten(),
    })
  }

  if (error instanceof HttpError) {
    return response.status(error.statusCode).json({
      ok: false,
      error: error.message,
    })
  }

  if (error && typeof error === 'object' && 'code' in error) {
    if (error.code === '23505') {
      return response.status(409).json({
        ok: false,
        error: 'A record with that value already exists',
      })
    }
  }

  console.error(error)

  return response.status(500).json({
    ok: false,
    error: 'Internal server error',
  })
}
