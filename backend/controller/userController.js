const User = require('../model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const hashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 12)
  return hashedPassword
}
const comparePassword = (password, hashPassword) => {
  return bcrypt.compare(password, hashPassword)
}

exports.register = async (req, res) => {
  try {
    const { email, password, name } = req.body
    const hashedPasswordOut = await hashPassword(password)

    const userExist = await User.findOne({ email })

    if (userExist) {
      return res.status(400).json({
        error: 'Email is taken',
      })
    }
    const user = await User.create({ email, name, password: hashedPasswordOut })

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRECT, {
      expiresIn: '7d',
    })
    user.password = undefined
    res.json({
      user,
      token,
    })
  } catch (error) {
    console.log(error)
  }
}

exports.login = async (req, res) => {
  try {
    const { password, email } = req.body
    const user = await User.findOne({ email })
    if (!user)
      return res.status(400).json({
        error: 'Invalid Email Or Password',
      })
    const match = await comparePassword(password, user.password)
    console.log(match)
    if (match) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRECT, {
        expiresIn: '7d',
      })
      user.password = undefined

      res.json({
        user,
        token,
      })
    } else {
      res.status(400).json({
        error: 'Invalid Email Or Password',
      })
    }
  } catch (error) {
    console.log(error)
    res.json({
      error: error.message,
    })
  }
}
exports.getUsers = async (req, res) => {
  try {
    const user = await User.find({ $text: { $search: req.params.user } })
    res.json(user)
  } catch (error) {
    console.log(error)
    res.json({
      error: error.message,
    })
  }
}
