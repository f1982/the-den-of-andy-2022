import { createLocalizedPathnamesNavigation } from 'next-intl/navigation'

import { localePrefix, locales, pathnames } from './i18n-config'

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames })
