const mongoose = require('mongoose')

const { ObjectId } = mongoose.Schema.Types

const productSchema = mongoose.Schema({
  weight: {
    value: {
      type: Number,
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
  },
  tax: {
    type: Number,
  },
  paymentInfo: {
    type: String,
    required: true,
  },
  finalPrice: {
    type: Number,
    required: true,
  },
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product
