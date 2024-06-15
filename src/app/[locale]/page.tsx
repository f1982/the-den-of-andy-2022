import { Metadata } from 'next'

import { useTranslations } from 'next-intl'

import DefaultWelcome from '@/features/welcome/welcome'

import { siteMetadata } from '@/config/site-config'

import { getDictionary } from './dictionaries'

export const metadata: Metadata = { ...siteMetadata }

export default async function Page({ params: { locale } }) {
  const dict = await getDictionary(locale)
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <DefaultWelcome
        title={dict.welcome.greeting}
        subtitle={dict.welcome.description}
        label={dict.welcome.buttonLabel}
        link="/home"
      />
    </div>
  )
}
