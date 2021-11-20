import React, { useEffect, useState } from 'react';
import IMovie from 'types/Movie';
import MovieList from 'components/MovieList/MovieList';
import { getPopularMovies } from 'api/dataProvider';
import { HomePageWrapper } from './HomePage.styles';

const HomePage = () => {
    const [movieList, setMovieList] = useState<Array<IMovie>>([]);

    useEffect(() => {
        getPopularMovies().then((resp) => {
            setMovieList(resp.data.results);
        });
    }, []);

    return (
        <HomePageWrapper>
            <MovieList movies={movieList} />;
        </HomePageWrapper>
    );
};

export default HomePage;
