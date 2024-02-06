import { localePrefix, locales, pathnames } from './config/i18n/config'
import { createLocalizedPathnamesNavigation } from 'next-intl/navigation'

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames })
