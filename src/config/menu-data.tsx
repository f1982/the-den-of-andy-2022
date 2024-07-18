import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

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

export const socialLinks: MenuItemData[] = [
  {
    title: 'Twitter',
    label: 'Twitter',
    icon: <Twitter />,
    link: 'https://twitter.com/iandycao',
  },
  {
    title: 'YouTube',
    label: 'YouTube',
    icon: <Youtube />,
    link: 'https://www.youtube.com/channel/UCja8b7EiKdWoSKeUicboVhg',
  },
  {
    title: 'Ins',
    label: 'Ins',
    icon: <Instagram />,
    link: 'https://www.instagram.com/iandycao/',
  },
  {
    title: 'Facebook',
    label: 'Facebook',
    icon: <Facebook />,
    link: 'https://www.facebook.com/andycao1982',
  },
]

export const otherLinks: MenuItemData[] = [
  {
    title: 'About',
    link: '/about',
    label: 'About',
  },
  {
    title: 'Privacy Policy',
    link: '/privacy-policy',
    label: 'Privacy Policy',
  },
  {
    title: 'Terms of Service',
    link: '/term-and-conditions',
    label: 'Terms of Service',
  },
]

export const footerLinks = [routeLinks, otherLinks]

export { BLOG_PATH, routeLinks }
