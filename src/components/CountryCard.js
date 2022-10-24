import { Box, CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';

// const BASE_IMAGE_URL = "https://soccer.sportmonks.com/api/v2.0/countries?api_token=tbCWTKh3lLjje8s6NDKzhAX8Nn7el2MURsCQt04DmcapizeEMA23S1D2yaR0";

const CountryCard = ({ country }) => {
  return (
    <Card id={country.id} sx={{ display: 'flex', width: 400, margin: 5 }}>
      <CardMedia
        component="img"
        sx={{ width: 225, height: 150 }}
        image={`${country.image_path}`}
        alt="Country"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            {country.name}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

export default CountryCard;