import DefaultWelcome from '../../components/page/welcome/DefaultWelcome'
import LocaleSwitcher from '../../lib/lang/locale-switcher'
import { Link } from '../../navigation'
import { Metadata } from 'next'
import { useTranslations } from 'next-intl'

export const metadata: Metadata = {
  title: 'My Page Title'
}

export default function Page() {
  const t = useTranslations('Index')
  return (
    <>
      <h1>hello</h1>
      <h1>{t('title')}</h1>
      <h1>{t('greeting')}</h1>

      <div className="h-screen flex flex-col justify-center items-center">
        <DefaultWelcome
          title={t('greeting')}
          subtitle={t('description')}
          label={t('buttonLabel')}
          link="/home"
        />
        <Link href="/home">To Home</Link>
      </div>
    </>
  )
}
