import express from 'express'
import cors from 'cors'
import { port, dbUri, clientUrl } from './config.js'
import issuanceRouter from './routers/issuance.js'
import deviceRouter from './routers/devices.js'
import mongoose from 'mongoose'

const app = express()
app.use(express.json())
app.use(
  cors({
    origin: [clientUrl],
  })
)

try {
  await mongoose.connect(dbUri)
  console.log('Connected to database')
} catch (error) {
  console.log('Failed to connect to database', error)
}

app.use('/api/devices', deviceRouter)
app.use('/api/issuances', issuanceRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
