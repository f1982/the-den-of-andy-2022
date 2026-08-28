import { Metadata } from 'next'

import { getDictionary } from '@/utils/dictionaries'
import SchemaJsonLd from '@/utils/schema-jsonld'
import { getPageMetadata } from '@/utils/metadata-utils'

import DefaultWelcome from '@/features/welcome/welcome'

import { siteSettings, siteUrl } from '@/config/site-config'
import { getJsonLdPerson, getJsonLdWebsite } from '@/utils/schema-json-utils'

export async function generateMetadata(props): Promise<Metadata> {
  const { locale } = await props.params
  const dict = await getDictionary(locale)

  return getPageMetadata({
    locale,
    path: '/',
    title: `${dict.welcome.greeting} | ${siteSettings.name}`,
    description: dict.welcome.description,
  })
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
        }, locale)}
      />
      <SchemaJsonLd jsonLd={getJsonLdPerson(siteSettings)} />
      <DefaultWelcome
        title={dict.welcome.greeting}
        subtitle={dict.welcome.description}
        label={dict.welcome.buttonLabel}
        link={`/${locale}/home`}
      />
    </div>
  )
}
