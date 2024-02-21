import { Device } from '../models/device.js'
import { Issuance } from '../models/issuance.js'

export const getDeviceById = async (id) => {
  const device = await Device.find({ deviceNumber: id })
  return device
}

export const getDevices = async () => {
  const devices = await Device.find(
    {},
    'name manufacturer deviceNumber'
  ).populate('currentIssuance')

  return devices
}
