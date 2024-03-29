import { MenuItemData } from '../../../types'
import Link from 'next/link'
import React from 'react'

const SubMenuItem: React.FC<MenuItemData> = ({ link, label }) => (
  <Link
    href={link}
    passHref
    className="
        px-6
        py-3
        mr-3
        bg-secondary-medium
        text-on-primary
        hover:bg-primary-dark
        hover:text-white
        ">
    {label}
  </Link>
)

const Submenu = ({ items }: { items: MenuItemData[] }) => (
  <nav className="mb-12 font-bold">
    <ul className="flex flex-column">
      {items.map((item: MenuItemData) => (
        <SubMenuItem
          key={item.link}
          label={item.label}
          link={item.link}
          onClick={() => {}}
        />
      ))}
    </ul>
  </nav>
)

export default Submenu
