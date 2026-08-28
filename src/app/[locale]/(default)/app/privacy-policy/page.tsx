import type { Metadata } from 'next'

import markdownToHtml from '@/utils/markdownToHtml'

import { siteSettings } from '@/config/site-config'
import { getPageMetadata } from '@/utils/metadata-utils'

import { getLocalizedMarkdown } from '@/content/localized-markdown'

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

export default async function Page(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params
  const htmlContent = await markdownToHtml(
    getLocalizedMarkdown('appPrivacyPolicy', locale),
  )

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
      <article
        className="prose-md prose mx-auto max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  )
}
