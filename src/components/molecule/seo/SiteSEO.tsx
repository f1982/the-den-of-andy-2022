import { useTranslations } from 'next-intl'
import { DefaultSeo, DefaultSeoProps } from 'next-seo'
import usePageURL from '../../../lib/hooks/usePageURL'
import getDefaultSEOConfig from './seoConfig'

interface SiteSEOProps {
  pageTitle: string
  seoConfig?: DefaultSeoProps
}

const SiteSEO = ({ pageTitle, seoConfig }: SiteSEOProps) => {
  const t = useTranslations('home')
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
