import axios from 'axios';
import { AxiosRequestConfig } from 'axios';

import { MarketProps } from '../interfaces';

/**
 * Get all information about market
 */

const getCryptoMarket = async (uuids?: string, timePeriod?: string) => {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: process.env.REACT_APP_RAPID_API_CRYPTO_MARKET_URL || '',
    params: {
      timePeriod: timePeriod ?? '24h',
      uuids,
      tiers: '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '100',
      offset: '0',
    },
    headers: {
      'x-rapidapi-host': process.env.REACT_APP_RAPID_API_CRYPTO_MARKET_HOST || '',
      'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY || '',
    },
  };
  const response = await axios.request<MarketProps>(options);

  return response;
};

export default getCryptoMarket;
