import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from 'views/HomePage/HomePage';
import MovieDetailsCard from 'components/MovieDetailsCard/MovieDetailsCard';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='movie/:movieId' element={<MovieDetailsCard />} />
            </Routes>
        </div>
    );
};

export default App;
