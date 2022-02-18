import Link from 'next/link';
import React, { useState } from 'react';
import { MenuItemData } from '../../types';
import ArrowRight from '../Icons/ArrowRight';
import Hamburger from '../Icons/Hamburger';
import MyButton from '../Button/Button';

function MenuItem({ link, label, icon }: MenuItemData) {
  return (
    <Link href={link} passHref>
      <a
        className="
          px-4
          py-2
          text-lg
          font-bold
          bg-primary-medium
          text-on-primary
          hover:bg-primary-dark
          hover:text-white
          "
      >
        <span>{icon}</span>
        <span>{label}</span>
      </a>
    </Link>
  );
}

function MobileMenuBar({
  menuData,
}:{
  menuData:MenuItemData[]
}) {
  const [showing, setShowing] = useState(false);

  return (
    <>
      {' '}
      <div className="md:hidden">
        <MyButton
          type="primary"
          onClick={() => {
            setShowing(!showing);
          }}
        >
          <Hamburger />
        </MyButton>
      </div>
      {showing && (
      <div className="fixed top-0 left-0 w-full z-999 bg-secondary-dark">
        <nav className="flex flex-col ">
          {
            menuData.map((item) => <MenuItem key={item.link} {...item} />)
          }
          <MyButton
            type="secondary"
            onClick={() => {
              setShowing(!showing);
            }}
          >
            <ArrowRight />
            close
          </MyButton>
        </nav>
      </div>
      )}
    </>

  );
}

export default MobileMenuBar;
