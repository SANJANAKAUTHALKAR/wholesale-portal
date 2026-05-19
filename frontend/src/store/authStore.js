import { create } from 'zustand'
import { setAuthToken } from '../services/api.js'

const storedAuth = typeof window !== 'undefined' ? JSON.parse(window.localStorage.getItem('wholesaleAuth') || 'null') : null

if (storedAuth?.token) {
  setAuthToken(storedAuth.token)
}

const useAuthStore = create((set) => ({
  user: storedAuth?.user ?? null,
  token: storedAuth?.token ?? null,
  role: storedAuth?.role ?? null,
  isAuthenticated: Boolean(storedAuth?.token),
  login: (userData, token, role) => {
    const authState = { user: userData, token, role }
    window.localStorage.setItem('wholesaleAuth', JSON.stringify(authState))
    setAuthToken(token)
    set({ ...authState, isAuthenticated: true })
  },
  logout: () => {
    window.localStorage.removeItem('wholesaleAuth')
    setAuthToken(null)
    set({ user: null, token: null, role: null, isAuthenticated: false })
  },
}))

export default useAuthStore
