import bcrypt from 'bcrypt'
import { User } from '../models/userModel.js'

async function register (req, res, next) {
  try {
    const { username, email, password } = req.body

    const usernameCheck = await User.findOne({ username })
    if (usernameCheck) {
      return res.json({ message: 'Usuario en uso', status: false })
    }

    const emailCheck = await User.findOne({ email })
    if (emailCheck) {
      return res.json({ message: 'Email en uso', status: false })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
      email,
      username,
      password: hashedPassword
    })
    delete user.password
    return res.json({ status: true, user })
  } catch (ex) {
    next(ex)
  }
}

async function checkUsername (req, res, next) {
  try {
    const { username } = req.body
    const usernameCheck = await User.findOne({ username })
    if (usernameCheck) {
      return res.json({ message: 'Usuario en uso', status: false })
    }
    return res.json({ message: 'Usuario disponible', status: true })
  } catch (ex) {
    next(ex)
  }
}

async function login (req, res, next) {
  try {
    const { username, password } = req.body

    const user = await User.findOne({ username })
    if (!user) {
      return res.json({
        msg: 'Usuario o contraseña incorrecto',
        status: false
      })
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password)
    if (!isPasswordCorrect) {
      return res.json({
        msg: 'Usuario o contraseña incorrecto',
        status: false
      })
    }
    delete user.password
    return res.json({ status: true, user })
  } catch (ex) {
    next(ex)
  }
}

async function changePassword (req, res, next) {
  try {
    const { email } = req.body

    const user = await User.findOne({ email })
    if (!user) {
      return res.json({
        msg: 'El email ingresado no existe',
        status: false
      })
    }

    // Resto del código para cambiar la contraseña
    // ...
    return res.json({ status: true })
  } catch (ex) {
    next(ex)
  }
}

async function getAllUsers (req, res, next) {
  try {
    const users = await User.find({ _id: { $ne: req.params.id } }).select([
      'email',
      'username',
      'avatarImage',
      '_id'
    ])
    return res.json(users)
  } catch (ex) {
    next(ex)
  }
}

export {
  register, login, changePassword, getAllUsers,
  checkUsername
}
