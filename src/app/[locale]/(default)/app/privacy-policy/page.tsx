import type { Metadata } from 'next'

import { getPageMetadata } from '@/utils/metadata-utils'

import LegalPage from '@/features/legal/legal-page'

import { siteSettings } from '@/config/site-config'

import { getLocalizedHtml } from '@/content/localized-markdown'

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await props.params
  return getPageMetadata({
    locale,
    path: '/app/privacy-policy',
    title: `Privacy Policy | ${siteSettings.name}`,
    description:
      'Our commitment to protecting your privacy and personal information.',
  })
}

export default async function Page(props: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await props.params
  const htmlContent = getLocalizedHtml('appPrivacyPolicy', locale)

  return <LegalPage locale={locale} html={htmlContent} />
}
