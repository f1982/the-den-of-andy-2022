import { MenuItemData } from '@/components/layout/header/menu-data'

import AboutIcon from '../components/shared/Icons/AboutIcon'
import BlogIcon from '../components/shared/Icons/BlogIcon'
import HobbyIcon from '../components/shared/Icons/HobbyIcon'
import HomeIcon from '../components/shared/Icons/HomeIcon'
import ProjectIcon from '../components/shared/Icons/ProjectIcon'

const BLOG_PATH = '/blog'

const routeLinks: MenuItemData[] = [
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
]

export const otherLinks: MenuItemData[] = [
  {
    title: 'About',
    link: '/about',
    label: 'About',
    labelKey: 'about',
  },
  {
    title: 'Privacy Policy',
    link: '/privacy-policy',
    label: 'Privacy Policy',
    labelKey: 'privacyPolicy',
  },
  {
    title: 'Terms of Service',
    link: '/term-and-conditions',
    label: 'Terms of Service',
    labelKey: 'termsOfService',
  },
]

export { BLOG_PATH, routeLinks }
