'use client'

import React from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { CircledNumber, HandNote, HandRing, PillLink } from '@/components/den'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import { LanguageSwitch } from './language-switch'
import { LanguageSwitchLabels, NavItem } from './menu-data'
import { MenuButton } from './mobile-menu'
import { isActivePath } from './nav-links'

export type MobileNavProps = {
  locale: string
  items: NavItem[]
  brand?: React.ReactNode
  languageLabels: LanguageSwitchLabels
  sayHello: { label: string; href: string }
  motto?: string
  navLabel?: string
  openMenuLabel?: string
  closeMenuLabel?: string
  menuTitle?: string
  menuDescription?: string
  defaultOpen?: boolean
}

export const MobileNavPopover = ({
  locale,
  items,
  brand,
  languageLabels,
  sayHello,
  motto,
  navLabel,
  openMenuLabel,
  closeMenuLabel,
  menuTitle,
  menuDescription,
  defaultOpen,
}: MobileNavProps) => {
  const pathname = usePathname()

  return (
    <Sheet defaultOpen={defaultOpen}>
      <SheetTrigger asChild>
        <MenuButton label={openMenuLabel} />
      </SheetTrigger>
      <SheetContent
        closeLabel={closeMenuLabel}
        className="flex w-[88%] flex-col gap-8 overflow-y-auto border-l border-ink/15 bg-paper bg-grid-paper px-6 pt-5 pb-10">
        <div className="flex min-h-11 items-center pr-12">
          {brand && <SheetClose asChild>{brand}</SheetClose>}
        </div>
        <SheetHeader className="sr-only text-left">
          <SheetTitle>{menuTitle ?? 'Navigation menu'}</SheetTitle>
          <SheetDescription>
            {menuDescription ?? 'Navigate to another page.'}
          </SheetDescription>
        </SheetHeader>
        <nav aria-label={navLabel}>
          <ul className="flex flex-col gap-1">
            {items.map((item, index) => {
              const active = isActivePath(pathname, item.path)
              return (
                <li key={item.path}>
                  <SheetClose asChild>
                    <Link
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                      className="flex min-h-12 items-center gap-3 font-serif text-[34px] leading-none hover:text-pen">
                      <CircledNumber n={index + 1} className="font-sans" />
                      {active ? (
                        <HandRing variant="oval" animated>
                          {item.label}
                        </HandRing>
                      ) : (
                        item.label
                      )}
                    </Link>
                  </SheetClose>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className="flex flex-wrap items-center gap-3 border-t border-ink/20 pt-6">
          <PillLink href={sayHello.href} arrow>
            {sayHello.label}
          </PillLink>
          <LanguageSwitch locale={locale} labels={languageLabels} />
        </div>
        {motto && (
          <HandNote as="p" size={24} rotate={-2}>
            {motto}
          </HandNote>
        )}
      </SheetContent>
    </Sheet>
  )
}
