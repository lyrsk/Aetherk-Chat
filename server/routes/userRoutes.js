import express from 'express'
import { register, login, changePassword } from '../controllers/userController.js'

export const router = express.Router()
router.post('/register', register)
router.post('/login', login)
router.post('/password', changePassword)
