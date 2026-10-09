/**
 * Replace `{name}` placeholders in a dictionary string, e.g.
 * fillTemplate('All {count} entries →', { count: 7 }) → 'All 7 entries →'.
 * Unknown placeholders are left untouched.
 */
export function fillTemplate(
  template: string,
  values: Record<string, string | number>,
) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  )
}
