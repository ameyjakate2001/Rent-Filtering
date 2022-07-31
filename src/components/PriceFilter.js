import React from 'react'
import { InputLabel, Select, MenuItem } from '@mui/material'

const PriceFilter = ({ price, setPrice }) => {
  const prices = [
    {
      label: '$0 - $250',
      minValue: 0,
      maxValue: 250,
    },
    {
      label: '$250 - $500',
      minValue: 250,
      maxValue: 500,
    },
    {
      label: '$500 - $1500',
      minValue: 500,
      maxValue: 1500,
    },
    {
      label: '$1500 - $3000',
      minValue: 1500,
      maxValue: 3000,
    },
  ]
  return (
    <>
      <InputLabel id='demo-simple-select-label'>Price</InputLabel>
      <Select
        fullWidth
        onChange={(e) => setPrice(JSON.parse(e.target.value))}
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={JSON.stringify(price) || prices[0].label}
        label='Price'
      >
        {prices.map((price) => (
          <MenuItem
            value={JSON.stringify({
              label: price.label,
              minValue: price.minValue,
              maxValue: price.maxValue,
            })}
          >
            {price.label}
          </MenuItem>
        ))}
      </Select>
    </>
  )
}

export default PriceFilter
