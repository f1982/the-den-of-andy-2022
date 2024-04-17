import DarkModeToggle from '@/components/atoms/dark-mode-toggle'
import Logo from '@/components/atoms/logo/Logo'
import Header from '@/components/page/header/header'
import { menuData } from '@/config/menu-data'
import LocaleSwitcher from '@/i18n/locale-switcher'
import Link from 'next/link'
import React from 'react'

export default function SiteHeader() {
  return (
    <>
      <Header
        left={
          <Link
            data-test="leftLink"
            href="/"
            title="back to emojiu.cc homepage">
            <Logo className="w-9" />
          </Link>
        }
        data={menuData}
        right={
          <div className="flex flex-row gap-3">
            <DarkModeToggle />
            {/* <LocaleSwitcher /> */}
          </div>
        }
      />
    </>
  )
}
