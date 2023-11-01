/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  compiler: { removeConsole: !!isProd },
  assetPrefix: isProd ? '' : 'http://localhost:3000',
  // env: {
  //   // Add your own env variables here
  // },
};
module.exports = nextConfig;
