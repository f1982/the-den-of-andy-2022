import React, { useEffect, useState } from 'react';
import { menuData } from '../../../constants/menuData';
import DesktopMenuBar from '../../molecules/menus/DesktopMenuBar';
import Logo from '../../atoms/logo/Logo';
import MobileMenuBar from '../../molecules/menus/MobileMenuBar';

function Header() {
  const [classNames, setClassNames] = useState<string>('');

  useEffect(() => {
    function handleWindowScroll() {
      if (window.pageYOffset > 10) {
        setClassNames('bg-secondary-dark');
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
      className={`border-b-[0px] border-gray-200 w-full duration-300 sticky top-0 z-10 ${classNames}`}
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
