import { t } from 'i18next';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import SEO from '../../../../next-seo';
import usePageURL from '../../../hooks/usePageURL';

interface SiteSEOProps {
  pageTitle: string,
  seoConfig?: {}
}

const SiteSEO = ({
  pageTitle,
  seoConfig = SEO,
}: SiteSEOProps) => {
  const pageURL = usePageURL();

  return (
    <DefaultSeo
      {...seoConfig}
      canonical={pageURL}
      title={`${t(pageTitle)} - ${SEO.title}`}
    />
  );
};

export default SiteSEO;