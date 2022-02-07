import Link from 'next/link';
import React from 'react';
import Logo from './Logo';
import ArrowRight from './Icons/ArrowRight';
import MyButton from './ui/Button';
import MenuItemData from '../types/index';
import { menuData } from '../config/menuData';

function MenuItem({ link, label }: MenuItemData) {
  return (
    <Link href={link} passHref>
      <a
        className="
        bg-secondary-medium
        hover:bg-secondary-light
        hover:text-white
        "
      >
        {label}
      </a>
    </Link>
  );
}

export default function Header() {
  return (
    <header className="body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Logo />
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {
            menuData.map((item) => (
              <span
                key={item.link}
                className="mr-2 px-2 py-4"
              >
                <MenuItem link={item.link} label={item.label} />
              </span>
            ))
          }
        </nav>

        <MyButton type="primary">
          <ArrowRight />
        </MyButton>
      </div>

    </header>
  );
}
