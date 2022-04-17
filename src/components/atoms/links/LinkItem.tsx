import React from 'react';

interface LinkItemSimpleProp {
  link: string
  alt?: string
  children?: React.ReactNode
}

export default function LinkItemSimple({
  link,
  alt,
  children,
}: LinkItemSimpleProp) {
  return (
    <a
      href={link}
      className="text-primary-dark"
      title={alt}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
