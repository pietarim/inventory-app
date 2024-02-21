import express from 'express'
import { returnDeviceById, returnDevices } from '../controllers/devices.js'

const router = express.Router()

router.get('/:id', returnDeviceById)

router.get('/', returnDevices)

export default router
