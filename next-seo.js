const SITE_NAME = 'Andy\'s personal website';
const SITE_DESC = 'Andy\'s personal website is used for recording all his work and thinking.';

const seoConfig = {
  title: SITE_NAME,
  description: SITE_DESC,
  canonical: process.env.NEXT_PUBLIC_APP_SITE_URL,
  openGraph: {
    type: 'website',
    title: SITE_NAME,
    // this is the desc will show up in twitter sharing
    description: 'Andy\'s personal website is used for recording all his work and thinking.',
    // if you want to localize your tags, it would probably make sense to include locale.
    // the format is language_TERRITORY, where the default is en_US.
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_APP_SITE_URL,
    site_name: SITE_NAME,
    // video:''
    // TODO: replace the images
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_SITE_URL}/static/images/og-image-1200x627.png`,
        width: 1200,
        height: 627,
        alt: SITE_NAME,
        type: 'image/jpeg',
      },
      {
        url: `${process.env.NEXT_PUBLIC_APP_SITE_URL}/static/images/og-image-900x800.png`,
        width: 900,
        height: 800,
        alt: SITE_NAME,
        type: 'image/jpeg',
      },
    ],
  },
  // https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards
  twitter: {
    handle: '@iandycao',
    creator: '@iandycao',
    cardType: 'summary',
  },
};

export default seoConfig;
