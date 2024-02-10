import { getLocale, getTranslations } from 'next-intl/server'
import { locales } from '../../config/i18n/config'
import LocaleSwitcherSelect from './locale-switch-select'

export default async function LocaleSwitcher() {
  const t = await getTranslations('LocaleSwitcher')
  const locale = await getLocale()

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {locales.map((cur) => (
        <option key={cur} value={cur}>
          {t('locale', { locale: cur })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  )
}
