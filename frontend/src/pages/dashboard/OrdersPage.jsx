const OrdersPage = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-semibold text-slate-900">Orders</h1>
      <p className="text-sm text-slate-600">Manage purchase orders, shipment status, and fulfillment workflows.</p>
    </div>
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm shadow-slate-200/40">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-50">
          <tr>
            <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Order</th>
            <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Customer</th>
            <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Status</th>
            <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Total</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 bg-white">
          {['#1001', '#1002', '#1003'].map((order) => (
            <tr key={order} className="hover:bg-slate-50">
              <td className="px-4 py-5 text-slate-800">{order}</td>
              <td className="px-4 py-5 text-slate-600">Retail Co.</td>
              <td className="px-4 py-5 text-slate-600">Processing</td>
              <td className="px-4 py-5 text-slate-800">$4,240</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)

export default OrdersPage
