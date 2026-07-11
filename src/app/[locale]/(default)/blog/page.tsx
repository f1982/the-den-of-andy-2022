import { Suspense } from 'react'

import { Metadata } from 'next'

import { PageLocaleProp } from '@/types/page'

import { getDictionary } from '@/utils/dictionaries'

import PageHero from '@/components/sections/hero-image'
import PageTitle from '@/components/sections/page-title'
import PageRows from '@/components/shared/page-rows'
import Spinner from '@/components/shared/spinner'

import { getPosts } from '@/features/blog/blog-data'
import BlogPosCards from '@/features/blog/components/blog-post-cards'
import BlogPostList from '@/features/blog/components/blog-post-list'

import { getLocalizedAlternates } from '@/config/i18n'
import { siteMetadata } from '@/config/site-config'

import HeroImage from '@/assets/images/blog-hero-coding.png'

export async function generateMetadata(props: PageLocaleProp): Promise<Metadata> {
  const params = await props.params;

  const {
    locale
  } = params;

  return {
    ...siteMetadata,
    title: 'Blog',
    alternates: {
      ...getLocalizedAlternates(locale, '/blog'),
    },
  }
}

async function PostCards({ locale }: { locale: string }) {
  const posts = await getPosts()
  return (
    <>
      {posts.length > 0 ? (
        <BlogPosCards posts={posts} locale={locale} />
      ) : (
        <div className="text-center">No posts yet</div>
      )}
    </>
  )
}

async function PostList({ locale }: { locale: string }) {
  const posts = await getPosts()
  return (
    <>
      {posts.length > 0 ? (
        <BlogPostList posts={posts} locale={locale} />
      ) : (
        <div className="text-center">No posts yet</div>
      )}
    </>
  )
}

export default async function Page(props: PageLocaleProp) {
  const params = await props.params;

  const {
    locale
  } = params;

  const dict = await getDictionary(locale)

  return (
    <PageRows withMargin>
      <PageHero image={HeroImage} alt="Coding illustration" />
      <div>
        <div className="container">
          <PageTitle title={dict.blog.headline} description={dict.blog.intro} />
        </div>

        <div className="mx-4">
          <Suspense fallback={<Spinner />}>
            <PostCards locale={locale} />
          </Suspense>
        </div>
      </div>

      <div className="container">
        <h2 className="mb-6 text-3xl font-bold">{dict.blog.more}</h2>
        <Suspense fallback={<Spinner />}>
          <PostList locale={locale} />
        </Suspense>
      </div>
    </PageRows>
  )
}
