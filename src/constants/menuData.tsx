import AboutIcon from '../components/atom/Icons/AboutIcon';
import BlogIcon from '../components/atom/Icons/BlogIcon';
import HobbyIcon from '../components/atom/Icons/HobbyIcon';
import HomeIcon from '../components/atom/Icons/HomeIcon';
import ProjectIcon from '../components/atom/Icons/ProjectIcon';
import { MenuItemData } from '../types/index';

const BLOG_PATH = '/blog';

const menuData: MenuItemData[] = [
  {
    link: '/home',
    label: 'Home',
    icon: <HomeIcon />,
  },
  {
    link: BLOG_PATH,
    label: 'Blog',
    icon: <BlogIcon />,
  },
  {
    link: '/project',
    label: 'Projects',
    icon: <ProjectIcon />,
  },
  {
    link: '/hobbies',
    label: 'Hobbies',
    icon: <HobbyIcon />,
  },
  {
    link: '/about',
    label: 'About',
    icon: <AboutIcon />,
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
