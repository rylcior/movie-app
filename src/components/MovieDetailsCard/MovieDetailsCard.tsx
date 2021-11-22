import React, { useEffect, useState } from 'react';
import { getMovieDetails } from 'api/dataProvider';
import { useParams } from 'react-router-dom';
import IMovieDetails from 'types/MovieDetails';
import MovieDetailsCardHeader from 'components/MovieDetailsCard/MovieDetailsCardHeader/MovieDetailsCardHeader';
import MovieDetailsCardBody from 'components/MovieDetailsCard/MovieDetailsCardBody/MovieDetailsCardBody';
import { CardWrapper } from './MovieDetailsCard.styles';

const MovieDetailsCard = () => {
    const { movieId } = useParams();
    const [MovieDetailsData, setMovieDetailsData] = useState<IMovieDetails>();

    useEffect(() => {
        if (movieId) {
            getMovieDetails(movieId).then((resp) => {
                setMovieDetailsData(resp.data);
            });
        }
    }, [movieId]);

    return (
        <CardWrapper>
            {MovieDetailsData ? (
                <>
                    <MovieDetailsCardHeader
                        movieDetailsData={MovieDetailsData}
                    />
                    <MovieDetailsCardBody movieId={movieId} />
                </>
            ) : (
                'Error'
            )}
        </CardWrapper>
    );
};

export default MovieDetailsCard;
