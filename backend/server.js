import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
// import products from './data/products.js'

import productRoute from './routes/product.route.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('server is running')
})

app.use('/api/products', productRoute)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `server is running in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`
      .yellow.bold
  )
)
