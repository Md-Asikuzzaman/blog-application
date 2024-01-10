/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'devasik.vercel.app',
      },
    ],
  },
};

module.exports = nextConfig;
