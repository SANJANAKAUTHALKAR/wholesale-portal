import {
  addOrder,
  deleteOrderById,
  fetchOrderById,
  fetchOrders,
  updateOrderById,
} from '../services/orderService.js'

export const getOrders = async (req, res, next) => {
  try {
    const orders = await fetchOrders(req.user)
    res.json({ data: orders })
  } catch (error) {
    next(error)
  }
}

export const getOrderById = async (req, res, next) => {
  try {
    const order = await fetchOrderById(req.params.id, req.user)
    if (!order) {
      return res.status(404).json({ error: 'Order not found' })
    }
    res.json({ data: order })
  } catch (error) {
    next(error)
  }
}

export const createOrder = async (req, res, next) => {
  try {
    const order = await addOrder({ ...req.body, created_by: req.user.id })
    res.status(201).json({ data: order })
  } catch (error) {
    next(error)
  }
}

export const updateOrder = async (req, res, next) => {
  try {
    const updated = await updateOrderById(req.params.id, req.body)
    if (!updated) {
      return res.status(404).json({ error: 'Order not found' })
    }
    res.json({ data: updated })
  } catch (error) {
    next(error)
  }
}

export const deleteOrder = async (req, res, next) => {
  try {
    const deleted = await deleteOrderById(req.params.id)
    if (!deleted) {
      return res.status(404).json({ error: 'Order not found' })
    }
    res.json({ data: { id: req.params.id } })
  } catch (error) {
    next(error)
  }
}
