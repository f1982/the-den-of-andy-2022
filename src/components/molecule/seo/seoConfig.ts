

const getDefaultSEOConfig = () => {
  //Need to be update
  
  const siteTitle = ('siteName')
  const siteDescription = ('siteDescription')
  return {
    title: siteTitle,
    description: siteDescription,
    canonical: process.env.NEXT_PUBLIC_APP_SITE_URL,
    openGraph: {
      type: 'website',
      title: siteTitle,
      // this is the desc will show up in twitter sharing
      description: siteDescription,
      // if you want to localize your tags, it would probably make sense to include locale.
      // the format is language_TERRITORY, where the default is en_US.
      locale: 'en_US',
      url: process.env.NEXT_PUBLIC_APP_SITE_URL,
      siteTitle,
      // video:''
      // TODO: replace the images
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_APP_SITE_URL}/static/images/og-image-1200x627.png`,
          width: 1200,
          height: 627,
          alt: siteTitle,
          type: 'image/jpeg'
        },
        {
          url: `${process.env.NEXT_PUBLIC_APP_SITE_URL}/static/images/og-image-900x800.png`,
          width: 900,
          height: 800,
          alt: siteTitle,
          type: 'image/jpeg'
        }
      ]
    },
    // https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards
    twitter: {
      handle: '@iandycao',
      creator: '@iandycao',
      cardType: 'summary'
    }
  }
}

export default getDefaultSEOConfig
