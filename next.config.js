// import createNextIntlPlugin from 'next-intl/plugin';
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const nextConfig = {
  // output: 'export',
  // must have this when using the secondary domain of the github page
  // basePath: '/the-den-of-andy-2022',
  images: {
    unoptimized: true,
    domains: ['github.com'],
    formats: ['image/avif', 'image/webp'],
    // https://github.com/vercel/next.js/issues/21079
    loader: 'imgix',
    path: '/',
    // path: '/_next/image',
    // disable static imports for image files
    disableStaticImages: false
  }
};
module.exports = withBundleAnalyzer(withNextIntl(nextConfig))
