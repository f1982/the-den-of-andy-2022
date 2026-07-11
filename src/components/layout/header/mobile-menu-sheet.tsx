'use client'

import React from 'react'

import clsx from 'clsx'
import { Menu, X } from 'lucide-react'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import { MenuItemData } from './menu-data'
import { MobileNavMenuItem } from './menu-item'

export const MobileNavPopover = ({
  left,
  right,
  data,
  openMenuLabel,
  closeMenuLabel,
  menuTitle,
  menuDescription,
}: {
  left?: React.ReactNode
  right?: React.ReactNode
  data: MenuItemData[]
  openMenuLabel?: string
  closeMenuLabel?: string
  menuTitle?: string
  menuDescription?: string
}) => {
  return (
    <>
      <Sheet>
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
