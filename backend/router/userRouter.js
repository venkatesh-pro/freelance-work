const express = require('express')
const { register, login, getUsers } = require('../controller/userController')

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.get('/users/:user', getUsers)
module.exports = router
