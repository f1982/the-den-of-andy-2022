import { t } from 'i18next';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import SEO from '../../../../next-seo';
import { LOCAL_DEV_URL } from '../../../constants/paths';

interface SiteSEOProps {
  pageTitle: string,
  seoConfig?: {}
}

const SiteSEO = ({
  pageTitle,
  seoConfig = SEO,
}: SiteSEOProps) => {
  const router = useRouter();
  // get site url
  let hostUrl = process.env.NEXT_PUBLIC_APP_SITE_URL;
  // if it's development env
  if (process.env.NODE_ENV === 'development') {
    hostUrl = LOCAL_DEV_URL;
  }

  const canonicalUrl = hostUrl + router.asPath.split('?')[0];

  return (
    <DefaultSeo
      {...seoConfig}
      canonical={canonicalUrl}
      title={`${t(pageTitle)} - ${SEO.title}`}
    />
  );
};

export default SiteSEO;