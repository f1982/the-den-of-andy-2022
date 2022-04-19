import React from 'react';
import { menuData } from '../../../constants/menuData';
import DesktopMenuBar from '../../molecules/menus/DesktopMenuBar';
import Logo from '../../atoms/logo/Logo';
import MobileMenuBar from '../../molecules/menus/MobileMenuBar';

function Header() {
  return (
    <header
      className="border-b-[0px] border-gray-200 w-full"
    >
      <div
        className="
          container mx-auto
          flex
          flex-wrap
          items-center
          md:flex-col
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
