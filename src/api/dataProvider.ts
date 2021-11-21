import axios, { AxiosResponse } from 'axios';

const apiKey = `api_key=${process.env.REACT_APP_API_KEY}`;
const posterUrl = 'https://image.tmdb.org/t/p/w300';

const popularPath = '/popular?';
const nowPlayingPath = '/now_playing?';
const topRatedPath = '/top_rated?';
const upcomingPath = '/upcoming?';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
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

export const getPoster = (posterPath: string): Promise<AxiosResponse> => {
    return axios.get(`${posterUrl}${posterPath}`);
};
