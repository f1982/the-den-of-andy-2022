import usePageURL from '../../../hooks/usePageURL'
import getDefaultSEOConfig from './seoConfig'
import { t } from 'i18next'
import { DefaultSeo, DefaultSeoProps } from 'next-seo'

interface SiteSEOProps {
  pageTitle: string
  seoConfig?: DefaultSeoProps
}

const SiteSEO = ({ pageTitle, seoConfig }: SiteSEOProps) => {
  const pageURL = usePageURL()

  const seoCnf = seoConfig || getDefaultSEOConfig()

  return (
    <DefaultSeo
      {...seoCnf}
      canonical={pageURL}
      title={`${t(pageTitle)} - ${seoCnf.title}`}
    />
  )
}

export default SiteSEO
