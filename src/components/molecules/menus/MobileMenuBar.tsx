import Link from 'next/link';
import React, { useCallback, useState } from 'react';
import { MenuItemData } from '../../../types';
import ArrowRight from '../../atoms/Icons/ArrowRight';
import Hamburger from '../../atoms/Icons/Hamburger';
import MyButton from '../../atoms/buttons/Button';

function MenuItem({
  link, label, icon, onClick,
}: MenuItemData) {
  return (
    <Link href={link} passHref>
      <button
        type="button"
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
        onClick={(e) => onClick(e, link)}
      >
        <span>{icon}</span>
        <span>{label}</span>
      </button>
    </Link>
  );
}

function MobileMenuBar({
  menuData,
}:{
  menuData:MenuItemData[]
}) {
  const [showing, setShowing] = useState(false);

  // this fun will never change when rerendering happens
  const handleClick = useCallback(() => {
    setShowing(false);
  }, []);

  return (
    <>
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
      <div className="fixed top-0 left-0 w-full bg-secondary-dark" style={{ zIndex: 1000 }}>
        <nav className="flex flex-col ">
          {
            menuData.map((item) => <MenuItem key={item.link} {...item} onClick={handleClick} />)
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
