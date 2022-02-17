import Link from 'next/link';
import React from 'react';
import Logo from './Logo';
import ArrowRight from '../Icons/ArrowRight';
import MyButton from '../Button/Button';
import MenuItemData from '../../types/index';
import { menuData } from '../../config/menuData';
import MobileMenuBar from '../MenuBar/MobileMenuBar';
import DesktopMenuBar from '../MenuBar/DesktopMenuBar';

export default function Header() {
  return (
    <header>
      <div className="
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
