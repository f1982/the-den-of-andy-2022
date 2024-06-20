import Link from 'next/link'

import Logo from '@/lib/site-logo'

import { getDictionary } from '@/utils/dictionaries'

import Header from '@/components/layout/header/header'
import DarkModeToggle from '@/components/shared/dark-mode-toggle'

import { routeLinks } from '@/config/menu-data'

export default async function SiteHeader(params: { locale: string }) {
  const { locale } = params
  // TODO: move this data out for reusing
  const dict = await getDictionary(locale)

  const menuData = routeLinks.map((item) => {
    return { ...item, label: dict.common.menu[item.label.toLowerCase()] }
  })

  return (
    <>
      <Header
        left={
          <Link data-test="homeLink" href="/" title="homepage">
            <Logo className="w-10 fill-muted/60 stroke-muted/60" />
          </Link>
        }
        data={menuData}
        right={
          <div className="flex flex-row gap-3">
            <DarkModeToggle />
          </div>
        }
      />
    </>
  )
}
