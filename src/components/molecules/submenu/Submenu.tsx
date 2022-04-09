import Link from 'next/link';
import { MenuItemData } from '../../../types';

function SubMenuItem({ link, label }: MenuItemData) {
  return (
    <Link href={link} passHref>
      <a
        className="
          px-6
          py-3
          mr-3
          bg-secondary-medium
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

function Submenu({ items }:{items:MenuItemData[]}) {
  return (
    <nav className="mb-12 font-bold">
      <ul className="flex flex-column">
        {items.map((item:MenuItemData) => (
          <SubMenuItem key={item.link} label={item.label} link={item.link} />
        ))}
      </ul>
    </nav>
  );
}

export default Submenu;
