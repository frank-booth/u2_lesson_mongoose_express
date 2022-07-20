const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = 3001
const db = require('./db')
const { Product, Brand } = require('./models')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send('landing page')
})

app.get('/products', async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

app.get('/products/:id', async (req, res) => {
  try {
    const { id } = req.params
    const product = await Product.findById(id)
    if (!product) throw Error('Product not found')
    res.json(product)
  } catch (e) {
    console.log(e)
    res.send('Product not found!')
  }
})

app.get('/brands', async (req, res) => {
  const brands = await Brand.find({})
  res.json(brands)
})

app.get('/brands/:id', async (req, res) => {
  try {
    const { id } = req.params
    const brand = await Brand.findById(id)
    if (!Brand) throw Error('Brand not found')
    res.json(brand)
  } catch (e) {
    console.log(e)
    res.send('Brand not found!')
  }
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
