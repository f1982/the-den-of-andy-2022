import React from 'react'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { SheetClose } from '@/components/ui/sheet'

export function NavMenuItem({
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
      <Link
        className={clsx(
          'flex flex-row items-center gap-3',
          'text-sm font-bold hover:text-primary',
          pathname.startsWith(link)
            ? 'text-foreground'
            : 'text-muted-foreground',
        )}
        href={link}>
        <span
          className={clsx(
            pathname.startsWith(link) ? 'visible' : 'hidden',
            'text-primary',
          )}>
          {icon}
        </span>
        {label}
      </Link>
    </>
  )
}

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
      <Link href={link}>
        <SheetClose className="w-full text-left">
          <div className="flex flex-row items-center gap-3">
            {icon}
            <span
              className={clsx(
                'w-full text-lg',
                pathname.startsWith(link)
                  ? 'font-bold'
                  : 'font-semibold text-muted-foreground',
              )}>
              {label}
            </span>
          </div>
        </SheetClose>
      </Link>
    </>
  )
}
