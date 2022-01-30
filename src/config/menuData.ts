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
  {
    link: '/contact',
    label: 'Contact',
  },
];

export {
  BLOG_PATH,
  menuData,
};
