const createNextIntlPlugin = require('next-intl/plugin')
const withNextIntl = createNextIntlPlugin()

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */

const nextConfig = {
  // output: 'export',
  reactStrictMode: true,
  swcMinify: true,

  images: { unoptimized: true },
  eslint: {
    dirs: ['src'], //or ['pages', 'hooks']
  },
}

module.exports = withNextIntl(nextConfig)
