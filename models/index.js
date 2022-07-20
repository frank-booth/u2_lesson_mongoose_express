const mongoose = require('mongoose')
const productSchema = require('./Product')
const brandSchema = require('./Brand')

const Product = mongoose.model('Product', productSchema)
const Brand = mongoose.model('Brand', brandSchema)

module.exports = {
  Product,
  Brand
}
