import express from 'express'
import { login, registerUser, getProfile } from '../controllers/authController.js'
import { protectRoute } from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/login', login)
router.post('/register', registerUser)
router.get('/me', protectRoute(), getProfile)

export default router
