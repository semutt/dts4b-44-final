import axios from 'axios';

const API_KEY = process.env.REACT_APP_SPORTMONKS_KEY;
const baseUrl = 'https://soccer.sportmonks.com/api/v2.0/';

const sportmonks = axios.create({
  baseURL: baseUrl,
  params: {
    api_token: API_KEY,
  },
});

export default sportmonks;
