import { Link } from 'react-router-dom'

const NotFoundPage = () => (
  <div className="flex min-h-[60vh] flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm shadow-slate-200/50">
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">404</p>
    <h1 className="mt-4 text-4xl font-semibold text-slate-900">Page not found</h1>
    <p className="mt-3 max-w-xl text-slate-600">The route you are looking for does not exist or has been moved. Return to the portal homepage.</p>
    <Link to="/" className="mt-6 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">
      Back to home
    </Link>
  </div>
)

export default NotFoundPage
