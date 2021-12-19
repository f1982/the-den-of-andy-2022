
import Link from 'next/link'
import React from 'react'

import Meta from '../meta'
import Footer from './footer'
import Header from './header'

export default function Layout({ children }: { preview?: JSX.Element, children: React.ReactNode }): JSX.Element {
  return (
    <>
      <Meta />
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
