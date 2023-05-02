import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 4,
    max: 32,
    unique: true
  },
  email: {
    type: String,
    required: true,
    max: 40,
    unique: true
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 255
  },
  isAvatarImageSet: {
    type: Boolean,
    default: false
  },
  avatarImage: {
    type: String,
    default: ''
  }
})

export const User = mongoose.model('User', userSchema)
