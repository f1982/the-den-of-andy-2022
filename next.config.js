const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: 'export',
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
    // formats: ['image/webp'],
  }
})
