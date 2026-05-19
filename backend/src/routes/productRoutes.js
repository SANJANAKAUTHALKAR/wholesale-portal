import express from 'express'
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from '../controllers/productController.js'
import { protectRoute } from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/', getProducts)
router.get('/:id', getProductById)
router.post('/', protectRoute(['admin']), createProduct)
router.put('/:id', protectRoute(['admin']), updateProduct)
router.delete('/:id', protectRoute(['admin']), deleteProduct)

export default router
