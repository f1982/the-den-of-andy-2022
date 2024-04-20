import DarkModeToggle from '@/components/atoms/dark-mode-toggle'
import Header from '@/components/page/header/header'
import { routeLinks } from '@/config/menu-data'
import LocaleSwitcher from '@/i18n/locale-switcher'
import Logo from '@/lib/site-logo'
import Link from 'next/link'

export default function SiteHeader() {
  return (
    <>
      <Header
        left={
          <Link
            data-test="leftLink"
            href="/"
            title="back to emojiu.cc homepage">
            <Logo className="w-10 fill-primary stroke-primary" />
          </Link>
        }
        data={routeLinks}
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
