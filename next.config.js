
/** @type {import('next').NextConfig} */

const nextConfig = {
  // output: 'export',
  reactStrictMode: true,
  swcMinify: true,

  images: { unoptimized: true },
  eslint: {
    dirs: ['src'],
  },
}

module.exports = nextConfig
