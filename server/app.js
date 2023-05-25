import express from 'express'
import dotenv from 'dotenv'; import mongoose from 'mongoose'
dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
}
)
