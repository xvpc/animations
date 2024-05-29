/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.ibb.co"]
  },
  output: 'export',
  distDir: 'out',
  basePath: process.env.NODE_ENV != "production" ? "" : "/animations"
};

export default nextConfig;