import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  start: Date,
  end: Date,
  department: String,
  receiver: String,
})

export default mongoose.model('Issuance', schema)
