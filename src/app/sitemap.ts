import { MetadataRoute } from 'next'

import { defaultLocale, locales, pathnames } from '@/i18n/i18n-config'
import { getPathname } from '@/i18n/navigation'

import { siteUrl } from '@/config/site-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const keys = Object.keys(pathnames) as Array<keyof typeof pathnames>

  function getUrl(
    key: keyof typeof pathnames,
    locale: (typeof locales)[number],
  ) {
    const pathname = getPathname({ locale, href: key })
    return `${siteUrl}/${locale}${pathname === '/' ? '' : pathname}`
  }

  return keys.map((key) => ({
    url: getUrl(key, defaultLocale),
    alternates: {
      languages: Object.fromEntries(
        locales.map((locale) => [locale, getUrl(key, locale)]),
      ),
    },
  }))
}
