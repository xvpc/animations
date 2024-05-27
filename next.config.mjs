/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.ibb.co"]
  },
  output: 'export',
  distDir: 'out',
  // Name of your Github project
  basePath: '/animations'
};

export default nextConfig;