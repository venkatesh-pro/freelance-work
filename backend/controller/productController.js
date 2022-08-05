const Product = require('../model/product')

exports.create = async (req, res) => {
  try {
    console.log(req.body)
    await Product.create(req.body)
    res.send('created')
  } catch (error) {
    console.log(error)
  }
}
