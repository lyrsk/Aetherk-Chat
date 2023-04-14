const express = require('express')
const cors = require('cors')
const mogoose = require('mongoose')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

mogoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() =>
    console.log('Conectado a MongoDB'))
  .catch(err =>
    console.log(err.message))

const server = app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`)
})
