import React from 'react'

import { Metadata } from 'next'

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
    path: '/app/terms-of-use',
    title: `Terms of Use | ${siteSettings.name}`,
    description: 'Read the terms for using Andy Cao apps and services.',
  })
}

const TermsOfUse: React.FC<{ params: Promise<{ locale: string }> }> = async ({
  params,
}) => {
  const { locale } = await params
  const htmlContent = await markdownToHtml(
    getLocalizedMarkdown('appTermsOfUse', locale),
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

export default TermsOfUse
