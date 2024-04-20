import SiteFooter from '@/lib/site-footer'
import SiteHeader from '@/lib/site-header'
import React from 'react'

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
