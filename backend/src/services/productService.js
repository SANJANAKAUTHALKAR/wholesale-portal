import supabase from '../config/supabaseClient.js'

const buildProductsQuery = ({ search, sku, minPrice, maxPrice, minMOQ, category }) => {
  let query = supabase.from('products').select('*')

  if (search) {
    query = query.or(`name.ilike.%${search}%,description.ilike.%${search}%`)
  }

  if (sku) {
    query = query.ilike('sku', `%${sku}%`)
  }

  if (category) {
    query = query.ilike('category', `%${category}%`)
  }

  if (minPrice) {
    query = query.gte('price', Number(minPrice))
  }

  if (maxPrice) {
    query = query.lte('price', Number(maxPrice))
  }

  if (minMOQ) {
    query = query.gte('min_order_quantity', Number(minMOQ))
  }

  return query.order('created_at', { ascending: false })
}

export const fetchProducts = async (filters = {}) => {
  const query = buildProductsQuery(filters)
  const { data, error } = await query
  if (error) {
    throw error
  }
  return data
}

export const fetchProductById = async (id) => {
  const { data, error } = await supabase.from('products').select('*').eq('id', id).single()
  if (error && error.code !== 'PGRST116') {
    throw error
  }
  return data
}

export const addProduct = async (product) => {
  const { data, error } = await supabase.from('products').insert([product]).single()
  if (error) {
    throw error
  }
  return data
}

export const updateProductById = async (id, updates) => {
  const { data, error } = await supabase.from('products').update(updates).eq('id', id).single()
  if (error && error.code !== 'PGRST116') {
    throw error
  }
  return data
}

export const deleteProductById = async (id) => {
  const { data, error } = await supabase.from('products').delete().eq('id', id).single()
  if (error && error.code !== 'PGRST116') {
    throw error
  }
  return data
}
