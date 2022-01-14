import { t } from 'i18next';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo';

interface SiteSEOProps {
  pageTitle:string
}
export default function SiteSEO({
  pageTitle,
}:SiteSEOProps) {
  return <DefaultSeo {...SEO} title={`${t(pageTitle)} - ${SEO.title}`} />;
  // return (
  //   <Head>
  //     <title>
  //       {t(pageTitle)}
  //       {' - '}
  //       {t('siteName')}
  //     </title>
  //   </Head>
  // );
}
