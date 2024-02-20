import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  name: String,
  manufacturer: String,
  department: String,
  usersName: String,
  idNumber: String,
  issuances: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Issuance',
    },
  ],
})

export default mongoose.model('Device', schema)
