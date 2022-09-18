const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  // must have this when using the secondary domain of the github page
  // basePath: '/the-den-of-andy-2022',
  images: {
    domains: ['github.com'],
    formats: ['image/avif', 'image/webp'],
    // https://github.com/vercel/next.js/issues/21079

    loader: 'imgix',
    path: '/',
    // path: '/_next/image',
    // disable static imports for image files
    disableStaticImages: false,
    // formats: ['image/webp'],
  },
})