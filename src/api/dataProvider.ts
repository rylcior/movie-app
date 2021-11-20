import axios, { AxiosResponse } from 'axios';

const apiKey = `api_key=${process.env.REACT_APP_API_KEY}`;
const posterUrl = 'https://image.tmdb.org/t/p/w300';

const popularPath = '/popular?';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
});

const httpGet = (url: string) => {
    return instance.get(`${url}${apiKey}`);
};

export const getPopularMovies = (): Promise<AxiosResponse> => {
    return httpGet(popularPath);
};

export const getPoster = (posterPath: string): Promise<AxiosResponse> => {
    return axios.get(`${posterUrl}${posterPath}`);
};
