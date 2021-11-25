import React from 'react';
import MovieCard from 'components/MovieCard/MovieCard';
import IMovie from 'types/Movie';
import { MovieListWrapper } from './MovieList.styles';

interface IMovieList {
    movies: Array<IMovie>;
}

const MovieList = ({ movies }: IMovieList) => {
    const roundNumber = (number: number): number => {
        return Math.round(number);
    };

    return (
        <MovieListWrapper>
            {movies.map(
                ({
                    title,
                    vote_average,
                    genre_ids,
                    poster_path,
                    id,
                }: IMovie) => (
                    <MovieCard
                        title={title}
                        rate={roundNumber(vote_average)}
                        genre={genre_ids}
                        poster={poster_path}
                        movieid={id}
                        key={id}
                    />
                )
            )}
        </MovieListWrapper>
    );
};

export default MovieList;
