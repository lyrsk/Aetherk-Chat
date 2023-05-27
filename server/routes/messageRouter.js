import express from 'express'
import { save, getMessages } from '../controllers/messageController.js'

const router = express.Router()

router.post('/save', save)
router.get('/messages', getMessages)

export default router
