import Link from 'next/link';
import React from 'react';
import Logo from '../Logo';
import ArrowRight from '../Icons/ArrowRight';

interface MenuItemType {
  link:string,
  label:string
}

const MenuData: MenuItemType[] = [
  {
    link: '/home',
    label: 'Home',
  },
  {
    link: '/blog',
    label: 'Blog',
  },
  {
    link: '/projects',
    label: 'Projects',
  },
  {
    link: '/hobbies',
    label: 'Hobbies',
  },
  {
    link: '/about',
    label: 'About',
  },
  {
    link: '/contact',
    label: 'Contact',
  },
];

function MenuItem({ link, label }: MenuItemType) {
  return (
    <Link href={link} passHref>
      <button className="px-3 py-1" type="button">{label}</button>
    </Link>
  );
}

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Logo />
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {
            MenuData.map((item) => (
              <span key={item.link} className="mr-2">
                <MenuItem link={item.link} label={item.label} />
              </span>
            ))
          }
        </nav>
        <button type="button" className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Button
          <ArrowRight />
        </button>
      </div>
    </header>
  );
}
