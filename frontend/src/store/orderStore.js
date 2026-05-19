import { create } from 'zustand'

const useOrderStore = create((set) => ({
  orders: [],
  setOrders: (orders) => set({ orders }),
  addOrder: (order) => set((state) => ({ orders: [...state.orders, order] })),
}))

export default useOrderStore
