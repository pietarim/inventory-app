import express from 'express'
import { issuanceByDeviceId } from '../controllers/issuance.js'

const router = express.Router()

router.get('/', issuanceByDeviceId)

export default router
