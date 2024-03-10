import { siteMetadata } from '@/config/site-config'
import '@/global.css'
import { AnalyticSettings } from '@/lib/analytics-settings'
import clsx from 'clsx'
import { Inter, Nunito } from 'next/font/google'
import React from 'react'

export const inter = Inter({ subsets: ['latin'] })
export const nunito = Nunito({ subsets: ['latin'] })

//TODO: update seo
export const metadata = {
  ...siteMetadata,
  icons: {
    favicon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={clsx(
          'bg-white  dark:bg-slate-800 dark:text-slate-200',
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
