import { createIssuance } from '../queries/issuance.js'

export const saveIssuance = async (req, res) => {
  const issuance = req.body
  try {
    await createIssuance(issuance)
    res.status(201).send('Issuance saved')
  } catch (error) {
    res.status(500).send('Failed to save issuance')
  }
}
