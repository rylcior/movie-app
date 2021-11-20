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
}

const MovieCard = ({ title, rate, genre }: IMovieCard) => {
    return (
        <MovieCardWrapper>
            <MovieImage src='https://www.maluchity.pl/uploads/products/full/TREE028.jpg' />
            <TitleAndRateWrapper>
                <MovieTitle>{title}</MovieTitle>
                <MovieRate>{rate}</MovieRate>
            </TitleAndRateWrapper>
            <MovieGenre>{genre}</MovieGenre>
        </MovieCardWrapper>
    );
};

export default MovieCard;
