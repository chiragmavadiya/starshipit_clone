import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { ROUTES } from '../../configuration/routes.js'
import { isAuthenticated } from './authService.js'

export default function ProtectedRoute() {
  const location = useLocation()

  if (!isAuthenticated()) {
    return <Navigate to={ROUTES.signIn} state={{ from: location }} replace />
  }

  return <Outlet />
}
