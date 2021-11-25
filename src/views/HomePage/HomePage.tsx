import React, { useEffect, useState } from 'react';
import IMovie from 'types/Movie';
import MovieList from 'components/MovieList/MovieList';
import {
    getPopularMovies,
    getNowPlayingMovies,
    getTopRatedMovies,
    getUpcomingMovies,
    getSearchMovie,
} from 'api/dataProvider';
import { FilterNames } from 'enums/FiltersNames';
import LoadSpinner from 'components/LoadSpinner';
import NavTemplate from 'templates/NavigationTemplate';
import { useParams, useSearchParams } from 'react-router-dom';
import { HomePageWrapper } from './HomePage.styles';

const HomePage = () => {
    const { movies } = useParams();
    const [movieList, setMovieList] = useState<Array<IMovie>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        setIsLoading(true);
        if (movies === FilterNames.POPULAR) {
            getPopularMovies().then((resp) => {
                setMovieList(resp.data.results);
            });
        } else if (movies === FilterNames.NOW_PLAYING) {
            getNowPlayingMovies().then((resp) => {
                setMovieList(resp.data.results);
            });
        } else if (movies === FilterNames.TOP_RATED) {
            getTopRatedMovies().then((resp) => {
                setMovieList(resp.data.results);
            });
        } else if (movies === FilterNames.UPCOMING) {
            getUpcomingMovies().then((resp) => {
                setMovieList(resp.data.results);
            });
        } else if (movies === 'search') {
            const title = searchParams.get('title');
            if (title) {
                getSearchMovie(title).then((resp) => {
                    setMovieList(resp.data.results);
                });
            }
        }

        setIsLoading(false);
    }, [movies, searchParams]);

    return (
        <NavTemplate>
            <HomePageWrapper>
                {isLoading ? <LoadSpinner /> : <MovieList movies={movieList} />}
            </HomePageWrapper>
        </NavTemplate>
    );
};

export default HomePage;
