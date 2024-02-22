import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Divider from '@mui/material/Divider'

const SearchDevice = ({ devices }) => {
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
            <Typography>
              Device: {item.name}, Serial Number: {item.deviceNumber},
              Manufacturer: {item.manufacturer}
            </Typography>
          </li>
        ))}
      </ul>
    </div>
  )
}

SearchDevice.propTypes = {
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
