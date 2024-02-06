import AboutIcon from '../../src-backup/components/atoms/Icons/AboutIcon'
import BlogIcon from '../../src-backup/components/atoms/Icons/BlogIcon'
import HobbyIcon from '../../src-backup/components/atoms/Icons/HobbyIcon'
import HomeIcon from '../../src-backup/components/atoms/Icons/HomeIcon'
import ProjectIcon from '../../src-backup/components/atoms/Icons/ProjectIcon'
import { MenuItemData } from '../../src-backup/types/index'

const BLOG_PATH = '/blog'

const menuData: MenuItemData[] = [
  {
    link: '/home',
    label: 'Home',
    icon: <HomeIcon />
  },
  {
    link: BLOG_PATH,
    label: 'Blog',
    icon: <BlogIcon />
  },
  {
    link: '/project',
    label: 'Projects',
    icon: <ProjectIcon />
  },
  {
    link: '/hobbies',
    label: 'Hobbies',
    icon: <HobbyIcon />
  },
  {
    link: '/about',
    label: 'About',
    icon: <AboutIcon />
  }
]

const aboutSubmenu: MenuItemData[] = [
  {
    link: '/about/devices',
    label: 'My Device'
  },
  {
    link: '/about/apps',
    label: 'My Software'
  },
  {
    link: '/about/contact',
    label: 'Contact'
  }
]

export { BLOG_PATH, menuData, aboutSubmenu }
