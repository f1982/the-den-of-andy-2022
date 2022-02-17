import Link from 'next/link';
import React from 'react';
import { MenuItemData } from '../../types/index';
import ArrowRight from '../Icons/ArrowRight';
import MyButton from '../Button/Button';

function MenuItem({ link, label }: MenuItemData) {
  return (
    <Link href={link} passHref>
      <a
        className="
        px-4
        py-2

        bg-primary-medium
        text-on-primary
        hover:bg-primary-dark
        hover:text-white
        "
      >
        {label}
      </a>
    </Link>
  );
}

function DesktopMenuBar({ menuData }:{menuData:MenuItemData[]}) {
  return (
    <nav className="hidden md:block flex flex-wrap space-x-2">
      {
            menuData.map((item) => (
              <MenuItem key={item.link} link={item.link} label={item.label} />
            ))
          }
      <MyButton type="secondary">
        <ArrowRight />
        {' '}
        <span className="hover:animate-bounce">Go</span>
      </MyButton>
    </nav>
  );
}

export default DesktopMenuBar;
