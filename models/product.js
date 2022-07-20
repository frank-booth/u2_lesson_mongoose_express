const { Schema } = require('mongoose')

const productSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    brand: { type: Schema.Types.ObjectId, ref: 'Brand' }
  },
  { timestamps: true }
)

module.exports = productSchema
