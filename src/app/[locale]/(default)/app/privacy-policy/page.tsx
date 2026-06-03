import type { Metadata } from 'next'

import { PageLocaleProp } from '@/types/page'

import { getDictionary } from '@/utils/dictionaries'

import PageRows from '@/components/shared/page-rows'

import { siteSettings } from '@/config/site-config'

// Import the markdown content at build time
// import privacyPolicyContent from '@/assets/md/app-privacy-policy.md'

export const metadata: Metadata = {
  title: 'Privacy Policy | ' + siteSettings.title,
  description:
    'Our commitment to protecting your privacy and personal information',
}

export default async function Page(props: PageLocaleProp) {
  const params = await props.params;

  const {
    locale
  } = params;

  const t = await getDictionary(locale)

  // Use the imported content directly
  // const content = await markdownToHtml(privacyPolicyContent)

  return (
    <PageRows>
      {/* <PageTitle title={t.app.privacyPolicy} />
      <Prose content={content} /> */}
    </PageRows>
  )
}
