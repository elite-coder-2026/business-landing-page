import { Router } from 'express'
import { sendOk } from '../lib/http.js'

export const healthRouter = Router()

healthRouter.get('/', (_request, response) => {
  return sendOk(response, {
    status: 'healthy',
    service: 'business-landing-page-backend',
  })
})
