'use client'

import { Button } from '@/components/ui/button'
import customModalStyles from '@/config/modelConfig'
import { usePathname } from '@/i18n/navigation'
import useMediaQuery from '@/lib/hooks/useMediaQuery'
import { MenuItemData } from '@/types'
import cn from 'classnames'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import React, { useCallback, useState } from 'react'
import Modal from 'react-modal'

const MenuItem: React.FC<MenuItemData> = ({ link, label, icon, onClick }) => {
  const pathname = usePathname()
  console.log('pathname', pathname)
  const basicStyle = `
          px-4 py-4 
          font-bold 
          flex 
          flex-row
          justify-start
          items-center`
  const activeStyle = pathname.startsWith(link)
    ? 'text-foreground'
    : 'text-muted-foreground'

  return (
    <Link href={link} passHref legacyBehavior>
      <button
        type="button"
        className={cn(basicStyle, activeStyle)}
        onClick={(e) => onClick && onClick(e, link)}>
        <span className="mr-[1rem]">{icon}</span>
        <span>{label}</span>
      </button>
    </Link>
  )
}

interface MobileMenuBarProps {
  menuData: MenuItemData[]
}

const MobileMenuBar = ({ menuData }: MobileMenuBarProps) => {
  const [showing, setShowing] = useState(false)
  const isMobile = useMediaQuery('(max-width: 960px)')

  // this fun will never change when rerendering happens
  const handleClick = useCallback(() => {
    setShowing(false)
  }, [])

  return (
    <>
      <div className="p-4 pr-0 md:hidden">
        <Button
          onClick={() => {
            setShowing(!showing)
          }}>
          <Menu />
        </Button>
      </div>
      <Modal
        isOpen={showing && isMobile}
        style={customModalStyles}
        contentLabel="Mobile Menu Modal"
        onAfterOpen={() => {
          document.body.style.top = `-${window.scrollY}px`
          document.body.style.position = 'fixed'
        }}
        onAfterClose={() => {
          const scrollY = document.body.style.top
          document.body.style.position = ''
          document.body.style.top = ''
          // eslint-disable-next-line radix
          window.scrollTo(0, parseInt(scrollY || '0') * -1)
        }}>
        <div className="h-full w-full bg-popover">
          <div className="flex justify-end p-[1rem]">
            <Button onClick={() => setShowing(!showing)}>
              <X />
            </Button>
          </div>
          <nav className="flex flex-col ">
            {menuData.map((item) => (
              <MenuItem key={item.link} {...item} onClick={handleClick} />
            ))}
          </nav>
        </div>
      </Modal>
    </>
  )
}

export default MobileMenuBar
