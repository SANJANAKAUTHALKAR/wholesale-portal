import supabase from '../config/supabaseClient.js'

export const fetchOrders = async (user) => {
  const query = supabase.from('orders').select('*').order('created_at', { ascending: false })
  const filtered = user.role === 'admin' ? query : query.eq('created_by', user.id)
  const { data, error } = await filtered
  if (error) {
    throw error
  }
  return data
}

export const fetchOrderById = async (id, user) => {
  const { data, error } = await supabase.from('orders').select('*').eq('id', id).single()
  if (error && error.code !== 'PGRST116') {
    throw error
  }

  if (!data) {
    return null
  }

  if (user.role !== 'admin' && data.created_by !== user.id) {
    return null
  }

  return data
}

export const addOrder = async (order) => {
  const { data, error } = await supabase.from('orders').insert([order]).single()
  if (error) {
    throw error
  }
  return data
}

export const updateOrderById = async (id, updates) => {
  const { data, error } = await supabase.from('orders').update(updates).eq('id', id).single()
  if (error && error.code !== 'PGRST116') {
    throw error
  }
  return data
}

export const deleteOrderById = async (id) => {
  const { data, error } = await supabase.from('orders').delete().eq('id', id).single()
  if (error && error.code !== 'PGRST116') {
    throw error
  }
  return data
}
