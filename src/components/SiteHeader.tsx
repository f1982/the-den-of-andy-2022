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

        <MyButton type="secondary">
          <ArrowRight />
          {' '}
          Go
        </MyButton>
      </div>

    </header>
  );
}
