import axios from 'axios';

require('dotenv/config');

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AUTHORIZATION}`,
    },
});

export default api;
