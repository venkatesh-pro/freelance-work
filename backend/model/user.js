const mongoose = require('mongoose')

const { ObjectId } = mongoose.Schema.Types

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    text: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
    text: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: Array,
    default: 'User',
  },
})

const User = mongoose.model('User', userSchema)

module.exports = User
