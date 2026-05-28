import type { Response } from 'express'

export function sendCreated<T>(response: Response, data: T) {
  return response.status(201).json({
    ok: true,
    data,
  })
}

export function sendOk<T>(response: Response, data: T) {
  return response.status(200).json({
    ok: true,
    data,
  })
}
