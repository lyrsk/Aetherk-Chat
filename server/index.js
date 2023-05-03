import express from 'express'
import cors from 'cors'
import mogoose from 'mongoose'
import { router } from './routes/userRoutes.js'
import dotenv from 'dotenv'; dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use('/api/auth', router)

mogoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() =>
    console.log('Conectado a MongoDB'))
  .catch(err =>
    console.log(err.message))

app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`)
})
