import { Metadata } from 'next'

import { getDictionary } from '@/utils/dictionaries'
import SchemaJsonLd from '@/utils/schema-jsonld'

import DefaultWelcome from '@/features/welcome/welcome'

import { siteMetadata, siteSettings, siteUrl } from '@/config/site-config'
import { getJsonLdWebsite } from '@/utils/schema-json-utils'
import { getLocalizedAlternates } from '@/config/i18n'

export async function generateMetadata(props): Promise<Metadata> {
  const { locale } = await props.params

  return {
    ...siteMetadata,
    alternates: getLocalizedAlternates(locale),
  }
}

export default async function Page(props) {
  const params = await props.params;

  const {
    locale
  } = params;

  const dict = await getDictionary(locale)
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <SchemaJsonLd
        jsonLd={getJsonLdWebsite({
          ...siteSettings,
          url: `${siteUrl}/${locale}`,
        })}
      />
      <DefaultWelcome
        title={dict.welcome.greeting}
        subtitle={dict.welcome.description}
        label={dict.welcome.buttonLabel}
        link={`/${locale}/home`}
      />
    </div>
  )
}
