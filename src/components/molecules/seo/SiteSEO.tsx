import { t } from 'i18next';
import { DefaultSeo } from 'next-seo';
import SEO from '../../../../next-seo';

interface SiteSEOProps {
  pageTitle:string
}
export default function SiteSEO({
  pageTitle,
}:SiteSEOProps) {
  return <DefaultSeo {...SEO} title={`${t(pageTitle)} - ${SEO.title}`} />;
}
