const SITE_NAME = 'Andy website SEO title';
const SITE_DESC = 'This this andy website seo desc.';

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
  },
  // https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards
  twitter: {
    handle: '@iandycao',
    creator: '@iandycao',
    cardType: 'summary',
  },
};

export default seoConfig;
