import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import { Grid } from '@mui/material'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import image from '../istockphoto-1188457556-612x612.jpg'
import BedIcon from '@mui/icons-material/Bed'
import BathroomIcon from '@mui/icons-material/Bathroom'
import HouseIcon from '@mui/icons-material/House'

const House = ({ house }) => {
  return (
    <div className='house'>
      <Card sx={{ maxWidth: 345, padding: 3 }} textAlign='left'>
        <CardMedia component='img' height='140' image={image} alt='flat' />
        <CardContent>
          <Typography textAlign='left' m={1}>
            <Box
              sx={{
                fontWeight: 'bold',
                fontSize: 'h5.fontSize',
                color: '#6132a8',
              }}
              component='span'
            >
              {house.price}
            </Box>
            <Box sx={{ fontSize: '10' }} component='span'>
              /month
            </Box>
          </Typography>
          <Typography
            gutterBottom
            variant='h5'
            sx={{ fontWeight: 'bold' }}
            component='div'
            textAlign='left'
          >
            {house.name}
          </Typography>
          <Typography variant='body2' color='text.primary'>
            {house.location}
          </Typography>
        </CardContent>
        <Grid container>
          <Grid container item xs={4}>
            <Grid item xs={4}>
              <BedIcon fontSize='small' color='info' />
            </Grid>
            <Grid item xs={8} fontSize='small' textAlign='left'>
              {house.beds} beds
            </Grid>
          </Grid>
          <Grid container item xs={4}>
            <Grid item xs={4}>
              <BathroomIcon fontSize='small' color='info' />
            </Grid>
            <Grid item xs={8} sx={{ fontSize: '13px' }} textAlign='left'>
              {house.bathrooms}bathrooms
            </Grid>
          </Grid>
          <Grid item container xs={4}>
            <Grid item xs={4}>
              <HouseIcon fontSize='small' color='info' />
            </Grid>
            <Grid item xs={8} fontSize='small' textAlign='left'>
              {house.size} m<sup>2</sup>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </div>
  )
}

export default House
