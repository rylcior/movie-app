import React from 'react';
import { getImage } from 'helpers/getImage';
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
    return (
        <MovieCardWrapper>
            {poster ? <MovieImage src={getImage(poster)} /> : null}
            <TitleAndRateWrapper>
                <MovieTitle>{title}</MovieTitle>
                <MovieRate>{rate}</MovieRate>
            </TitleAndRateWrapper>
            <MovieGenre>{genre}</MovieGenre>
        </MovieCardWrapper>
    );
};

export default MovieCard;
