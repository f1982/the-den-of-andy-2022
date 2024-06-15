import 'server-only'

const dictionaries = {
  'en-US': () =>
    import('../../i18n/messages/en.json').then((module) => module.default),
  'zh-CN': () =>
    import('../../i18n/messages/cn.json').then((module) => module.default),
}

export const getDictionary = async (locale) => dictionaries[locale]()
