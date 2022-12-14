import * as React from 'react';
import Stepper from './stepper'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard(props) {
  let colour;
  if (props.data.status === 'Submitted') {
    colour = 'text-info fw-bold'
  }
  if (props.data.status === 'Approved') {
    colour = 'text-primary fw-bold'
  }
  if (props.data.status === 'Booked') {
    colour = 'text-success fw-bold'
  }

  return (
    <div>
      <h1 className='text-center'>Your Applications</h1>
      <Card sx={{ maxWidth: 1045, marginTop: 10, border: 1, borderColor: 'text.primary', display: 'flex' }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className="fw-bold">
              {props.data.companyName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Stepper status={props.data.status}/>
            </Typography>
          </CardContent>
        </CardActionArea>
        
      </Card>
    </div>
  );
}
