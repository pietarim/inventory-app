import react from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

const IssueForm = () => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Date" variant="outlined" />
      <TextField id="filled-basic" label="End date" variant="filled" />
      <br></br>
      <TextField id="standard-basic" label="Name" />
      <TextField id="standard-basic" label="Department" />
      <TextField id="standard-basic" label="Manufacturer" />
      <br></br>
      <TextField id="standard-basic" label="Device number" />
      <TextField id="standard-basic" label="Receiver" />
      <TextField id="standard-basic" label="Start date" />
    </Box>
  )
}

export default IssueForm
