export const defaultLocale = 'en'
// Before add new language, need to check the accept-language
export const locales = ['en', 'zh-CN']

export function getLocalPrefix(locale: string) {
  return locale == defaultLocale ? '' : locale
}
