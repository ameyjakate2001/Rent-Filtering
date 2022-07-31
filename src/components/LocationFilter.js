import React from 'react'
import { InputLabel, Select, MenuItem } from '@mui/material'

const LocationFilter = ({ locations, location, setLocation }) => {
  return (
    <div className='filter'>
      <InputLabel id='location-label'>Location</InputLabel>
      <Select
        fullWidth
        onChange={(e) => setLocation(e.target.value)}
        labelId='location-label'
        id='location-label'
        value={location}
        label='Location'
      >
        {locations &&
          locations.map((location) => (
            <MenuItem value={location}>{location}</MenuItem>
          ))}
      </Select>
    </div>
  )
}

export default LocationFilter
