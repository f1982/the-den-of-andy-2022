import { Pathnames } from 'next-intl/navigation'

export const defaultLocale = 'en' as const
export const locales = [defaultLocale, 'cn'] as const

export const pathnames = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    cn: '/lujing',
  },
} satisfies Pathnames<typeof locales>

// Use the default: `always`
export const localePrefix = undefined

export type AppPathnames = keyof typeof pathnames
