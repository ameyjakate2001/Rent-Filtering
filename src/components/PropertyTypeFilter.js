import React from 'react'
import { InputLabel, Select, MenuItem } from '@mui/material'

const PropertyTypeFilter = ({
  property_type,
  propertyType,
  setPropertyType,
}) => {
  return (
    <div>
      <InputLabel id='demo-simple-select-label'>Property Type</InputLabel>
      <Select
        fullWidth
        onChange={(e) => setPropertyType(e.target.value)}
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={propertyType}
        label='Type'
      >
        {property_type.map((type) => (
          <MenuItem value={type} fontweight='bold'>
            {type}
          </MenuItem>
        ))}
      </Select>
    </div>
  )
}

export default PropertyTypeFilter
