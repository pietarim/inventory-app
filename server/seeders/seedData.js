import mongoose from 'mongoose'
import { dbUri } from '../config.js'
import { Device } from '../models/device.js'
import { Issuance } from '../models/issuance.js'
import { devices, issuances } from './devData.js'

try {
  await mongoose.connect(dbUri)
} catch (error) {
  console.log(error)
}

const clearData = async () => {
  await Device.deleteMany({})
  await Issuance.deleteMany({})
}

const seedData = async () => {
  const savedDevices = await Device.insertMany(devices)
  const savedIssuances = await Issuance.insertMany(issuances)

  await Device.findByIdAndUpdate(
    savedDevices[0],
    { $set: { currentIssuance: savedIssuances[0]._id } },
    { multi: true }
  )

  await Device.findByIdAndUpdate(
    savedDevices[1],
    { $set: { currentIssuance: savedIssuances[1]._id } },
    { multi: true }
  )

  await Device.findByIdAndUpdate(
    savedDevices[2],
    { $set: { currentIssuance: savedIssuances[2]._id } },
    { multi: true }
  )

  await Device.findByIdAndUpdate(
    savedDevices[3],
    { $push: { issuanceHistory: savedIssuances[3]._id } },
    { multi: true }
  )

  await Device.findByIdAndUpdate(
    savedDevices[4],
    { $push: { issuanceHistory: savedIssuances[4]._id } },
    { multi: true }
  )

  await Device.findByIdAndUpdate(
    savedDevices[4],
    { $push: { issuanceHistory: savedIssuances[5]._id } },
    { multi: true }
  )
}

const seed = async () => {
  await clearData()
  await seedData()
  mongoose.connection.close()
}

seed()
