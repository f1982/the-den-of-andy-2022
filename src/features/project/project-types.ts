// "id": "chick-fil-a-design-system",
// "type": "coding",
// "platform": "Web",
// "title": "Chick fil a Design System and UI Library",
// "description": "CFA Design system & UI library project provides a set of React UI components can be used in any React Frontend projects, help developers to build CFA branded desktop and mobile web applications. It’s responsive and with the accessibility features built-in.",
// "responsibility": "In this project we were using TypeScript to develop core components. Use Storybooks to present components and provide clear component documentation.",
// "state": "release",
// "icon": "",
// "qrcode": "",
// "cover": "cfa-design-system-cover.jpg",
// "start": "2022-02-01",
// "end": "2022-04-01",
// "images": [
//   "cfa-design-system-cover.jpg",
//   "cfa-design-system-1.png",
//   "cfa-design-system-2.png"
// ],
// "tech": "React,Typescript, Jest, React-Testing-Library, Storybook, Accessibility, Sass, Github Action",
// "link": "",
// "github": "",
// "video": "",
// "language": "en",
// "quote": "",
// "extension": ""

export interface ProjectItemData {
  id: string
  title: string
  responsibility: string
  description: string
  type: string
  platform: string
  icon: string
  qrcode: string
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
  content?: string
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
