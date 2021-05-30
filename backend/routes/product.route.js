import express from 'express'
const router = express.Router()
import { getAll, getOne } from '../controllers/product.controller.js'

router.get('/', getAll)
router.get('/:id', getOne)

export default router
