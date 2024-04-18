import DarkModeToggle from '@/components/atoms/dark-mode-toggle'
import Header from '@/components/page/header/header'
import { menuData } from '@/config/menu-data'
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
            <Logo className="w-10 fill-primary" />
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
