'use client'

import customModalStyles from '../../../config/modelConfig'
import useMediaQuery from '../../../lib/hooks/useMediaQuery'
import { MenuItemData } from '../../../types'
import Hamburger from '../../atoms/Icons/Hamburger'
import CloseButton from '../../atoms/buttons/CloseButton'
import cn from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useCallback, useState } from 'react'
import Modal from 'react-modal'

const MenuItem: React.FC<MenuItemData> = ({ link, label, icon, onClick }) => {
  // const { pathname } = useRouter()
  const pathname = usePathname()
  const basicStyle = `
          px-4 py-4 
          font-bold 
          text-on-primary 
          transition-all
          transition ease-in-out
          hover:bg-primary-dark
          hover:text-white
          flex 
          flex-row
          justify-start
          items-center`
  const activeStyle =
    link === pathname ? 'bg-secondary-dark text-on-background' : ''

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
        <button
          aria-label="menu"
          type="button"
          className="w-8"
          onClick={() => {
            setShowing(!showing)
          }}>
          <Hamburger />
        </button>
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
        <div className="h-full w-full bg-background">
          <div className="flex justify-end p-[1rem]">
            <CloseButton size="sm" onClick={() => setShowing(!showing)} />
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
