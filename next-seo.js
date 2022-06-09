const SITE_NAME = 'Andy\'s personal website';
const SITE_DESC = 'Andy\'s personal website is used for recording all his work and thinking.';

const seoConfig = {
  title: SITE_NAME,
  description: SITE_DESC,
  canonical: process.env.NEXT_PUBLIC_APP_SITE_URL,
  openGraph: {
    type: 'website',
    title: SITE_NAME,
    description: 'this is the desc will show up in twitter sharing',
    // if you want to localize your tags, it would probably make sense to include locale.
    // the format is language_TERRITORY, where the default is en_US.
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_APP_SITE_URL,
    site_name: SITE_NAME,
    // video:''
    // TODO: replace the images
    images: [
      {
        url: 'https://www.example.ie/og-image-01.jpg',
        width: 800,
        height: 600,
        alt: 'Og Image Alt',
        type: 'image/jpeg',
      },
      {
        url: 'https://www.example.ie/og-image-02.jpg',
        width: 900,
        height: 800,
        alt: 'Og Image Alt Second',
        type: 'image/jpeg',
      },
      { url: 'https://www.example.ie/og-image-03.jpg' },
      { url: 'https://www.example.ie/og-image-04.jpg' },
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
