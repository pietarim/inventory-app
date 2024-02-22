import { Issuance } from '../models/issuance.js'
import { Device } from '../models/device.js'

export const createIssuance = async (issuance) => {
  const { receiver, deviceNumber, date, endDate, department } = issuance
  const issuanceData = new Issuance({
    receiver,
    department,
    start: date,
    end: endDate,
  })
  const savedIssuance = await issuanceData.save()
  const device = await Device.findOne({ deviceNumber })
  await Device.findByIdAndUpdate(device._id, {
    $set: { currentIssuance: savedIssuance._id },
  })
}
