import React from 'react'

import '@/global.css'
import clsx from 'clsx'
import { Inter, Lalezar } from 'next/font/google'

import { AnalyticSettings } from '@/lib/analytics-settings'
import { getDictionary } from '@/utils/dictionaries'
import { localizedPath } from '@/utils/locale-path'

import { siteMetadata } from '@/config/site-config'
import { getLocalizedAlternates } from '@/config/i18n'

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
  return [{ locale: 'en' }, { locale: 'zh-CN' }]
}

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
  const dict = await getDictionary(locale)

  const {
    children
  } = props;

  return (
    <html lang={locale} suppressHydrationWarning>
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
