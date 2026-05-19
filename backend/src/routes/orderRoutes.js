import express from 'express'
import {
  createOrder,
  deleteOrder,
  getOrderById,
  getOrders,
  updateOrder,
} from '../controllers/orderController.js'
import { protectRoute } from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/', protectRoute(), getOrders)
router.get('/:id', protectRoute(), getOrderById)
router.post('/', protectRoute(), createOrder)
router.put('/:id', protectRoute(['admin']), updateOrder)
router.delete('/:id', protectRoute(['admin']), deleteOrder)

export default router
