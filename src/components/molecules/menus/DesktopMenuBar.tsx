import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { MenuItemData } from '../../../types/index';
import styles from './menu.module.css';

function MenuItem({ link, label, icon }: MenuItemData) {
  const { pathname } = useRouter();
  return (
    <Link href={link} passHref>
      <a className={link === pathname ? styles.activeNavLink : styles.topMenuItem}>
        <span>{icon}</span>
        <div className={styles.overlayText}>{label}</div>
      </a>
    </Link>
  );
}

function DesktopMenuBar({ menuData }:{menuData:MenuItemData[]}) {
  return (
    <nav className={cn('hidden md:flex md:flex-row', styles.navContainer)}>
      {
        menuData.map((item) => (
          <MenuItem key={item.link} {...item} />
        ))
      }
    </nav>
  );
}

export default DesktopMenuBar;
