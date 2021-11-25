import React from 'react';
import MovieDetailsCard from 'components/MovieDetailsCard/MovieDetailsCard';
import NavTemplate from 'templates/NavigationTemplate';

const MovieDetailsPage = () => {
    return (
        <NavTemplate>
            <MovieDetailsCard />
        </NavTemplate>
    );
};

export default MovieDetailsPage;
