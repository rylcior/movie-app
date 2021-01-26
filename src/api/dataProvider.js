import axios from 'axios';

require('dotenv').config();

const key = process.env.REACT_APP_API_KEY;

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

const getTrending = () => instance.get(`trending/movie/day?api_key=${key}`);

export default getTrending;
