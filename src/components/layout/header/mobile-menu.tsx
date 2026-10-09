'use client'

import React, { useState } from 'react'

import { Menu } from 'lucide-react'
import dynamic from 'next/dynamic'

import type { MobileNavProps } from './mobile-menu-sheet'

const MenuButton = ({
  label,
  onClick,
}: {
  label?: string
  onClick?: () => void
}) => (
  <button
    type="button"
    className="md:hidden"
    aria-label={label ?? 'Open navigation menu'}
    onClick={onClick}>
    <Menu size={40} aria-hidden="true" />
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
