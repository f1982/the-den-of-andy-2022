'use client'

import { menuData } from '../../config/menu-data'
import Logo from '../atoms/logo/Logo'
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
            'pt-1 pb-0', // mobile top and bottom paddings
            'md:pt-0 md:pb-0', // desktop top and bottom paddings
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
      border-b-[0px] 
      w-full 
      transition-all 
      duration-300 
      bg-slate-200
      dark:bg-gray-900
      sticky 
      p-2 md:p-10 top-0 z-10 ${classNames}`}>
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
