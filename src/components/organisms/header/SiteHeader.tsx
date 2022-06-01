import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { menuData } from '../../../constants/menuData';
import DesktopMenuBar from '../../molecules/menus/DesktopMenuBar';
import Logo from '../../atoms/logo/Logo';
import MobileMenuBar from '../../molecules/menus/MobileMenuBar';

function Header() {
  const [classNames, setClassNames] = useState<string>('');

  useEffect(() => {
    function handleWindowScroll() {
      if (window.pageYOffset > 60) {
        setClassNames(cn(
          'bg-white',
          'pt-4 pb-1',
          'border-b-[1px] border-gray-100',
          // 'drop-shadow',
        ));
      } else if (classNames !== '') {
        setClassNames('');
      }
    }

    window.addEventListener('scroll', handleWindowScroll);
    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, [classNames]);

  return (
    <header
      className={`border-b-[0px] border-gray-200 w-full transition-all duration-500 sticky p-10 top-0 z-10 ${classNames}`}
    >
      <div
        className="
          container
          mx-auto
          flex
          items-center
          lg:flex-row
          lg:content-center"
      >
        <Logo />
        <div className="flex-1" />
        <div className="relative">
          <DesktopMenuBar menuData={menuData} />
          <MobileMenuBar menuData={menuData} />
        </div>
      </div>
    </header>
  );
}

// Header.whyDidYouRender = true;
Header.whyDidYouRender = {
  logOnDifferentValues: true,
  customName: 'SiteHeader',
};

export default Header;
