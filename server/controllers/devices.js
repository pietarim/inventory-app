import { getDeviceById, getDevices } from '../queries/device.js'

export const returnDeviceById = async (req, res) => {
  const device = await getDeviceById(req.params.id)
  return res.status(200).json(device)
}

export const returnDevices = async (req, res) => {
  const devices = await getDevices()
  res.status(200).json(devices)
}
