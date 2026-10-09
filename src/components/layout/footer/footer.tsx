import React from 'react'

import Link from 'next/link'

import { cn } from '@/components/ui/utils'

type FooterLink = { label: string; href: string }

type FooterProps = {
  copyright: string
  motto: string
  email: { label: string; href: string }
  socials: FooterLink[]
  socialLabel: string
  legal: FooterLink[]
  legalLabel: string
  backToTop: string
  className?: string
}

const linkClass =
  'inline-flex min-h-11 items-center transition-colors hover:text-pen focus-visible:outline-2 focus-visible:outline-pen'

/**
 * Compact footer used on every page: an ink rule, then one wrapping row of
 * mono meta — copyright, motto, email, socials, legal links, back to top.
 * It has no top margin; pages end with their own bottom spacing.
 */
export default function Footer({
  copyright,
  motto,
  email,
  socials,
  socialLabel,
  legal,
  legalLabel,
  backToTop,
  className,
}: FooterProps) {
  return (
    <footer className={cn('page-wrap', className)}>
      <div className="flex flex-col gap-x-8 gap-y-1 border-t border-ink pt-4 pb-8 font-mono text-xs text-graphite desk:flex-row desk:flex-wrap desk:items-center desk:justify-between desk:pt-5">
        <p className="flex min-h-11 items-center">{copyright}</p>
        <p
          className="flex min-h-11 items-center font-hand text-xl leading-none font-medium text-pen"
          style={{ rotate: '-1deg' }}>
          {motto}
        </p>
        <a href={email.href} className={cn(linkClass, 'text-ink')}>
          {email.label}
        </a>
        <nav aria-label={socialLabel}>
          <ul className="flex flex-wrap gap-x-4">
            {socials.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className={linkClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label={legalLabel}>
          <ul className="flex flex-wrap gap-x-4">
            {legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#top" className={linkClass}>
          {backToTop} ↑
        </a>
      </div>
    </footer>
  )
}
