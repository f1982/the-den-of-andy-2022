import React from 'react'

import SiteFooter from '@/lib/site-footer'
import SiteHeader from '@/lib/site-header'

export default async function Layout(
  props: {
    children: React.ReactNode
    params: Promise<{ locale: string }>
  }
) {
  const params = await props.params;

  const {
    children
  } = props;

  return (
    <>
      <SiteHeader locale={params.locale} />
      <main className="flex-1">{children}</main>
      <SiteFooter locale={params.locale} />
    </>
  )
}
