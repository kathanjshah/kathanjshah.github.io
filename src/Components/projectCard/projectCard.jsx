import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="300"
        image={props.img}
        alt={props.subheader}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.subheader}
        </Typography>
      </CardContent>
      <CardActions>
      <IconButton aria-label="add to favorites">
          <a href={props.git}><GitHubIcon/></a>
        </IconButton>
      </CardActions>
    </Card>
  );
}