/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'vn'],
    defaultLocale: 'en',
    localeDetection: true,
  },
  images: {
    domains: ['cdn.coinranking.com', '/assets', '/public'],
  },
  env: {
    REACT_APP_RAPID_API_KEY: process.env.REACT_APP_RAPID_API_KEY,
    REACT_APP_RAPID_API_CRYPTO_MARKET_URL: process.env.REACT_APP_RAPID_API_CRYPTO_MARKET_URL,
    REACT_APP_RAPID_API_CRYPTO_MARKET_HOST: process.env.REACT_APP_RAPID_API_CRYPTO_MARKET_HOST,
  },
};

module.exports = nextConfig;
