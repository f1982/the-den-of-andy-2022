import { MenuItemData } from '../../../types/index'
import styles from './menu.module.css'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const MenuItem: React.FC<MenuItemData> = ({ link, label, icon }) => {
  const { pathname } = useRouter()
  return (
    <Link
      href={link}
      passHref
      className={link === pathname ? styles.activeNavLink : styles.topMenuItem}>
      <span>{icon}</span>
      <div className={styles.overlayText}>{label}</div>
    </Link>
  )
}

const DesktopMenuBar = ({ menuData }: { menuData: MenuItemData[] }) => (
  <nav className={cn('hidden md:flex md:flex-row', styles.navContainer)}>
    {menuData.map((item) => (
      <MenuItem key={item.link} {...item} />
    ))}
  </nav>
)

export default DesktopMenuBar
