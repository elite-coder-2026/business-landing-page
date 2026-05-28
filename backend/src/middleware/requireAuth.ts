import type { RequestHandler } from 'express'
import { HttpError } from '../lib/httpError.js'

export const requireAuth: RequestHandler = (request, _response, next) => {
  if (!request.session.userId) {
    return next(new HttpError(401, 'Authentication required'))
  }

  return next()
}
