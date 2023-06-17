import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import { router } from './routes/userRoutes.js'
import { Server as SocketServer } from 'socket.io'
import http from 'http'
import bodyParser from 'body-parser'

dotenv.config()

const url = process.env.URL

const app = express()
const port = process.env.PORT || 5000

const server = http.createServer(app)

const io = new SocketServer(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
})

// Middleware
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api/auth', router)

// Socket.io
io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`)

  socket.on('disconnect', () => {
    console.log('User disconnected', socket.id)
  })
})

// MongoDB
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err))

// Start server
server.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
