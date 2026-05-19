import api from './api.js'

export const fetchOrders = async () => {
  const response = await api.get('/orders')
  return response.data
}

export const fetchOrderById = async (orderId) => {
  const response = await api.get(`/orders/${orderId}`)
  return response.data
}
