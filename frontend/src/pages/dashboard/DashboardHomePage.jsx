import { Link } from 'react-router-dom'

const DashboardHomePage = () => (
  <div className="space-y-8">
    <div className="space-y-3">
      <h1 className="text-3xl font-semibold text-slate-900">Dashboard overview</h1>
      <p className="max-w-2xl text-slate-600">
        Review wholesale performance, inventory health, and order activity in one place.
      </p>
    </div>
    <div className="grid gap-6 lg:grid-cols-3">
      {[
        { title: 'Open orders', value: '128' },
        { title: 'Available stock', value: '7,450' },
        { title: 'Active customers', value: '312' },
      ].map((card) => (
        <div key={card.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm shadow-slate-200/40">
          <p className="text-sm text-slate-500">{card.title}</p>
          <p className="mt-4 text-3xl font-semibold text-slate-900">{card.value}</p>
        </div>
      ))}
    </div>
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-slate-900">Recent activity</h2>
        <Link to="/dashboard/orders" className="text-sm font-semibold text-slate-900 hover:underline">
          View all orders
        </Link>
      </div>
      <p className="mt-4 text-slate-600">Monitor shipments, pending approvals, and inventory updates for your wholesale pipeline.</p>
    </div>
  </div>
)

export default DashboardHomePage
