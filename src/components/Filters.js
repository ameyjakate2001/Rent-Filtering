import React, { useState } from 'react'
import LocationFilter from './LocationFilter'
import TimeFilter from './TimeFilter'
import PriceFilter from './PriceFilter'
import { Grid, Button } from '@mui/material'
import PropertyTypeFilter from './PropertyTypeFilter'

const Filters = ({ houses, searchProperty }) => {
  const locations = [...new Set(houses.map((house) => house.location))]
  const property_type = [...new Set(houses.map((house) => house.property_type))]
  const [location, setLocation] = useState(locations[0])
  const [date, setDate] = useState(Date.now())
  const [price, setPrice] = useState({
    label: '$0 - $250',
    minValue: 0,
    maxValue: 250,
  })
  const [propertyType, setPropertyType] = useState(property_type[0])

  const submitHandler = () => {
    searchProperty(location, date, price, propertyType)
  }

  return (
    <div className='filters'>
      <Grid container spacing={2}>
        <Grid item xs>
          <LocationFilter
            locations={locations}
            location={location}
            setLocation={setLocation}
          />
        </Grid>
        <Grid item xs>
          <TimeFilter date={date} setDate={setDate} />
        </Grid>
        <Grid item xs>
          <PriceFilter price={price} setPrice={setPrice} />
        </Grid>
        <Grid item xs>
          <PropertyTypeFilter
            property_type={property_type}
            propertyType={propertyType}
            setPropertyType={setPropertyType}
          />
        </Grid>
        <Grid
          item
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button variant='contained' color='success' onClick={submitHandler}>
            Search
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default Filters
