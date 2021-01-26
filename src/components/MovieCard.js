import React from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  Grid,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    margin: '25px 0',
    maxWidth: '300px',
  },
  cardImage: {
    height: '450px',
    objectFit: 'contain',
    position: 'relative',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    height: '100%',
  },
  rating: {
    position: 'absolute',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#eb5a15',
    fontWeight: '600',
    fontSize: '18px',
    top: '10px',
    right: '10px',
  },
});

const MovieCard = ({ image, title, average, id }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Link className={classes.link} to={`/movie/${id}`}>
        <CardActionArea>
          <CardMedia className={classes.media} component="img" image={image} title={title} />
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.rating}
          >
            {average}
          </Grid>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

MovieCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  average: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default MovieCard;
