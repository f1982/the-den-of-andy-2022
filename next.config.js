module.exports = {
  // must have this when using the secondary domain of the github page
  // basePath: '/the-den-of-andy-2022',
  images: {
    domains: ['dummyimage.com'],
    // https://github.com/vercel/next.js/issues/21079

    loader: 'imgix',
    path: '/',
    // path: '/_next/image',
    // disable static imports for image files
    disableStaticImages: false,
    // formats: ['image/webp'],
  },
};