import { Link, Outlet } from 'react-router-dom'

const AppLayout = () => (
  <div className="min-h-screen bg-slate-950 text-slate-100">
    <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-lg font-semibold tracking-tight text-white">
          Wholesale Portal
        </Link>
        <nav className="flex items-center gap-4 text-sm font-medium text-slate-300">
          <Link to="/dashboard" className="transition hover:text-white">
            Dashboard
          </Link>
          <Link to="/auth/login" className="transition hover:text-white">
            Sign In
          </Link>
          <Link to="/auth/register" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white transition hover:border-cyan-300 hover:bg-cyan-500/10">
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Outlet />
    </main>
  </div>
)

export default AppLayout
