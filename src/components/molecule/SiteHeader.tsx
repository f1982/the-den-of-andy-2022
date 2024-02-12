'use client'

import { menuData } from '../../config/menu-data'
import Logo from '../atoms/logo/Logo'
import DarkModeToggle from './dark-mode-button'
import DesktopMenuBar from './menus/DesktopMenuBar'
import MobileMenuBar from './menus/MobileMenuBar'
import cn from 'classnames'
import { useEffect, useState } from 'react'

const Header = () => {
  const [classNames, setClassNames] = useState<string>('')
  const [isChanging, setIsChanging] = useState<boolean>(false)
  const [isNarrow, setIsNarrow] = useState<boolean>(false)

  useEffect(() => {
    function handleWindowScroll() {
      if (isChanging) return
      if (window.pageYOffset > 60 && isNarrow === false) {
        setClassNames(
          cn(
            'bg-background',
            'pb-0 pt-1', // mobile top and bottom paddings
            'md:pb-0 md:pt-0', // desktop top and bottom paddings
            'border-b-[1px] border-gray-100',
          ),
        )
        setIsChanging(true)
        setTimeout(() => {
          setIsChanging(false)
        }, 300)
        // change state
        setIsNarrow(true)
      }
      if (isNarrow && window.pageYOffset < 60) {
        setClassNames('')
        setIsChanging(true)
        // setIsNarrow(false);
        setTimeout(() => {
          setIsChanging(false)
        }, 300)
        setIsNarrow(false)
      }
    }

    window.addEventListener('scroll', handleWindowScroll)
    return () => {
      window.removeEventListener('scroll', handleWindowScroll)
    }
  }, [classNames, isChanging, isNarrow])

  return (
    <header
      className={`
      sticky 
      top-0 
      z-10 
      w-full 
      border-b-[0px]
      bg-slate-200
      p-2 
      transition-all duration-300 dark:bg-gray-900 md:p-10 ${classNames}`}>
      <div
        className="
          container
          mx-auto
          flex
          items-center
          lg:flex-row
          lg:content-center">
        <Logo />
        <div className="flex-1" />
        <div className="relative">
          <DesktopMenuBar menuData={menuData} />
          <MobileMenuBar menuData={menuData} />
        </div>
        <DarkModeToggle />
      </div>
    </header>
  )
}

// Header.whyDidYouRender = true;
Header.whyDidYouRender = {
  logOnDifferentValues: true,
  customName: 'SiteHeader',
}

export default Header
