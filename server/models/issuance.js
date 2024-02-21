import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  start: Date,
  end: Date,
  department: String,
  receiver: String,
})

export const Issuance = mongoose.model('Issuance', schema)
