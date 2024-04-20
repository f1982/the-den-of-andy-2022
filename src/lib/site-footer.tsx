import Footer from '@/components/page/footer/footer'
import { footerLinks, socialLinks } from '@/config/menu-data'
import Logo from '@/lib/site-logo'
import Link from 'next/link'
import React from 'react'

export default function SiteFooter() {
  return (
    <Footer
      logo={
        <Link href="/">
          <Logo className="w-10 fill-primary stroke-primary" />
        </Link>
      }
      sns={socialLinks}
      links={footerLinks}
      copyright="© Copyright 2024. All rights reserved."
      slogan="Open to Everything & attached to Nothing"
    />
  )
}
