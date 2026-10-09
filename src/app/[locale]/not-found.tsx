import { getDictionary } from '@/utils/dictionaries'

import NotFoundView from '@/features/not-found/not-found-view'

export default async function NotFound() {
  const [en, zh] = await Promise.all([
    getDictionary('en'),
    getDictionary('zh-CN'),
  ])

  return (
    <NotFoundView
      copy={{
        en: { ...en.den.notFound, brand: en.den.common.brand },
        'zh-CN': { ...zh.den.notFound, brand: zh.den.common.brand },
      }}
    />
  )
}
