import { GoogleAnalytics } from '../../components/molecule/analysis/SiteAnalystic'
import './global.css'
import clsx from 'clsx'
import { Metadata } from 'next'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { Inter as FontSans } from 'next/font/google'
import React from 'react'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js'
}

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = useMessages()
  return (
    <html lang={locale}>
      <body
        className={clsx(
          'dark',
          'dark:bg-slate-800 bg-white dark:text-slate-200',
          'min-h-screen flex flex-col font-sans antialiased',
          fontSans.variable
        )}>
        <NextIntlClientProvider messages={messages}>
          <GoogleAnalytics trackingId={process.env.NEXT_PUBLIC_APP_GA_ID!} />
          {/* <ThemeProvider> */}
          {/* <I18nextProvider i18n={i18n}> */}
          {children}
          {/* </I18nextProvider> */}
          {/* </ThemeProvider> */}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
