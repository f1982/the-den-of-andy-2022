'use client'

import React from 'react'

import clsx from 'clsx'

import { MenuItemData } from './menu-data'
import { NavMenuItem } from './menu-item'
import { MobileNavPopover } from './mobile-menu-sheet'

type HeaderProps = {
  left?: React.ReactNode
  right?: React.ReactNode
  data: MenuItemData[]
  openMenuLabel?: string
  closeMenuLabel?: string
  mobileMenuTitle?: string
  mobileMenuDescription?: string
  className?: string
}

const Header = ({
  left,
  right,
  data,
  className,
  openMenuLabel,
  closeMenuLabel,
  mobileMenuTitle,
  mobileMenuDescription,
}: HeaderProps) => {
  return (
    <header className={clsx('border-b-0 border-b-border', className)}>
      <div className={clsx('container', ' mb-3 mt-3 ', 'sm:mb-12 sm:mt-12')}>
        <div className="flex w-full items-center justify-between">
          {left}
          <nav
            aria-label="Primary navigation"
            data-test="desktopNavMenu"
            className="hidden flex-row gap-9 md:flex">
            <ul className="flex flex-row gap-9">
              {data.map((item) => (
                <li key={item.link}>
                  <NavMenuItem
                    label={item.label}
                    link={item.link}
                    icon={item.icon}
                  />
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden md:flex">{right}</div>

          {/* Menu button only show in small screen */}
          <MobileNavPopover
            left={left}
            right={right}
            data={data}
            openMenuLabel={openMenuLabel}
            closeMenuLabel={closeMenuLabel}
            menuTitle={mobileMenuTitle}
            menuDescription={mobileMenuDescription}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
