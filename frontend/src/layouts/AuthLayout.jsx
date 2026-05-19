import { Outlet } from 'react-router-dom'

const AuthLayout = () => (
  <div className="min-h-screen bg-slate-100 text-slate-900">
    <div className="mx-auto flex min-h-screen max-w-md items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/50">
        <Outlet />
      </div>
    </div>
  </div>
)

export default AuthLayout
