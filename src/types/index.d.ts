interface Window {
  adsbygoogle: { [key: string]: unknown }[]
  gtag: { [key: string]: unknown }[]
}

// use css module in the project
// need to add this file to tsconfig.json, put it in the include array
declare module '*.module.css'

// images
declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.png' {
  const content: any
  export default content
}

declare module '*.jpg' {
  const content: any
  export default content
}

declare module '*.jpeg' {
  const content: any
  export default content
}

declare module '*.gif' {
  const content: any
  export default content
}

declare module '*.md' {
  const content: string
  export default content
}

declare module '@/assets/md/app-privacy-policy.md' {
  const content: string
  export default content
}
