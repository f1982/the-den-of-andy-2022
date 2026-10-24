'use client'

import React from 'react'

import { usePathname } from 'next/navigation'

import { localizedPath } from '@/utils/locale-path'

import { cn } from '@/components/ui/utils'

import { stripLocalePrefix } from '@/config/i18n'

import { LanguageSwitchLabels } from './menu-data'

/**
 * "EN / 中文": links to the current page in each locale. English lives at the
 * site root, Chinese under /zh-CN. Plain <a> because switching locale swaps
 * the root layout (<html lang>) anyway.
 */
export function LanguageSwitch({
  locale,
  labels,
  className,
}: {
  locale: string
  labels: LanguageSwitchLabels
  className?: string
}) {
  const path = stripLocalePrefix(usePathname() ?? '/')
  const options = [
    {
      locale: 'en',
      text: labels.en,
      title: labels.switchToEn,
    },
    {
      locale: 'zh-CN',
      text: labels.zh,
      title: labels.switchToZh,
    },
  ]

  return (
    <nav
      aria-label={labels.label}
      className={cn(
        'flex items-center font-mono text-xs text-graphite',
        className,
      )}>
      {options.map((option, i) => {
        const current = option.locale === locale
        return (
          <React.Fragment key={option.locale}>
            {i > 0 && <span aria-hidden="true">/</span>}
            <a
              href={localizedPath(option.locale, path)}
              hrefLang={option.locale}
              lang={option.locale}
              title={current ? undefined : option.title}
              aria-current={current ? 'true' : undefined}
              className={cn(
                'inline-flex min-h-11 min-w-11 items-center justify-center px-1.5 transition-colors hover:text-pen',
                current && 'text-ink',
              )}>
              {option.text}
            </a>
          </React.Fragment>
        )
      })}
    </nav>
  )
}
