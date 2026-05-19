import { useMemo } from 'react'
import useAuthStore from '../store/authStore.js'

const useAuth = () => {
  const user = useAuthStore((state) => state.user)
  const login = useAuthStore((state) => state.login)
  const logout = useAuthStore((state) => state.logout)

  return useMemo(
    () => ({ user, login, logout, isAuthenticated: Boolean(user) }),
    [user, login, logout],
  )
}

export default useAuth
