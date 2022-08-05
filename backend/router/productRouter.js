const express = require('express')
const { create } = require('../controller/productController')

const router = express.Router()

router.post('/createproduct', create)

module.exports = router
