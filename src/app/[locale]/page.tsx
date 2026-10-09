import { Metadata } from 'next'

import { getDictionary } from '@/utils/dictionaries'
import { localizedPath } from '@/utils/locale-path'
import { getPageMetadata } from '@/utils/metadata-utils'
import { getJsonLdPerson, getJsonLdWebsite } from '@/utils/schema-json-utils'
import SchemaJsonLd from '@/utils/schema-jsonld'

import DefaultWelcome from '@/features/welcome/welcome'

import { siteSettings, siteUrl } from '@/config/site-config'

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
  const params = await props.params

  const { locale } = params

  const dict = await getDictionary(locale)
  return (
    <>
      <SchemaJsonLd
        jsonLd={getJsonLdWebsite(
          {
            ...siteSettings,
            url: `${siteUrl}${localizedPath(locale)}`,
          },
          locale,
        )}
      />
      <SchemaJsonLd jsonLd={getJsonLdPerson(siteSettings)} />
      <DefaultWelcome
        kicker={dict.den.welcome.kicker}
        title={dict.den.welcome.title}
        subtitle={dict.welcome.description}
        label={dict.welcome.buttonLabel}
        ariaLabel={dict.den.welcome.enterAria}
        note={dict.den.welcome.note}
        link={localizedPath(locale, '/home')}
      />
    </>
  )
}
