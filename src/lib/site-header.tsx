import Link from 'next/link'

import Logo from '@/lib/site-logo'

import { getDictionary } from '@/utils/dictionaries'
import { localizedPath } from '@/utils/locale-path'

import Header from '@/components/layout/header/header'
import { NavItem } from '@/components/layout/header/menu-data'

import { routeLinks } from '@/config/menu-data'
import { contactMailto } from '@/config/site-config'

export default async function SiteHeader({ locale }: { locale: string }) {
  const dict = await getDictionary(locale)
  const den = dict.den.common

  const items: NavItem[] = routeLinks.map((item) => ({
    path: item.link,
    href: localizedPath(locale, item.link),
    label: dict.common.menu[item.label.toLowerCase()],
  }))

  const brand = (
    <Link
      data-test="homeLink"
      href={localizedPath(locale)}
      aria-label={den.homeAriaLabel}
      className="flex min-h-11 items-center gap-2 text-ink transition-colors hover:text-pen">
      <Logo className="size-[30px] flex-none" />
      <span className="font-serif text-[27px] leading-none tracking-[-0.01em]">
        {den.brand}
      </span>
      <span className="font-mono text-[11px] text-graphite">
        {den.pronunciation}
      </span>
    </Link>
  )

  return (
    <Header
      locale={locale}
      brand={brand}
      items={items}
      navLabel={den.mainNavLabel}
      languageLabels={den.language}
      sayHello={{ label: den.sayHello, href: contactMailto }}
      motto={den.motto}
      openMenuLabel={dict.common.openMenuLabel}
      closeMenuLabel={dict.common.closeMenuLabel}
      mobileMenuTitle={dict.common.mobileMenuTitle}
      mobileMenuDescription={dict.common.mobileMenuDescription}
    />
  )
}
