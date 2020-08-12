import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 180,
  },
});

export default function MediaCard(props) {
  console.log(props);
  const classes = useStyles();

  return (

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/images/shirt.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
             {props.product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>Rating:</b> {props.product.rating} ({props.product.numReviews})
          </Typography>
          <Typography variant="h4" color="textSecondary" component="h5">
            <b>Price:</b> ${props.product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant = "contained" size="small" color="secondary">
          Add
        </Button>
        <Button size="small" color="primary">
          Details
        </Button>
      </CardActions>
    </Card>
  );
}
