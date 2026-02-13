/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://skillswipebackend-production.up.railway.app/:path*',
      },
    ];
  },
};

export default nextConfig;
