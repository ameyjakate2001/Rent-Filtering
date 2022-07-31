import React from 'react'
import { Grid, Typography } from '@mui/material'

import House from './House'

const Houses = ({ houses }) => {
  return (
    <div className='houses'>
      <Grid
        container
        spacing={2}
        alignContent='center'
        justifyItems='center'
        alignItems='center'
        justifyContent='center'
      >
        {houses.length ? (
          houses.map((house) => (
            <Grid item md={4}>
              <House house={house} />
            </Grid>
          ))
        ) : (
          <Typography variant='h5' textAlign='center' color='red'>
            No Data To show!! Try Another Filter
          </Typography>
        )}
      </Grid>
    </div>
  )
}

export default Houses
