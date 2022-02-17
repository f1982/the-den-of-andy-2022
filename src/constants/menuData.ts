import MenuItemData from '../types/index';

const BLOG_PATH = '/blog';

const menuData: MenuItemData[] = [
  {
    link: '/home',
    label: 'Home',
  },
  {
    link: BLOG_PATH,
    label: 'Blog',
  },
  {
    link: '/project',
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
  // {
  //   link: '/contact',
  //   label: 'Contact',
  // },
];

const aboutSubmenu: MenuItemData[] = [
  {
    link: '/about/my-devices',
    label: 'My Device',
  },
  {
    link: 'about/my-apps',
    label: 'My Software',
  },
  {
    link: '/project',
    label: 'My tools',
  },
];
export {
  BLOG_PATH,
  menuData,
  aboutSubmenu,
};
