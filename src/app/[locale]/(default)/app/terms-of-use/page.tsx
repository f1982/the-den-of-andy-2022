import React from 'react'

import { Metadata } from 'next'

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
    path: '/app/terms-of-use',
    title: `Terms of Use | ${siteSettings.name}`,
    description: 'Read the terms for using Andy Cao apps and services.',
  })
}

const TermsOfUse: React.FC<{ params: Promise<{ locale: string }> }> = async ({
  params,
}) => {
  const { locale } = await params
  const htmlContent = getLocalizedHtml('appTermsOfUse', locale)

  return <LegalPage locale={locale} html={htmlContent} />
}

export default TermsOfUse
