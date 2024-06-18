import { Suspense } from 'react'

import { Metadata } from 'next'

import { PageLocaleProp } from '@/types/page'

import { getDictionary } from '@/utils/dictionaries'

import PageRows from '@/components/atoms/page-rows'
import Spinner from '@/components/atoms/spinner'
import PageHero from '@/components/page/hero-image'
import PageTitle from '@/components/page/page-title'

import { getPosts } from '@/features/blog/blog-data'
import BlogPosCards from '@/features/blog/components/blog-post-cards'
import BlogPostList from '@/features/blog/components/blog-post-list'

import { getLocalPrefix } from '@/config/i18n'
import { siteMetadata } from '@/config/site-config'

import HeroImage from '@/assets/images/blog-hero-coding.png'

export async function generateMetadata({
  params: { locale },
}: PageLocaleProp): Promise<Metadata> {
  return {
    ...siteMetadata,
    title: 'Blog',
    alternates: {
      canonical: getLocalPrefix(locale) + '/blog',
    },
  }
}

async function PostCards() {
  const posts = await getPosts()
  return (
    <>
      {posts.length > 0 ? (
        <BlogPosCards posts={posts} />
      ) : (
        <div className="text-center">No posts yet</div>
      )}
    </>
  )
}

async function PostList() {
  const posts = await getPosts()
  return (
    <>
      {posts.length > 0 ? (
        <BlogPostList posts={posts} />
      ) : (
        <div className="text-center">No posts yet</div>
      )}
    </>
  )
}

export default async function Page({ params: { locale } }: PageLocaleProp) {
  const dict = await getDictionary(locale)

  return (
    <PageRows withMargin>
      <PageHero image={HeroImage} />
      <div>
        <div className="container">
          <PageTitle title={dict.blog.headline} description={dict.blog.intro} />
        </div>

        <div className="mx-4">
          <Suspense fallback={<Spinner />}>
            <PostCards />
          </Suspense>
        </div>
      </div>

      <div className="container">
        <h2 className="mb-6 text-3xl font-bold">{dict.blog.more}</h2>
        <Suspense fallback={<Spinner />}>
          <PostList />
        </Suspense>
      </div>
    </PageRows>
  )
}
