import { Metadata } from 'next'

import { getDictionary } from '@/utils/dictionaries'

import DefaultWelcome from '@/features/welcome/welcome'

import { siteMetadata } from '@/config/site-config'

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
