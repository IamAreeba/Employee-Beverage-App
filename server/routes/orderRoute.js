

import express from 'express'
import authUser from '../middleware/authmiddleware.js'
import { listOrders, placeOrder, updateStatus, userOrder } from '../controllers/orderController.js'

const orderRouter = express.Router()

orderRouter.post('/place', authUser, placeOrder)
orderRouter.post('/userorders', authUser, userOrder)
orderRouter.get('/list', listOrders)
orderRouter.post('/status', updateStatus)

export default orderRouter