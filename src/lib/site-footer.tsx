import Link from 'next/link'

import Logo from '@/lib/site-logo'

import { getDictionary } from '@/utils/dictionaries'

import Footer from '@/components/layout/footer/footer'

import { footerLinks, socialLinks } from '@/config/menu-data'

export default async function SiteFooter(props: { locale: string }) {
  const dict = await getDictionary(props.locale)
  return (
    <Footer
      logo={
        <Link href="/">
          <Logo className="w-10 fill-primary stroke-primary" />
        </Link>
      }
      sns={socialLinks}
      links={footerLinks}
      copyright={`© Copyright 2022 - ${new Date().getFullYear()}. All rights reserved.`}
      slogan={dict.common.slogan}
    />
  )
}
