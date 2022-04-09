import React from 'react';
import { menuData } from '../../../constants/menuData';
import DesktopMenuBar from '../menus/DesktopMenuBar';
import Logo from '../../atom/Logo/Logo';
import MobileMenuBar from '../menus/MobileMenuBar';

function Header() {
  return (
    <header
      className="shadow-sm"
      // style={{ borderBottom: '1px solid #ccc' }}
    >
      <div
        className="
          container mx-auto
          flex
          flex-wrap
          items-center
          md:flex-col
          lg:flex-row
          lg:content-center
      "
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
