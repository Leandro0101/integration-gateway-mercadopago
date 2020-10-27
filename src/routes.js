import { Router } from 'express'
import paymentController from './controllers/PaymentController'

const router = new Router()

router.get('/payment', paymentController.toPay)

export default router