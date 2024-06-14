import React from 'react'

import { MenuItemData } from '../header/menu-data'
import { ExtraLinks } from './link-matrix'
import SocialIconLinks from './social-icon-links'

type FooterProps = {
  logo?: React.ReactNode
  sns: MenuItemData[]
  links: MenuItemData[][]
  slogan?: string
  copyright?: string
  className?: string
}

export function Slogan({ text }: { text: string }) {
  return <div className="text-sm text-muted-foreground">{text}</div>
}

export default function Footer(props: FooterProps) {
  return (
    <footer className="bg-card py-16 md:py-32">
      <div className="container">
        <div className="flex flex-col justify-between gap-9 md:flex-row">
          <div className="flex flex-col items-center gap-6 md:items-start">
            {props.logo}
            <SocialIconLinks data={props.sns}></SocialIconLinks>
            {props.slogan && <Slogan text={props.slogan} />}
          </div>
          <div className="mb-8 w-full md:w-1/3">
            <ExtraLinks data={props.links} />
          </div>
        </div>
        <div>
          <div className="my-9 border-b border-solid border-b-border"></div>
          <p className="text-xs text-muted-foreground">{props.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
