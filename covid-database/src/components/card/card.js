import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import UpdatedDate from '../../services/date';

export default function ActionAreaCard(props) {
  return (
    <Card>

      <CardActionArea>

        <CardContent>

            <Typography variant="body2" component="span" color="text.secondary">
                {props.title}
            </Typography>

            <Typography gutterBottom variant="h5">
                {props.info}
            </Typography>

            <Typography variant="body2" color="text.secondary" component="span">
                Last Update: <UpdatedDate/>
            </Typography>

        </CardContent>

      </CardActionArea>
      
    </Card>
  );
}
