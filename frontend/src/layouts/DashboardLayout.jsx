import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navGroups = [
  { label: 'Overview', items: [{ label: 'Home', path: '/dashboard' }] },
  {
    label: 'Management',
    items: [
      { label: 'Orders', path: '/dashboard/orders' },
      { label: 'Products', path: '/dashboard/products' },
      { label: 'Customers', path: '/dashboard/customers' },
    ],
  },
  {
    label: 'Insights',
    items: [
      { label: 'Sales', path: '/dashboard/analytics/sales' },
      { label: 'Inventory', path: '/dashboard/analytics/inventory' },
    ],
  },
  {
    label: 'Settings',
    items: [
      { label: 'Account', path: '/dashboard/settings/account' },
      { label: 'Team', path: '/dashboard/settings/team' },
    ],
  },
]

const DashboardLayout = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="border-b border-slate-200 bg-white/95 px-4 py-4 shadow-sm shadow-slate-200/50 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div className="text-lg font-semibold">Wholesale Portal</div>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-700 shadow-sm hover:bg-slate-50 sm:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8">
        <aside
          className={`${open ? 'block' : 'hidden'} rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/50 sm:block`}
        >
          <div className="space-y-6">
            {navGroups.map((group) => (
              <div key={group.label}>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  {group.label}
                </p>
                <div className="space-y-1">
                  {group.items.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block rounded-2xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50">
          <Outlet />
        </section>
      </div>
    </div>
  )
}

export default DashboardLayout
