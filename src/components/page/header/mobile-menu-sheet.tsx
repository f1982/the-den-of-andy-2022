'use client'

import { MenuItemData } from './menu-data'
import { MobileNavMenuItem } from './menu-item'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import clsx from 'clsx'
import { Menu } from 'lucide-react'
import React from 'react'

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
