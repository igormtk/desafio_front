import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import UpdatedDate from '../../services/date';

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 180 }}>
      <CardActionArea>
        <CardContent>
            <Typography variant="body2" color="text.secondary">
                {props.title}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
                {props.info}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Last Update: <UpdatedDate/>
            </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
