'use client'

import React from 'react'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
          <span aria-hidden="true">{icon}</span>
        </span>
        {label}
      </Link>
    </>
  )
}
