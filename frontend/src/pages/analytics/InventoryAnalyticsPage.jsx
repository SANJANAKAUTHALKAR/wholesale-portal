const InventoryAnalyticsPage = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-semibold text-slate-900">Inventory analytics</h1>
      <p className="text-sm text-slate-600">Monitor stock levels, reorder risk, and supply chain capacity for wholesale fulfillment.</p>
    </div>
    <div className="grid gap-6 lg:grid-cols-3">
      {['Stock health', 'Reorder alerts', 'Coverage days'].map((metric) => (
        <div key={metric} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40">
          <h2 className="text-lg font-semibold text-slate-900">{metric}</h2>
          <p className="mt-3 text-slate-600">Keep your distribution network stocked without oversupply.</p>
        </div>
      ))}
    </div>
  </div>
)

export default InventoryAnalyticsPage
