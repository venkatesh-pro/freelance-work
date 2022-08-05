const express = require('express')
const cors = require('cors')
const userRouter = require('./router/userRouter.js')
const productRouter = require('./router/productRouter.js')
const { default: mongoose } = require('mongoose')
require('dotenv').config({ path: './.env' })

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)

// mongodb
const connectToDb = async () => {
  await mongoose.connect('mongodb://localhost:27017/vigneshDB')
  console.log('Connected to DB ')
}
connectToDb()
const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`App is running on PORT => ${PORT}`)
})
