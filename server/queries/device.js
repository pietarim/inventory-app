import mongoose from 'mongoose'
import Device from '../models/device'
import { dbUri } from '../config.js'

mongoose.connect(dbUri)

export const getDeviceById = async (id) => {
  const device = await Device.find({ number: id })
  return device
}
