import React from 'react'

import type { Metadata } from 'next'

import fs from 'fs'
import path from 'path'

import markdownToHtml from '@/utils/markdownToHtml'

import { siteSettings } from '@/config/site-config'

export const metadata: Metadata = {
  title: 'Privacy Policy | ' + siteSettings.title,
  description:
    'Our commitment to protecting your privacy and personal information',
}

const PrivacyPolicy: React.FC = async () => {
  const privacyContent = fs.readFileSync(
    path.join(process.cwd(), 'src/assets/md/app-privacy-policy.md'),
    'utf8',
  )

  const htmlContent = await markdownToHtml(privacyContent)

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
      <article
        className="prose-md prose mx-auto max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  )
}

export default PrivacyPolicy
