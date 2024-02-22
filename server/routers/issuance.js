import express from 'express'
import { saveIssuance } from '../controllers/issuance.js'

const router = express.Router()

router.post('/', saveIssuance)

export default router
