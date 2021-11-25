import React from 'react';
import { getImage } from 'helpers/getImage';
import {
    MovieCardWrapper,
    MovieImage,
    MovieTitle,
    MovieGenre,
    MovieRate,
    TitleAndRateWrapper,
    RouterLink,
} from './MovieCard.styles';

interface IMovieCard {
    title: string;
    rate: number;
    genre: Array<number>;
    poster: string | null;
    movieid: number;
}

const MovieCard = ({ title, rate, genre, poster, movieid }: IMovieCard) => {
    return (
        <MovieCardWrapper>
            <RouterLink to={`/movie/${movieid}`}>
                {poster ? <MovieImage src={getImage(poster)} /> : null}
                <TitleAndRateWrapper>
                    <MovieTitle>{title}</MovieTitle>
                    <MovieRate>{rate}</MovieRate>
                </TitleAndRateWrapper>
                <MovieGenre>{genre}</MovieGenre>
            </RouterLink>
        </MovieCardWrapper>
    );
};

export default MovieCard;
