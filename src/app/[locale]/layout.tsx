import '../../global.css'
import { siteMetadata } from '@/config/site-config'
import LocaleSwitcher from '@/i18n/locale-switcher'
import clsx from 'clsx'
import { Inter, Nunito } from 'next/font/google'
import React from 'react'

export const inter = Inter({ subsets: ['latin'] })
export const nunito = Nunito({ subsets: ['latin'] })

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
    <html lang={locale} className="dark" suppressHydrationWarning>
      <body
        className={clsx(
          'bg-white  dark:bg-slate-800 dark:text-slate-200',
          'flex min-h-screen flex-col',
          'antialiased',
          inter.className,
        )}>
        {children}
        <LocaleSwitcher />
      </body>
    </html>
  )
}
