import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  name: String,
  manufacturer: String,
  devicaNumber: String,
  currentIssuance: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Issuance',
  },
  issuanceHistory: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Issuance',
    },
  ],
})

export const Device = mongoose.model('Device', schema)
