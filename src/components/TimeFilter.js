import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { InputLabel } from '@mui/material'
import moment from 'moment'

const TimeFilter = ({ date, setDate }) => {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <InputLabel id='demo-simple-select-label'>When</InputLabel>

        <DatePicker
          fullWidth
          value={date}
          onChange={(newValue) => {
            setDate(moment(newValue).format('YYYY-MM-DD'))
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  )
}

export default TimeFilter
