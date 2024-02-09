import { siteMetadata } from '@/config/site-config'
import clsx from 'clsx'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { Inter, Nunito } from 'next/font/google'
import React from 'react'
import '../../global.css'

export const inter = Inter({ subsets: ['latin'] })
export const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  ...siteMetadata,
  icons: {
    favicon: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = useMessages()
  
  return (
    <html lang={locale} className='dark' suppressHydrationWarning>
      <body
        className={clsx(
          'dark:bg-slate-800 bg-white dark:text-slate-200',
          'min-h-screen flex flex-col',
          'antialiased',
          inter.className
        )}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
