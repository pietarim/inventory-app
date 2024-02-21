import express from 'express'
/* import dotenv from 'dotenv' */
import cors from 'cors'
import { port, dbUri } from './config.js'
import issuanceRouter from './routers/issuance.js'

/* dotenv.config() */

const app = express()
app.use(express.json())
app.use(cors())

app.use('/issuance', issuanceRouter)
app.get('/', (req, res) => {
  res.send('inventory')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
