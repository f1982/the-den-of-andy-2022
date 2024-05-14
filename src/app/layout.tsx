import { siteMetadata } from '@/config/site-config'
import '@/global.css'
import { AnalyticSettings } from '@/lib/analytics-settings'
import clsx from 'clsx'
import { Inter, Nunito } from 'next/font/google'
import React from 'react'

// const inter = Inter({ subsets: ['latin'] })
const nunito = Nunito({ subsets: ['latin'] })

// export function generateStaticParams() {
//   return locales.map((locale) => ({ locale }))
// }

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
  // unstable_setRequestLocale(locale)

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={clsx(
          'bg-background text-foreground',
          'flex min-h-screen flex-col',
          'antialiased',
          nunito.className,
        )}>
        {children}
        <AnalyticSettings />
      </body>
    </html>
  )
}