// Formatted in UTC so the date is the same no matter where the page is
// prerendered, e.g. "March 26, 2020".
const dateFormat = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC',
})

export function parseDate(dateStr: string) {
  return dateFormat.format(new Date(dateStr))
}
