import { CardMedia, CardActionArea, Grid, Link } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const CountryCard = ({ country }) => {
  const link = "/teams/" + country.id;

  return (
    <Grid item xs={2} key={country.id}>
      <Link to={link} style={{ textDecoration: "none" }}>
        <Card id={country.id} sx={{ display: 'flex', width: 225, maxHeight: 225, margin: 3 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={`${country.image_path}`}
              alt={`${country.name}`}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                {country.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
}

export default CountryCard;