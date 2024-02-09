import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import DefaultWelcome from '../../components/page/welcome/DefaultWelcome'

export const metadata: Metadata = {
  title: 'My Page Title'
}

export default function Page() {
  const t = useTranslations('Index')
  
  return (
      <div className="h-screen flex flex-col justify-center items-center">
        <DefaultWelcome
          title={t('greeting')}
          subtitle={t('description')}
          label={t('buttonLabel')}
          link="/home"
        />
      </div>
  )
}
