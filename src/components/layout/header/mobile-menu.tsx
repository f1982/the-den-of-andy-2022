'use client'

import React, { useState } from 'react'

import dynamic from 'next/dynamic'

import type { MobileNavProps } from './mobile-menu-sheet'

// Accepts extra props/ref so it can be the Radix <SheetTrigger asChild> child.
export const MenuButton = ({
  label,
  ...props
}: React.ComponentProps<'button'> & { label?: string }) => (
  <button
    type="button"
    {...props}
    className="inline-flex size-11 items-center justify-center rounded-full text-ink shadow-[inset_0_0_0_1px_rgba(28,27,25,0.25)] transition-colors hover:text-pen focus-visible:outline-2 focus-visible:outline-pen desk:hidden"
    aria-label={label ?? 'Open navigation menu'}>
    <svg
      aria-hidden="true"
      width="20"
      height="14"
      viewBox="0 0 20 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round">
      <path d="M1 2 C 6 1, 14 3, 19 1.5" />
      <path d="M1 7 C 7 6, 13 8, 19 7" />
      <path d="M1 12.5 C 6 12, 14 13, 19 12" />
    </svg>
  </button>
)

// The Radix-based sheet is only needed once someone opens the menu on a small
// screen, so it is loaded on the first tap instead of with every page.
const MobileNavPopover = dynamic(
  () => import('./mobile-menu-sheet').then((mod) => mod.MobileNavPopover),
  { ssr: false, loading: () => <MenuButton /> },
)

export const MobileNav = (props: Omit<MobileNavProps, 'defaultOpen'>) => {
  const [requested, setRequested] = useState(false)

  if (!requested) {
    return (
      <MenuButton
        label={props.openMenuLabel}
        onClick={() => setRequested(true)}
      />
    )
  }

  return <MobileNavPopover {...props} defaultOpen />
}
