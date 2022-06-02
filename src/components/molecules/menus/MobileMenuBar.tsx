import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { MenuItemData } from '../../../types';
import CloseButton from '../../atoms/buttons/CloseButton';
import Hamburger from '../../atoms/Icons/Hamburger';

function MenuItem({
  link,
  label,
  icon,
  onClick,
}: MenuItemData) {
  const { pathname } = useRouter();
  const basicStyle = `
          px-4 py-4 
          font-bold 
          text-on-primary 
          transition-all
          transition ease-in-out
          hover:bg-primary-dark
          hover:text-white
          flex 
          flex-row
          justify-start
          items-center`;
  const activeStyle = link === pathname ? 'bg-secondary-dark text-[#fff]' : '';

  return (
    <Link href={link} passHref>
      <button
        type="button"
        className={cn(basicStyle, activeStyle)}
        onClick={(e) => onClick(e, link)}
      >
        <span className="mr-[1rem]">{icon}</span>
        <span>{label}</span>
      </button>
    </Link>
  );
}

interface MobileMenuBarProps {
  menuData: MenuItemData[]
}

function MobileMenuBar({
  menuData,
}: MobileMenuBarProps) {
  const [showing, setShowing] = useState(false);
  const isMobile = useMediaQuery('(max-width: 960px)');

  // this fun will never change when rerendering happens
  const handleClick = useCallback(() => {
    setShowing(false);
  }, []);

  return (
    <>
      <div className="md:hidden p-4 pr-0">
        <button
          type="button"
          className="w-8"
          onClick={() => {
            setShowing(!showing);
          }}
        >
          <Hamburger />
        </button>
      </div>
      {showing && isMobile && (
        <div className="fixed top-0 left-0 w-full h-full bg-white" style={{ zIndex: 999 }}>
          <div className="flex justify-end p-[1rem]">
            <CloseButton size="sm" onClick={() => setShowing(!showing)} />
          </div>
          <nav className="flex flex-col ">
            {
              menuData.map((item) => <MenuItem key={item.link} {...item} onClick={handleClick} />)
            }
          </nav>
        </div>
      )}
    </>
  );
}

export default MobileMenuBar;
