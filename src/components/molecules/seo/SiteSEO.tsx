import { t } from 'i18next';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import SEO from '../../../../next-seo';

const LOCAL_DEV_URL = 'http://localhost:3000';

export default function SiteSEO({
  pageTitle,
}: {
  pageTitle: string,
}) {
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
      {...SEO}
      canonical={canonicalUrl}
      title={`${t(pageTitle)} - ${SEO.title}`}
    />
  );
}
