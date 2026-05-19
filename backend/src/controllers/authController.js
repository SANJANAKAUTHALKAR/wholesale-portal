import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { jwtSecret, jwtExpiresIn } from '../config/jwtConfig.js'
import { findUserByEmail, insertUser } from '../services/authService.js'

const ALLOWED_ROLES = ['buyer', 'admin']

const signToken = (user) => jwt.sign({ id: user.id, email: user.email, role: user.role }, jwtSecret, { expiresIn: jwtExpiresIn })

const normalizeEmail = (email) => String(email).trim().toLowerCase()

export const login = async (req, res, next) => {
  try {
    const email = normalizeEmail(req.body.email)
    const password = req.body.password
    const role = req.body.role

    if (!email || !password || !role) {
      return res.status(400).json({ error: 'Email, password, and role are required' })
    }

    if (!ALLOWED_ROLES.includes(role)) {
      return res.status(400).json({ error: 'Role must be either buyer or admin' })
    }

    const user = await findUserByEmail(email)
    if (!user || user.role !== role) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const passwordMatches = await bcrypt.compare(password, user.password_hash)
    if (!passwordMatches) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const token = signToken(user)
    return res.status(200).json({
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        companyName: user.company_name,
      },
      token,
      role: user.role,
    })
  } catch (error) {
    if (error?.message?.includes("Could not find the table 'public.users'")) {
      return res.status(500).json({
        error:
          "Database schema error: the Supabase 'users' table is missing. Run the schema SQL or create the table before continuing.",
      })
    }
    next(error)
  }
}

export const registerUser = async (req, res, next) => {
  try {
    const email = normalizeEmail(req.body.email)
    const password = req.body.password
    const companyName = req.body.companyName
    const role = req.body.role

    if (!email || !password || !companyName || !role) {
      return res.status(400).json({ error: 'Email, password, companyName, and role are required' })
    }

    if (!ALLOWED_ROLES.includes(role)) {
      return res.status(400).json({ error: 'Role must be either buyer or admin' })
    }

    const existingUser = await findUserByEmail(email)
    if (existingUser) {
      return res.status(409).json({ error: 'User already exists' })
    }

    const passwordHash = await bcrypt.hash(password, 12)
    const user = await insertUser({ email, passwordHash, companyName, role })
    const token = signToken(user)

    return res.status(201).json({
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        companyName: user.company_name,
      },
      token,
      role: user.role,
    })
  } catch (error) {
    if (error?.code === '23505' || error?.message?.includes('duplicate key value')) {
      return res.status(409).json({ error: 'User already exists' })
    }

    if (error?.message?.includes("Could not find the table 'public.users'")) {
      return res.status(500).json({
        error:
          "Database schema error: the Supabase 'users' table is missing. Run the schema SQL or create the table before continuing.",
      })
    }
    next(error)
  }
}

export const getProfile = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Unauthorized' })
    }

    return res.json({ user: req.user })
  } catch (error) {
    next(error)
  }
}
