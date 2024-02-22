import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import PropTypes from 'prop-types'

const IssuanceHistory = ({ issuance }) => {
  return (
    <Box sx={{ border: 1 }}>
      <Typography>Department: {issuance?.department}</Typography>
      <Typography>Receiver name: {issuance?.receiver}</Typography>
      <Typography>Starting date: {issuance?.start}</Typography>
      <Typography>Ending date: {issuance?.end}</Typography>
    </Box>
  )
}

IssuanceHistory.propTypes = {
  issuance: PropTypes.shape({
    department: PropTypes.string,
    receiver: PropTypes.string,
    start: PropTypes.string,
    end: PropTypes.string,
  }),
}

export default IssuanceHistory
