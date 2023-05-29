import express from 'express'
import {
  register, login, changePassword, getAllUsers
  , checkUsername
} from '../controllers/userController.js'

export const router = express.Router()

router.post('/register', register)
router.post('/check-username', checkUsername)
router.post('/login', login)
router.post('/password', changePassword)
router.get('/allusers/:id', getAllUsers)
