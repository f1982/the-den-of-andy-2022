import type en from '@/dictionaries/en.json'

/** Copy for the project pages (`dict.den.projects`). */
export type ProjectsCopy = (typeof en)['den']['projects']

const year = (date: string) => date.slice(0, 4)

/** '2022' / '2020–21' / '2009–2013'-style year span for a project. */
export function formatProjectYears(start: string, end?: string) {
  const from = year(start)
  const to = year(end || start)
  if (from === to) return from
  return from.slice(0, 2) === to.slice(0, 2)
    ? `${from}–${to.slice(2)}`
    : `${from}–${to}`
}

const monthFormatters = new Map<string, Intl.DateTimeFormat>()

function formatMonth(date: string, locale: string) {
  // Some projects only have a year ('2018').
  if (date.length < 7) return date
  const intlLocale = locale === 'zh-CN' ? 'zh-CN' : 'en-NZ'
  let formatter = monthFormatters.get(intlLocale)
  if (!formatter) {
    formatter = new Intl.DateTimeFormat(intlLocale, {
      year: 'numeric',
      month: 'short',
      timeZone: 'UTC',
    })
    monthFormatters.set(intlLocale, formatter)
  }
  return formatter.format(new Date(date))
}

/** 'Feb 2022 → Apr 2022', or a single date when start and end match. */
export function formatProjectSpan(start: string, end: string, locale: string) {
  const from = formatMonth(start, locale)
  const to = formatMonth(end || start, locale)
  return from === to ? from : `${from} → ${to}`
}

/** 'React,Typescript, Jest' → ['React', 'Typescript', 'Jest']. */
export function splitTech(tech: string) {
  return tech
    .split(',')
    .map((t) => t.trim())
    .filter(Boolean)
}

/** Two-digit inventory number: 3 → '03'. */
export const projectNumber = (index: number) =>
  String(index + 1).padStart(2, '0')
