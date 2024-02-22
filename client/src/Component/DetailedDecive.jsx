import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Typography from '@mui/material/Typography'
import IssuanceHistory from './IssuanceHistory'

const DetailedDevice = () => {
  const [device, setDevice] = useState()
  const { id } = useParams()

  useEffect(() => {
    const fetchDevice = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/devices/${id}`
        )
        const data = response.data
        setDevice(data)
      } catch (error) {
        console.log('Failed to fetch device', error)
      }
    }
    fetchDevice()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <h1>device</h1>
      <Typography>Device name: {device?.name}</Typography>{' '}
      <Typography>Manufacturer: {device?.manufacturer}</Typography>{' '}
      <Typography>Device number: {device?.deviceNumber}</Typography>{' '}
      <Typography>
        Current issuance: {device?.currentIssuance?.receiver}
        {','}
        Department: {device?.currentIssuance?.department}
        {','}
        start:{' '}
        {device?.currentIssuance?.start
          ? device?.currentIssuance?.start
          : 'N/A '}
        {','}
        end:{' '}
        {device?.currentIssuance?.end ? device?.currentIssuance?.end : 'N/A'}
      </Typography>{' '}
      <Typography>Issuance history:</Typography>
      <div>
        {device?.issuanceHistory?.map((issuance) => (
          <IssuanceHistory key={issuance._id} issuance={issuance} />
        ))}
      </div>
    </div>
  )
}

export default DetailedDevice
