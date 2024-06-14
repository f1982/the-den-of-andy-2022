import { format, parseISO } from 'date-fns'

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function parseDate(dateStr: string) {
  const date = parseISO(dateStr)
  return format(date, 'LLLL d, yyyy')
}
