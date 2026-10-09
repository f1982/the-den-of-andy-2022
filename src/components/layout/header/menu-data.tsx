import React from 'react'

export type MenuItemData = {
  label: string
  labelKey?: string
  title?: string
  icon?: React.ReactNode
  link: string
}

/** A primary nav entry, ready to render. */
export type NavItem = {
  /** Locale-free path used to detect the active item, e.g. '/blog'. */
  path: string
  /** Localized href, e.g. '/zh-CN/blog'. */
  href: string
  label: string
}

export type LanguageSwitchLabels = {
  label: string
  en: string
  zh: string
  switchToEn: string
  switchToZh: string
}
