import React from 'react'

import '@/global.css'
import clsx from 'clsx'
import { Inter, Lalezar } from 'next/font/google'

import { AnalyticSettings } from '@/lib/analytics-settings'

import { siteMetadata } from '@/config/site-config'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  ...siteMetadata,
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
        <AnalyticSettings />
      </body>
    </html>
  )
}
