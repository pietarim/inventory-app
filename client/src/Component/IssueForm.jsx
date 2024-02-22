import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useState } from 'react'
import PropTypes from 'prop-types'
import SearchDevice from './SearchDevice'
import axios from 'axios'

const IssueForm = ({ devices }) => {
  const [date, setDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [name, setName] = useState('')
  const [department, setDepartment] = useState('')
  const [manufacturer, setManufacturer] = useState('')
  const [deviceNumber, setDeviceNumber] = useState('')
  const [receiver, setReceiver] = useState('')

  const handleDateChange = (event) => {
    event.preventDefault()
    setDate(event.target.value)
  }

  const handleEndDateChange = (event) => {
    event.preventDefault()
    setEndDate(event.target.value)
  }

  const handleNameChange = (event) => {
    event.preventDefault()
    setName(event.target.value)
  }

  const handleDepartmentChange = (event) => {
    event.preventDefault()
    setDepartment(event.target.value)
  }

  const handleManufacturerChange = (event) => {
    event.preventDefault()
    setManufacturer(event.target.value)
  }

  const handleDeviceNumberChange = (event) => {
    event.preventDefault()
    setDeviceNumber(event.target.value)
  }

  const handleReceiverChange = (event) => {
    event.preventDefault()
    setReceiver(event.target.value)
  }

  const handleAddIssuance = async (event) => {
    event.preventDefault()
    try {
      await axios.post('http://localhost:3001/api/issuances', {
        date,
        endDate,
        department,
        deviceNumber,
        receiver,
      })
    } catch (error) {
      console.log('Failed to add issuance', error)
    }
  }

  return (
    <>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleAddIssuance}
      >
        <TextField
          value={date}
          onChange={handleDateChange}
          id="outlined-basic"
          label="Date (yyyy-mm-dd)"
          variant="outlined"
        />
        <TextField
          value={endDate}
          onChange={handleEndDateChange}
          id="filled-basic"
          label="End date (yyyy-mm-dd)"
          variant="filled"
        />
        <br></br>
        <TextField
          value={name}
          onChange={handleNameChange}
          id="standard-basic"
          label="Device"
        />
        <TextField
          value={department}
          onChange={handleDepartmentChange}
          id="standard-basic"
          label="Department"
        />
        <TextField
          value={manufacturer}
          onChange={handleManufacturerChange}
          id="standard-basic"
          label="Manufacturer"
        />
        <br></br>
        <TextField
          value={deviceNumber}
          onChange={handleDeviceNumberChange}
          id="standard-basic"
          label="Device number"
        />
        <TextField
          value={receiver}
          onChange={handleReceiverChange}
          id="standard-basic"
          label="Receivers name"
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
      <SearchDevice
        setName={setName}
        setManufacturer={setManufacturer}
        setDeviceNumber={setDeviceNumber}
        devices={devices}
      />
    </>
  )
}

IssueForm.propTypes = {
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

export default IssueForm
