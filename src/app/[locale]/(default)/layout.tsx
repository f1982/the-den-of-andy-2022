import SiteFooter from '@/lib/site-footer'
import SiteHeader from '@/lib/site-header'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  )
}
