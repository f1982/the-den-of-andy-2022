import React from 'react'

import { PillLink } from '@/components/den'
import { cn } from '@/components/ui/utils'

import { LanguageSwitch } from './language-switch'
import { LanguageSwitchLabels, NavItem } from './menu-data'
import { MobileNav } from './mobile-menu'
import { NavLinks } from './nav-links'

type HeaderProps = {
  locale: string
  brand: React.ReactNode
  items: NavItem[]
  navLabel: string
  languageLabels: LanguageSwitchLabels
  sayHello: { label: string; href: string }
  motto?: string
  openMenuLabel?: string
  closeMenuLabel?: string
  mobileMenuTitle?: string
  mobileMenuDescription?: string
  className?: string
}

/**
 * Den header: brand left, numbered nav in the middle, language switch and
 * "Say hello" on the right. Below 960px the nav collapses into a sheet.
 */
const Header = ({
  locale,
  brand,
  items,
  navLabel,
  languageLabels,
  sayHello,
  motto,
  openMenuLabel,
  closeMenuLabel,
  mobileMenuTitle,
  mobileMenuDescription,
  className,
}: HeaderProps) => {
  return (
    <header id="top" className={cn('relative z-20', className)}>
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-3 desk:py-[18px] xl:gap-6 xl:px-10">
        {brand}
        <NavLinks
          items={items}
          ariaLabel={navLabel}
          className="hidden desk:block"
        />
        <div className="hidden items-center gap-2.5 desk:flex">
          <LanguageSwitch locale={locale} labels={languageLabels} />
          <PillLink href={sayHello.href} arrow>
            {sayHello.label}
          </PillLink>
        </div>
        <MobileNav
          locale={locale}
          items={items}
          brand={brand}
          navLabel={navLabel}
          languageLabels={languageLabels}
          sayHello={sayHello}
          motto={motto}
          openMenuLabel={openMenuLabel}
          closeMenuLabel={closeMenuLabel}
          menuTitle={mobileMenuTitle}
          menuDescription={mobileMenuDescription}
        />
      </div>
    </header>
  )
}

export default Header
