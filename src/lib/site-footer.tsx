import Link from 'next/link'

import Logo from '@/lib/site-logo'

import { getDictionary } from '@/utils/dictionaries'

import Footer from '@/components/layout/footer/footer'

import { footerLinks, socialLinks } from '@/config/menu-data'
import { localizedPath } from '@/utils/locale-path'

export default async function SiteFooter(props: { locale: string }) {
  const dict = await getDictionary(props.locale)
  const menuLabels = dict.common.menu
  const links = footerLinks.map((linkGroup, groupIndex) =>
    linkGroup.map((item) => ({
      ...item,
      link: localizedPath(props.locale, item.link),
      label:
        groupIndex === 0
          ? menuLabels[item.label.toLowerCase()]
          : dict.common.footer[item.labelKey ?? item.label],
    })),
  )

  return (
    <Footer
      logo={
        <Link href={localizedPath(props.locale)} aria-label={dict.common.homeLinkLabel}>
          <Logo className="w-10 fill-primary stroke-primary" />
        </Link>
      }
      sns={socialLinks}
      links={links}
      copyright={`© Copyright 2022 - ${new Date().getFullYear()}. All rights reserved.`}
      slogan={dict.common.slogan}
    />
  )
}
