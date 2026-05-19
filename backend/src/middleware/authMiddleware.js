import jwt from 'jsonwebtoken'
import { jwtSecret } from '../config/jwtConfig.js'

export const protectRoute = (allowedRoles = []) => async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Authorization token missing' })
    }

    const token = authHeader.split(' ')[1]
    const decoded = jwt.verify(token, jwtSecret)
    req.user = decoded

    if (allowedRoles.length && !allowedRoles.includes(decoded.role)) {
      return res.status(403).json({ error: 'Forbidden: insufficient permissions' })
    }

    next()
  } catch (error) {
    return res.status(401).json({ error: 'Invalid or expired token' })
  }
}
