import { getDeviceById, getDevices } from '../queries/device.js'

export const returnDeviceById = async (req, res) => {
  const device = await getDeviceById(req.params.id)
  res.send(device)
}

export const returnDevices = async (req, res) => {
  const devices = await getDevices()
  res.send(devices)
}
