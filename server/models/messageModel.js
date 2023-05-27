import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema({
  message: String,
  from: String
})

export const Message = mongoose.model('Message', messageSchema)
