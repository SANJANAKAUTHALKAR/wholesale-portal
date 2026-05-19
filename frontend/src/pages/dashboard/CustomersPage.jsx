const CustomersPage = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-semibold text-slate-900">Customers</h1>
      <p className="text-sm text-slate-600">Track active accounts, purchase volume, and contact details in one place.</p>
    </div>
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm shadow-slate-200/40">
      <div className="grid gap-4 p-6 sm:grid-cols-2 xl:grid-cols-3">
        {[
          { name: 'Retail Co.', orders: 18, status: 'Active' },
          { name: 'Wholesale Hub', orders: 12, status: 'Pending' },
          { name: 'Market Supply', orders: 26, status: 'Active' },
        ].map((customer) => (
          <div key={customer.name} className="rounded-3xl border border-slate-200 p-5">
            <h2 className="text-lg font-semibold text-slate-900">{customer.name}</h2>
            <p className="mt-2 text-sm text-slate-600">Orders: {customer.orders}</p>
            <p className="mt-1 text-sm font-medium text-slate-700">Status: {customer.status}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default CustomersPage
