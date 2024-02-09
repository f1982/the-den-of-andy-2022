import Footer from '../../../components/molecule/SiteFooter'
import Header from '../../../components/molecule/SiteHeader'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
