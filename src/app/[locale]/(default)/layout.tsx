import React from 'react'

import SiteFooter from '@/lib/site-footer'
import SiteHeader from '@/lib/site-header'

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale }
}) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  )
}
