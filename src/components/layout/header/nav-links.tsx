'use client'

import React from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { CircledNumber, HandRingSvg } from '@/components/den'
import { cn } from '@/components/ui/utils'

import { stripLocalePrefix } from '@/config/i18n'

import { NavItem } from './menu-data'

export function isActivePath(pathname: string | null, path: string) {
  const current = stripLocalePrefix(pathname ?? '/')
  return current === path || current.startsWith(`${path}/`)
}

/** Desktop primary nav: ① Home ② Notebook … with a ballpoint ring on the active item. */
export function NavLinks({
  items,
  ariaLabel,
  className,
}: {
  items: NavItem[]
  ariaLabel: string
  className?: string
}) {
  const pathname = usePathname()

  return (
    <nav aria-label={ariaLabel} className={className}>
      <ul className="flex gap-1">
        {items.map((item, index) => {
          const active = isActivePath(pathname, item.path)
          return (
            <li key={item.path}>
              <Link
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'relative flex min-h-11 items-center gap-2 px-2.5 text-sm whitespace-nowrap transition-colors hover:text-pen xl:px-3.5',
                  'rounded-full focus-visible:outline-2 focus-visible:outline-pen',
                )}>
                <CircledNumber n={index + 1} />
                {item.label}
                {active && (
                  <HandRingSvg
                    variant="pill"
                    animated
                    className="absolute top-0.5 -left-1 h-10 w-[calc(100%+8px)]"
                  />
                )}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
