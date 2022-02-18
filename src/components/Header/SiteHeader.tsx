import React from 'react';
import { menuData } from '../../constants/menuData';
import DesktopMenuBar from './DesktopMenuBar';
import Logo from './Logo';
import MobileMenuBar from './MobileMenuBar';

export default function Header() {
  return (
    <header style={{ borderBottom: '1px solid #ccc' }}>
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
