import { create } from 'zustand'
import toast from 'react-hot-toast'
import { fetchProducts as fetchProductsApi } from '../services/productService.js'

const useProductStore = create((set) => ({
  products: [],
  loading: false,
  error: null,
  filters: {
    search: '',
    sku: '',
    category: '',
    minPrice: '',
    maxPrice: '',
    minMOQ: '',
  },
  setFilters: (filters) => set((state) => ({ filters: { ...state.filters, ...filters } })),
  fetchProducts: async (filters) => {
    set({ loading: true, error: null })
    try {
      const products = await fetchProductsApi(filters)
      set({ products, loading: false })
    } catch (error) {
      const message = error?.data?.error || error?.message || 'Unable to load products'
      toast.error(message)
      set({ products: [], loading: false, error: message })
    }
  },
}))

export default useProductStore
