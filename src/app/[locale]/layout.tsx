import React from 'react'

import '@/global.css'
import clsx from 'clsx'
import { Caveat, Geist, Geist_Mono, Instrument_Serif } from 'next/font/google'
import { notFound } from 'next/navigation'

import { AnalyticSettings } from '@/lib/analytics-settings'

import { getDictionary } from '@/utils/dictionaries'
import { localizedPath } from '@/utils/locale-path'

import { getLocalizedAlternates, isLocale, locales } from '@/config/i18n'
import { siteMetadata } from '@/config/site-config'

// Display serif (headlines, italic swaps).
const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-instrument-serif',
})

// Body text.
const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})

// Labels, meta and numerals.
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

// Handwritten ballpoint notes.
const caveat = Caveat({
  weight: ['500', '700'],
  subsets: ['latin'],
  variable: '--font-caveat',
})

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

export default async function RootLayout(props: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await props.params
  if (!isLocale(locale)) notFound()

  const dict = await getDictionary(locale)

  return (
    <html
      lang={locale}
      className={clsx(
        instrumentSerif.variable,
        geist.variable,
        geistMono.variable,
        caveat.variable,
      )}>
      <body
        className={clsx(
          'bg-paper font-sans text-ink',
          'flex min-h-screen flex-col',
          'antialiased',
        )}>
        {props.children}
        <AnalyticSettings
          labels={dict.common.analyticsConsent}
          privacyHref={localizedPath(locale, '/privacy-policy')}
        />
      </body>
    </html>
  )
}
