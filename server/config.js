import dotenv from 'dotenv'

dotenv.config()

export const port = process.env.PORT || 3001
export const dbUri = process.env.DB_URI || 'mongodb://localhost:27017/issuance'
export const clientUrl = process.env.CLIENT_URL || 'http://localhost:3000'
