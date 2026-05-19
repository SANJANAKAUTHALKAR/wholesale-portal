const SalesAnalyticsPage = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-semibold text-slate-900">Sales analytics</h1>
      <p className="text-sm text-slate-600">Analyze wholesale revenue trends, top-selling categories, and growth metrics.</p>
    </div>
    <div className="grid gap-6 lg:grid-cols-2">
      {['Revenue', 'Gross margin', 'Order velocity'].map((metric) => (
        <div key={metric} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40">
          <h2 className="text-lg font-semibold text-slate-900">{metric}</h2>
          <p className="mt-3 text-slate-600">Visualize current performance and compare to past quarters.</p>
        </div>
      ))}
    </div>
  </div>
)

export default SalesAnalyticsPage
