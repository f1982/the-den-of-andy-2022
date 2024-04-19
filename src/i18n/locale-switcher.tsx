import { locales } from './i18n-config'
import LocaleSwitcherSelect from './locale-switch-select'
import { getLocale, getTranslations } from 'next-intl/server'

export default async function LocaleSwitcher() {
  const t = await getTranslations('common.LocaleSwitcher')
  const locale = await getLocale()

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {locales.map((currentLocale) => (
        <option key={currentLocale} value={currentLocale}>
          {t('locale', { locale: currentLocale })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  )
}
