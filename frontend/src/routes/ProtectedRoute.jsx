import { Navigate, Outlet, useLocation } from 'react-router-dom'
import useAuthStore from '../store/authStore.js'

const ProtectedRoute = ({ children, allowedRoles, redirectTo = '/auth/login' }) => {
  const token = useAuthStore((state) => state.token)
  const role = useAuthStore((state) => state.role)
  const location = useLocation()

  if (!token) {
    return <Navigate to={redirectTo} state={{ from: location }} replace />
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/" replace />
  }

  return children ?? <Outlet />
}

export default ProtectedRoute
