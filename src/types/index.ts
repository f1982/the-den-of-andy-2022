import React from 'react'

import { StaticImport } from 'next/dist/shared/lib/get-img-props'

interface MenuItemData {
  link: string
  label: string
  title?: string
  icon?: React.ReactElement
  onClick?: (e: React.MouseEvent, path: string) => void | undefined
}

interface HeroData {
  title: string
  subtitle?: string
  image: string | StaticImport
  description?: string
  buttons?: React.ReactNode
  viewPortOnce?: boolean
  className?: string
  id?: string
  imageAlt?: string
  headingLevel?: 1 | 2
}
export type { MenuItemData, HeroData }
