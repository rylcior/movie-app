import React, { useEffect, useState } from 'react';
import IMovie from 'types/Movie';
import MovieList from 'components/MovieList/MovieList';
import {
    getPopularMovies,
    getNowPlayingMovies,
    getTopRatedMovies,
    getUpcomingMovies,
} from 'api/dataProvider';
import { FilterNames } from 'enums/FiltersNames';
import Filters from 'components/Filters/Filters';
import LoadSpinner from 'components/LoadSpinner';
import { HomePageWrapper } from './HomePage.styles';

const HomePage = () => {
    const [movieList, setMovieList] = useState<Array<IMovie>>([]);
    const [currentFilter, setCurrentFilter] = useState<FilterNames>(
        FilterNames.POPULAR
    );
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        setIsLoading(true);

        if (currentFilter === FilterNames.POPULAR) {
            getPopularMovies().then((resp) => {
                setMovieList(resp.data.results);
            });
        } else if (currentFilter === FilterNames.NOW_PLAYING) {
            getNowPlayingMovies().then((resp) => {
                setMovieList(resp.data.results);
            });
        } else if (currentFilter === FilterNames.TOP_RATED) {
            getTopRatedMovies().then((resp) => {
                setMovieList(resp.data.results);
            });
        } else if (currentFilter === FilterNames.UPCOMING) {
            getUpcomingMovies().then((resp) => {
                setMovieList(resp.data.results);
            });
        }

        setIsLoading(false);
    }, [currentFilter]);

    const onFilterChange = (filterName: FilterNames): void => {
        setCurrentFilter(filterName);
    };

    return (
        <HomePageWrapper>
            <Filters onChange={onFilterChange} />
            {isLoading ? <LoadSpinner /> : <MovieList movies={movieList} />}
        </HomePageWrapper>
    );
};

export default HomePage;
