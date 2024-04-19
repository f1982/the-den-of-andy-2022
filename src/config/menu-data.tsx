import AboutIcon from '../components/atoms/Icons/AboutIcon'
import BlogIcon from '../components/atoms/Icons/BlogIcon'
import HobbyIcon from '../components/atoms/Icons/HobbyIcon'
import HomeIcon from '../components/atoms/Icons/HomeIcon'
import ProjectIcon from '../components/atoms/Icons/ProjectIcon'
import { MenuItemData } from '@/components/page/header/menu-data'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

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
