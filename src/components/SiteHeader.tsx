import Link from 'next/link';
import React from 'react';
import Logo from './Logo';
import ArrowRight from './Icons/ArrowRight';
import ThemeChanger from './ThemeChanger';
import MyButton from './ui/Button';

interface MenuItemData {
  link:string,
  label:string
}

const MenuData: MenuItemData[] = [
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

function MenuItem({ link, label }: MenuItemData) {
  return (
    <Link href={link} passHref>
      <button
        className="
        font-as
        font-bold
        px-2
        py-2
        rounded
        hover:bg-th-accent-light
        hover:text-white
        "
        type="button"
      >
        {label}

      </button>
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

        <MyButton type="primary">
          Button
          <ArrowRight />

        </MyButton>
      </div>
      <ThemeChanger />
    </header>
  );
}
