import Footer from '../../../../src-backup/components/organisms/footer/SiteFooter'
import Header from '../../../../src-backup/components/organisms/header/SiteHeader'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="text-on-background bg-background">{children}</main>
      <Footer />
    </>
  )
}
