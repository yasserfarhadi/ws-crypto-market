import axios from 'axios';
import type { RootObject } from './Models/Markets';

const HTTPRequest = axios.create({
  baseURL: 'https://api.bitpin.org/v1/mkt/markets/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchMarkets = async () => {
  const response = await HTTPRequest.get<RootObject>('');
  return response.data.results;
};
