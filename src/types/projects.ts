export interface MenuItemObject {
  name: string
  link?: string
  index: number
}

/**
 * Project Value Object
 */
export interface ProjectItemData {
  id: string
  title: string
  responsibility: string
  description: string
  type: string
  category: string
  icon: string
  qrcode: string
  platform: string
  state: string
  cover: string
  start: string
  end: string
  images: Array<string>
  tech: string
  link?: string
  github?: string
  video?: string
  language: string
  quote?: string
  content?:string
}

export interface LinkObject {
  id: number
  name: string
  type: string
  icon: string
  link: string
  alt?: string
  tag?: string
  hidden: boolean
}

export interface SkillObject {
  name: string
  level: number
  hidden: boolean
}
