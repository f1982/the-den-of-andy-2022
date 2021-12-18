
import Link from 'next/link'
import React from 'react'

import Footer from '../footer'
import Header from '../header'
import Meta from '../meta'

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
