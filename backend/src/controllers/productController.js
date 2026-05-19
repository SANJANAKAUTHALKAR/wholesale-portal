import {
  addProduct,
  deleteProductById,
  fetchProductById,
  fetchProducts,
  updateProductById,
} from '../services/productService.js'

const normalizeTierPricing = (tierPricing) => {
  if (!Array.isArray(tierPricing)) {
    throw new Error('tier_pricing must be an array')
  }

  const parsed = tierPricing.map((tier) => {
    if (typeof tier !== 'object' || tier === null) {
      throw new Error('Each tier pricing item must be an object')
    }
    const minQuantity = Number(tier.minQuantity ?? tier.min_quantity ?? tier.min_order_quantity)
    const price = Number(tier.price ?? tier.unit_price)

    if (!Number.isInteger(minQuantity) || minQuantity <= 0) {
      throw new Error('Each tier_pricing entry requires a valid minQuantity greater than 0')
    }
    if (Number.isNaN(price) || price < 0) {
      throw new Error('Each tier_pricing entry requires a valid non-negative price')
    }

    return { minQuantity, price }
  })

  return parsed.sort((a, b) => a.minQuantity - b.minQuantity)
}

const validateProductPayload = (payload, isUpdate = false) => {
  const { name, price, inventory_quantity, min_order_quantity, tier_pricing, sku, category } = payload

  if (!isUpdate && !name) {
    throw new Error('Product name is required')
  }

  if (name && typeof name !== 'string') {
    throw new Error('Product name must be a string')
  }

  if (sku && typeof sku !== 'string') {
    throw new Error('SKU must be a string')
  }

  if (category && typeof category !== 'string') {
    throw new Error('Category must be a string')
  }

  if (price !== undefined) {
    const numeric = Number(price)
    if (Number.isNaN(numeric) || numeric < 0) {
      throw new Error('Price must be a non-negative number')
    }
  }

  if (inventory_quantity !== undefined) {
    const quantity = Number(inventory_quantity)
    if (!Number.isInteger(quantity) || quantity < 0) {
      throw new Error('Inventory quantity must be a non-negative integer')
    }
  }

  if (min_order_quantity !== undefined) {
    const moq = Number(min_order_quantity)
    if (!Number.isInteger(moq) || moq <= 0) {
      throw new Error('MOQ must be an integer greater than 0')
    }
  }

  if (tier_pricing !== undefined) {
    payload.tier_pricing = normalizeTierPricing(tier_pricing)
  }

  return {
    ...payload,
    min_order_quantity: min_order_quantity !== undefined ? Number(min_order_quantity) : undefined,
    price: price !== undefined ? Number(price) : undefined,
    inventory_quantity: inventory_quantity !== undefined ? Number(inventory_quantity) : undefined,
    category,
    sku,
  }
}

export const getProducts = async (req, res, next) => {
  try {
    const filters = {
      search: req.query.search,
      sku: req.query.sku,
      category: req.query.category,
      minPrice: req.query.minPrice,
      maxPrice: req.query.maxPrice,
      minMOQ: req.query.minMOQ,
    }
    const products = await fetchProducts(filters)
    res.json({ data: products })
  } catch (error) {
    next(error)
  }
}

export const getProductById = async (req, res, next) => {
  try {
    const product = await fetchProductById(req.params.id)
    if (!product) {
      return res.status(404).json({ error: 'Product not found' })
    }
    res.json({ data: product })
  } catch (error) {
    next(error)
  }
}

export const createProduct = async (req, res, next) => {
  try {
    const validatedPayload = validateProductPayload(req.body)
    const newProduct = await addProduct({
      ...validatedPayload,
      min_order_quantity: validatedPayload.min_order_quantity ?? 1,
      tier_pricing: validatedPayload.tier_pricing ?? [],
    })
    res.status(201).json({ data: newProduct })
  } catch (error) {
    next(error)
  }
}

export const updateProduct = async (req, res, next) => {
  try {
    const validatedPayload = validateProductPayload(req.body, true)
    const updated = await updateProductById(req.params.id, validatedPayload)
    if (!updated) {
      return res.status(404).json({ error: 'Product not found' })
    }
    res.json({ data: updated })
  } catch (error) {
    next(error)
  }
}

export const deleteProduct = async (req, res, next) => {
  try {
    const deleted = await deleteProductById(req.params.id)
    if (!deleted) {
      return res.status(404).json({ error: 'Product not found' })
    }
    res.json({ data: { id: req.params.id } })
  } catch (error) {
    next(error)
  }
}
