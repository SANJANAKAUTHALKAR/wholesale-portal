import { useEffect, useMemo, useState } from 'react'
import useProductStore from '../../store/productStore.js'

const ProductsPage = () => {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [minMOQ, setMinMOQ] = useState('')
  const [sku, setSku] = useState('')

  const products = useProductStore((state) => state.products)
  const loading = useProductStore((state) => state.loading)
  const error = useProductStore((state) => state.error)
  const fetchProducts = useProductStore((state) => state.fetchProducts)

  useEffect(() => {
    fetchProducts({
      search: query,
      sku,
      category,
      minPrice,
      maxPrice,
      minMOQ,
    })
  }, [fetchProducts, query, sku, category, minPrice, maxPrice, minMOQ])

  const productCount = useMemo(() => products.length, [products])

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Products</h1>
        <p className="text-sm text-slate-600">Manage your wholesale product catalog and filter inventory in real time.</p>
      </div>

      <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40 sm:grid-cols-2 xl:grid-cols-[2fr_1fr]">
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium text-slate-600">Search</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Product name or description"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-cyan-500"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-slate-600">SKU</span>
              <input
                value={sku}
                onChange={(event) => setSku(event.target.value)}
                placeholder="SKU"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-cyan-500"
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <label className="block">
              <span className="text-sm font-medium text-slate-600">Category</span>
              <input
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                placeholder="Category"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-cyan-500"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-slate-600">Min price</span>
              <input
                value={minPrice}
                onChange={(event) => setMinPrice(event.target.value)}
                placeholder="0"
                type="number"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-cyan-500"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-slate-600">Max price</span>
              <input
                value={maxPrice}
                onChange={(event) => setMaxPrice(event.target.value)}
                placeholder="9999"
                type="number"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-cyan-500"
              />
            </label>
          </div>

          <label className="block w-full">
            <span className="text-sm font-medium text-slate-600">Minimum order quantity</span>
            <input
              value={minMOQ}
              onChange={(event) => setMinMOQ(event.target.value)}
              placeholder="1"
              type="number"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-cyan-500"
            />
          </label>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-950/5 p-6 text-slate-700">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-500">Catalog status</p>
              <p className="mt-3 text-3xl font-semibold text-slate-950">{productCount} products</p>
            </div>
            <div className="rounded-3xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-900">
              {loading ? 'Refreshing…' : 'Live' }
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Use the search and filters to query backend products and view MOQ and tier pricing details.
          </p>
        </div>
      </div>

      {error && (
        <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6 text-rose-700">
          <p className="font-semibold">Unable to load products</p>
          <p className="mt-2 text-sm">{error}</p>
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-3">
        {loading ? (
          <div className="col-span-full rounded-3xl border border-slate-200 bg-white p-10 text-center text-slate-500 shadow-sm shadow-slate-200/30">
            Loading products...
          </div>
        ) : products.length === 0 ? (
          <div className="col-span-full rounded-3xl border border-slate-200 bg-white p-10 text-center text-slate-500 shadow-sm shadow-slate-200/30">
            No products found.
          </div>
        ) : (
          products.map((product) => (
            <div key={product.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">{product.name}</h2>
                  <p className="mt-2 text-sm text-slate-500">{product.category || 'General'}</p>
                </div>
                <span className="rounded-2xl bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
                  MOQ {product.min_order_quantity ?? 1}
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">{product.description || 'No description available.'}</p>
              <div className="mt-6 flex items-center justify-between gap-4 text-sm text-slate-700">
                <div>
                  <p className="font-semibold text-slate-900">${product.price?.toFixed(2) ?? '0.00'}</p>
                  <p className="mt-1">Stock: {product.inventory_quantity ?? 0}</p>
                </div>
                {product.tier_pricing?.length ? (
                  <div className="rounded-3xl bg-slate-50 px-4 py-3 text-slate-700">
                    <p className="text-sm font-semibold">Tier pricing</p>
                    <p className="mt-1 text-xs text-slate-500">{product.tier_pricing.length} levels</p>
                  </div>
                ) : (
                  <span className="rounded-3xl bg-slate-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Standard pricing
                  </span>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default ProductsPage
