import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

const SearchDevice = ({
  devices,
  setName,
  setManufacturer,
  setDeviceNumber,
}) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    const results = devices.filter((device) =>
      device.deviceNumber.includes(searchTerm)
    )
    setSearchResults(results)
  }, [searchTerm])

  const handleDeviceSelect = (device) => {
    setName(device.name)
    setManufacturer(device.manufacturer)
    setDeviceNumber(device.deviceNumber)
  }

  return (
    <div style={{ marginTop: '16px' }}>
      <Divider />
      <TextField
        style={{ marginTop: '8px' }}
        variant="outlined"
        label="Search (with device number)"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul style={{ listStyleType: 'none' }}>
        {searchResults.map((item) => (
          <li key={item.deviceNumber}>
            <Typography
              style={{
                backgroundColor: !item.currentIssuance ? 'transparent' : 'red',
              }}
            >
              Device: {item.name}, Serial Number:{' '}
              <Link to={`/device/${item.deviceNumber}`}>
                {item.deviceNumber}
              </Link>
              , Manufacturer: {item.manufacturer}
              {item.currentIssuance ? ' (Issued)' : ' (Available)'}
            </Typography>{' '}
            {!item.currentIssuance ? (
              <Button
                onClick={() =>
                  handleDeviceSelect({
                    name: item.name,
                    manufacturer: item.manufacturer,
                    deviceNumber: item.deviceNumber,
                  })
                }
                variant="contained"
              >
                Add
              </Button>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  )
}

SearchDevice.propTypes = {
  setName: PropTypes.func,
  setManufacturer: PropTypes.func,
  setDeviceNumber: PropTypes.func,
  devices: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      manufacturer: PropTypes.string,
      deviceNumber: PropTypes.string,
      currentIssuance: PropTypes.shape({
        receiver: PropTypes.string,
        department: PropTypes.string,
        start: PropTypes.string,
        end: PropTypes.string,
      }),
    })
  ),
}

export default SearchDevice
