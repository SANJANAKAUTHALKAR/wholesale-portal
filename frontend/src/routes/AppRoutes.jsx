import { useRoutes } from 'react-router-dom'
import AppLayout from '../layouts/AppLayout.jsx'
import AuthLayout from '../layouts/AuthLayout.jsx'
import DashboardLayout from '../layouts/DashboardLayout.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'
import HomePage from '../pages/home/HomePage.jsx'
import LoginPage from '../pages/auth/LoginPage.jsx'
import RegisterPage from '../pages/auth/RegisterPage.jsx'
import DashboardHomePage from '../pages/dashboard/DashboardHomePage.jsx'
import OrdersPage from '../pages/dashboard/OrdersPage.jsx'
import ProductsPage from '../pages/dashboard/ProductsPage.jsx'
import CustomersPage from '../pages/dashboard/CustomersPage.jsx'
import SalesAnalyticsPage from '../pages/analytics/SalesAnalyticsPage.jsx'
import InventoryAnalyticsPage from '../pages/analytics/InventoryAnalyticsPage.jsx'
import AccountSettingsPage from '../pages/settings/AccountSettingsPage.jsx'
import TeamSettingsPage from '../pages/settings/TeamSettingsPage.jsx'
import NotFoundPage from '../pages/errors/NotFoundPage.jsx'

const AppRoutes = () => {
  const routes = [
    {
      path: '/',
      element: <AppLayout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: 'dashboard',
          element: (
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          ),
          children: [
            { index: true, element: <DashboardHomePage /> },
            { path: 'orders', element: <OrdersPage /> },
            { path: 'products', element: <ProductsPage /> },
            { path: 'customers', element: <CustomersPage /> },
            { path: 'analytics/sales', element: <SalesAnalyticsPage /> },
            { path: 'analytics/inventory', element: <InventoryAnalyticsPage /> },
            { path: 'settings/account', element: <AccountSettingsPage /> },
            {
              path: 'settings/team',
              element: (
                <ProtectedRoute allowedRoles={['admin']}>
                  <TeamSettingsPage />
                </ProtectedRoute>
              ),
            },
          ],
        },
        {
          path: 'auth',
          element: <AuthLayout />,
          children: [
            { path: 'login', element: <LoginPage /> },
            { path: 'register', element: <RegisterPage /> },
          ],
        },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ]

  return useRoutes(routes)
}

export default AppRoutes
