import { Routes, Route, Navigate } from 'react-router-dom'
import { ROUTES } from './configuration/routes.js'
import DashboardLayout from './layouts/DashboardLayout.jsx'
import ProtectedRoute from './modules/auth/ProtectedRoute.jsx'
import SignInPage from './modules/auth/SignInPage.jsx'
import SignUpPage from './modules/auth/SignUpPage.jsx'
import OrdersPage from './modules/dashboard/OrdersPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path={ROUTES.dashboard} element={<DashboardLayout />}>
          <Route index element={<OrdersPage />} />
        </Route>
      </Route>
      <Route path={ROUTES.signIn} element={<SignInPage />} />
      <Route path={ROUTES.signUp} element={<SignUpPage />} />
      <Route path="*" element={<Navigate to={ROUTES.dashboard} replace />} />
    </Routes>
  )
}
