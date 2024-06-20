'use client'

import React from 'react'

import clsx from 'clsx'
import { Menu, X } from 'lucide-react'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'

import { MenuItemData } from './menu-data'
import { MobileNavMenuItem } from './menu-item'

export const MobileNavPopover = ({
  left,
  right,
  data,
}: {
  left?: React.ReactNode
  right?: React.ReactNode
  data: MenuItemData[]
}) => {
  return (
    <>
      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu size={40} />
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col gap-6">
            <div className="mt-9 flex flex-row justify-between">
              {left}
              {right}
            </div>
            <menu className={clsx('flex flex-col gap-6')}>
              {data.map((item) => (
                <MobileNavMenuItem key={item.link} {...item} />
              ))}
            </menu>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
