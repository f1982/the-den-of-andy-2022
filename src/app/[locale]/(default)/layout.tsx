import Footer from '../../../components/molecule/footer'
import Header from '../../../components/molecule/header'
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
