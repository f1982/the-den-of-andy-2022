import { locales } from '@/i18n/i18n-config'
import SiteFooter from '@/lib/site-footer'
import SiteHeader from '@/lib/site-header'
import { unstable_setRequestLocale } from 'next-intl/server'
import React from 'react'

// export function generateStaticParams() {
//   return locales.map((locale) => ({ locale }))
// }

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale }
}) {
  // unstable_setRequestLocale(params.locale)

  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  )
}
