import asyncHandler from 'express-async-handler'
import Product from '../models/product.model.js'

const getAll = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

const getOne = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    res.json(product)
  } else {
    res.status(404).json({
      message: 'Product not found',
    })
  }
})

export { getAll, getOne }
