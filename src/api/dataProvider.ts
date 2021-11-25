import axios, { AxiosResponse } from 'axios';

const apiKey = `api_key=${process.env.REACT_APP_API_KEY}`;
const posterUrl = 'https://image.tmdb.org/t/p/w300';

const popularPath = '/popular?';
const nowPlayingPath = '/now_playing?';
const topRatedPath = '/top_rated?';
const upcomingPath = '/upcoming?';
const creditsPath = '/credits?';
const searchPath = '/movie?';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
});

const searchInstane = axios.create({
    baseURL: 'https://api.themoviedb.org/3/search',
});

const httpGet = (url: string) => {
    return instance.get(`${url}${apiKey}`);
};

export const getPopularMovies = (): Promise<AxiosResponse> => {
    return httpGet(popularPath);
};

export const getNowPlayingMovies = (): Promise<AxiosResponse> => {
    return httpGet(nowPlayingPath);
};

export const getTopRatedMovies = (): Promise<AxiosResponse> => {
    return httpGet(topRatedPath);
};

export const getUpcomingMovies = (): Promise<AxiosResponse> => {
    return httpGet(upcomingPath);
};

export const getImage = (posterPath: string): Promise<AxiosResponse> => {
    return axios.get(`${posterUrl}${posterPath}`);
};

export const getMovieDetails = (id: string): Promise<AxiosResponse> => {
    return httpGet(`/${id}?`);
};

export const getCredits = (id: string): Promise<AxiosResponse> => {
    return httpGet(`/${id}${creditsPath}`);
};

export const getSearchMovie = (movieTitle: string): Promise<AxiosResponse> => {
    return searchInstane.get(`${searchPath}${apiKey}&query=${movieTitle}`);
};
