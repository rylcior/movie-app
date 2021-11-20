import React from 'react';
import {
    MovieCardWrapper,
    MovieImage,
    MovieTitle,
    MovieGenre,
    MovieRate,
    TitleAndRateWrapper,
} from './MovieCard.styles';

interface IMovieCard {
    title: string;
    rate: number;
    genre: Array<number>;
    poster: string | null;
}

const MovieCard = ({ title, rate, genre, poster }: IMovieCard) => {
    const getPoster = (): string => {
        return `https://image.tmdb.org/t/p/w300${poster}`;
    };

    return (
        <MovieCardWrapper>
            {poster ? <MovieImage src={getPoster()} /> : null}
            <TitleAndRateWrapper>
                <MovieTitle>{title}</MovieTitle>
                <MovieRate>{rate}</MovieRate>
            </TitleAndRateWrapper>
            <MovieGenre>{genre}</MovieGenre>
        </MovieCardWrapper>
    );
};

export default MovieCard;
