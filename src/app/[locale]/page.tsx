import { siteMetadata } from '@/config/site-config'
import DefaultWelcome from '@/features/welcome/welcome'
import { Metadata } from 'next'
import { useTranslations } from 'next-intl'

export const metadata: Metadata = { ...siteMetadata }

export default function Page() {
  const t = useTranslations('welcome')

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <DefaultWelcome
        title={t('greeting')}
        subtitle={t('description')}
        label={t('buttonLabel')}
        link="/home"
      />
    </div>
  )
}
