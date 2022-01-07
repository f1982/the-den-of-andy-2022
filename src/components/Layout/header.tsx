import Link from 'next/link';
import Logo from '../Logo';

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

function MenuItem({ link, label }: MenuItemType):JSX.Element {
  return (
    <Link href={link} passHref>
      <button type="button">{label}</button>
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
            MenuData.map((item) => <MenuItem key={item.link} link={item.link} label={item.label} />)
          }
        </nav>
        <button type="button" className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Button
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
  );
}
