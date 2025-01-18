import React from 'react'

import { Metadata } from 'next'

import fs from 'fs'
import path from 'path'

import markdownToHtml from '@/utils/markdownToHtml'

import { siteSettings } from '@/config/site-config'

export const metadata: Metadata = {
  title: 'Terms of Use | ' + siteSettings.title,
  description: 'Our terms of use for using our services',
}

const TermsOfUse: React.FC = async () => {
  const supportContent = fs.readFileSync(
    path.join(process.cwd(), 'src/assets/md/app-support.md'),
    'utf8',
  )

  const htmlContent = await markdownToHtml(supportContent)

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
