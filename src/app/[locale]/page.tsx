import DefaultWelcome from '../../components/page/welcome/welcome'
import { Metadata } from 'next'
import { useTranslations } from 'next-intl'

export const metadata: Metadata = {
  title: 'My Page Title',
}

export default function Page() {
  const t = useTranslations('Index')

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
