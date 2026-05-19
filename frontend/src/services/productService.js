import api from './api.js'

export const fetchProducts = async (filters = {}) => {
  const response = await api.get('/products', { params: filters })
  return response.data.data
}

export const fetchProductById = async (productId) => {
  const response = await api.get(`/products/${productId}`)
  return response.data.data
}

export const createProduct = async (product) => {
  const response = await api.post('/products', product)
  return response.data.data
}

export const updateProduct = async (productId, updates) => {
  const response = await api.put(`/products/${productId}`, updates)
  return response.data.data
}

export const deleteProduct = async (productId) => {
  const response = await api.delete(`/products/${productId}`)
  return response.data.data
}
