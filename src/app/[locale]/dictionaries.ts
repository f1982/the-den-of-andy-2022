import 'server-only'

const dictionaries = {
  en: () =>
    import('../../dictionaries/en.json').then((module) => module.default),
  'zh-CN': () =>
    import('../../dictionaries/cn.json').then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
  if (dictionaries[locale]) {
    return dictionaries[locale]()
  } else {
    return dictionaries['en']()
  }
}
