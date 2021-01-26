/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { CircularProgress, Grid } from '@material-ui/core';
import NavigationTemplate from '../templates/NavigationTemplate';
import getTrending from '../api/dataProvider';
import MovieCard from '../components/MovieCard';

const HomePage = () => {
  const [moviesList, setMoviesList] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTrending()
      .then((res) => {
        setMoviesList(res.data.results);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <CircularProgress />
  ) : (
    <NavigationTemplate>
      <Grid container direction="row" justify="space-evenly" alignItems="stretch">
        {moviesList.map(({ poster_path, title, vote_average, id }) => (
          <MovieCard
            image={`https://image.tmdb.org/t/p/w300${poster_path}`}
            title={title}
            average={vote_average}
            id={id}
            key={id}
          />
        ))}
      </Grid>
    </NavigationTemplate>
  );
};

export default HomePage;
