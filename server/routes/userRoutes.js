import express from 'express'
import {
  register, login, changePassword, getAllUsers
  , checkRegister
} from '../controllers/userController.js'

export const router = express.Router()

router.post('/register', register)
router.post('/check-register', checkRegister)
router.post('/login', login)
router.post('/password', changePassword)
router.get('/allusers/:id', getAllUsers)
