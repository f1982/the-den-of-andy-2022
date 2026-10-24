import React from 'react'

import { getDictionary } from '@/utils/dictionaries'

import { getPostDetail } from '@/features/blog/blog-data'

import { DenCardsSection } from './den-cards-section'
import { DeskStage } from './desk-stage'
import {
  getFeaturedWorks,
  getLatestPosts,
  getPostCount,
  projectCount,
} from './home-data'
import { MottoContactSection } from './motto-contact-section'
import { NotebookSection } from './notebook-section'
import { WorksSection } from './works-section'

/** Home — "The Den": the desk, four pinned cards, notebook, works, motto. */
export async function HomePage({ locale }: { locale: string }) {
  const dict = await getDictionary(locale)
  const keyboardPost = getPostDetail('one-key-keyboard-diy', locale)

  return (
    <>
      <DeskStage dict={dict} locale={locale} keyboardPost={keyboardPost} />
      <DenCardsSection dict={dict} />
      <NotebookSection
        dict={dict}
        locale={locale}
        posts={getLatestPosts(locale, 3)}
        postCount={getPostCount(locale)}
      />
      <WorksSection
        dict={dict}
        locale={locale}
        works={getFeaturedWorks()}
        projectCount={projectCount}
      />
      <MottoContactSection dict={dict} />
    </>
  )
}
