import { SheetClose } from '@/components/ui/sheet'
import { usePathname } from '@/i18n/navigation'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

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
          'flex items-center',
          'text-sm font-bold hover:text-foreground',
          pathname.startsWith(link)
            ? 'text-foreground'
            : 'text-muted-foreground',
        )}
        href={link}>
        {/* {icon} */}
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
          {icon}
          <span
            className={clsx(
              'w-full text-lg',
              pathname.startsWith(link) ? 'font-bold' : 'font-normal',
            )}>
            {label}
          </span>
        </SheetClose>
      </Link>
    </>
  )
}
