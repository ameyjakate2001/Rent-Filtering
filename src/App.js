import Houses from './components/Houses'
import Filters from './components/Filters'
import { Typography } from '@mui/material'
import { houses } from './data'
import { useState } from 'react'

function App() {
  const [data, setData] = useState(houses)
  const searchProperty = (location, date, price, propertyType) => {
    let filteredData = houses.filter((house) => {
      const valid =
        house.property_type === propertyType &&
        house.price >= price.minValue &&
        house.price <= price.maxValue &&
        house.when <= date
      return valid
    })
    setData(filteredData)
  }

  return (
    <div className='App'>
      <Typography align='center' variant='h4'>
        Search Properties To Rent
      </Typography>
      <Filters houses={houses} searchProperty={searchProperty} />
      <Houses houses={data} />
    </div>
  )
}

export default App
