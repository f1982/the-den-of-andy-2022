import EyeIcon from '../components/Icons/EyeIcon';
import Facebook from '../components/Icons/Facebook';
import Hamburger from '../components/Icons/Hamburger';
import Ins from '../components/Icons/Ins';
import Twitter from '../components/Icons/Twitter';
import YouTube from '../components/Icons/YouTube';
import { MenuItemData } from '../types/index';

const BLOG_PATH = '/blog';

const menuData: MenuItemData[] = [
  {
    link: '/home',
    label: 'Home',
    icon: <EyeIcon />,
  },
  {
    link: BLOG_PATH,
    label: 'Blog',
    icon: <YouTube />,
  },
  {
    link: '/project',
    label: 'Projects',
    icon: <Hamburger />,
  },
  {
    link: '/hobbies',
    label: 'Hobbies',
    icon: <Ins />,
  },
  {
    link: '/about',
    label: 'About',
    icon: <Twitter />,
  },
];

const aboutSubmenu: MenuItemData[] = [
  {
    link: '/about/devices',
    label: 'My Device',
  },
  {
    link: '/about/apps',
    label: 'My Software',
  },
  {
    link: '/about/contact',
    label: 'Contact',
  },
];
export {
  BLOG_PATH,
  menuData,
  aboutSubmenu,
};
