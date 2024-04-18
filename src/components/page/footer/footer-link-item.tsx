'use client'

import clsx from 'clsx'
import Link from 'next/link'

export function FooterLinkItem({
  label,
  link,
}: {
  label: string
  link: string
}) {
  return (
    <Link
      className={clsx(
        'text-sm text-muted-foreground hover:text-foreground',
        'transition-all',
        'underline underline-offset-4 hover:no-underline',
      )}
      href={link}>
      {label}
    </Link>
  )
}
