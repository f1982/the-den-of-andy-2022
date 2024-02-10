import React from 'react'

interface LinkItemSimpleProp {
  link: string
  alt?: string | undefined
  children?: React.ReactNode
}

const LinkItemSimple: React.FC<LinkItemSimpleProp> = ({
  link,
  alt,
  children,
}) => (
  <a
    href={link}
    className="text-primary-dark"
    title={alt}
    target="_blank"
    rel="noreferrer">
    {children}
  </a>
)

export default LinkItemSimple
