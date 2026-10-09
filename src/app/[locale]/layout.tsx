import React from 'react'

import '@/global.css'
import clsx from 'clsx'
import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation'

import { AnalyticSettings } from '@/lib/analytics-settings'
import { darkModeScript } from '@/utils/dark-mode-script'
import { getDictionary } from '@/utils/dictionaries'
import { localizedPath } from '@/utils/locale-path'

import { siteMetadata } from '@/config/site-config'
import { getLocalizedAlternates, isLocale, locales } from '@/config/i18n'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await props.params

  return {
    ...siteMetadata,
    alternates: getLocalizedAlternates(locale),
  }
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

// The middleware skips any path containing a dot, so without this a URL like
// `/random.xyz` matched `[locale]` and rendered the home page with a 200
// (and `<html lang="random.xyz">`) — an unbounded set of soft-404 duplicates.
export const dynamicParams = false

export default async function RootLayout(
  props: {
    children: React.ReactNode
    params: Promise<{ locale: string }>
  }
) {
  const params = await props.params;

  const {
    locale
  } = params;
  if (!isLocale(locale)) notFound()

  const dict = await getDictionary(locale)

  const {
    children
  } = props;

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: darkModeScript }} />
      </head>
      <body
        className={clsx(
          'bg-background text-foreground',
          'flex min-h-screen flex-col',
          'antialiased',
          inter.className,
        )}>
        {children}
        <AnalyticSettings
          labels={dict.common.analyticsConsent}
          privacyHref={localizedPath(locale, '/privacy-policy')}
        />
      </body>
    </html>
  )
}
