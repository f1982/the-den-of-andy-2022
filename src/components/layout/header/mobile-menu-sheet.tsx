'use client'

import React from 'react'

import clsx from 'clsx'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import { MenuItemData } from './menu-data'

export function MobileNavMenuItem({
  link,
  label,
  icon,
}: {
  link: string
  label: string
  icon?: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <>
      <SheetClose asChild>
        <Link href={link} className="block w-full text-left">
          <span className="flex flex-row items-center gap-3">
            <span aria-hidden="true">{icon}</span>
            <span
              className={clsx(
                'w-full text-lg',
                pathname.startsWith(link)
                  ? 'font-bold'
                  : 'font-semibold text-muted-foreground',
              )}>
              {label}
            </span>
          </span>
        </Link>
      </SheetClose>
    </>
  )
}

export type MobileNavProps = {
  left?: React.ReactNode
  right?: React.ReactNode
  data: MenuItemData[]
  openMenuLabel?: string
  closeMenuLabel?: string
  menuTitle?: string
  menuDescription?: string
  defaultOpen?: boolean
}

export const MobileNavPopover = ({
  left,
  right,
  data,
  openMenuLabel,
  closeMenuLabel,
  menuTitle,
  menuDescription,
  defaultOpen,
}: MobileNavProps) => {
  return (
    <>
      <Sheet defaultOpen={defaultOpen}>
        <SheetTrigger
          className="md:hidden"
          aria-label={openMenuLabel ?? 'Open navigation menu'}>
          <Menu size={40} aria-hidden="true" />
        </SheetTrigger>
        <SheetContent closeLabel={closeMenuLabel}>
          <div className="flex flex-col gap-6">
            <div className="mt-9 flex flex-row justify-between">
              {left}
              {right}
            </div>
            <SheetHeader className="sr-only text-left">
              <SheetTitle>{menuTitle ?? 'Navigation menu'}</SheetTitle>
              <SheetDescription>
                {menuDescription ?? 'Navigate to another page.'}
              </SheetDescription>
            </SheetHeader>
            <nav aria-label="Mobile navigation">
              <ul className={clsx('flex flex-col gap-6')}>
                {data.map((item) => (
                  <li key={item.link}>
                    <MobileNavMenuItem {...item} />
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
