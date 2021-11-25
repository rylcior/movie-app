import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from 'views/HomePage/HomePage';
import MovieDetailsPage from 'views/MovieDetailsPage/MovieDetailsPage';
import { RoutesNames } from 'enums/RoutesNames';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={RoutesNames.HOME} element={<HomePage />} />
                <Route
                    path={RoutesNames.DETAILS}
                    element={<MovieDetailsPage />}
                />
                <Route path='*' element={<HomePage />} />
            </Routes>
        </div>
    );
};

export default App;
