import PageHero from '../../../src/components/page/PageHero'
import { BlogPostData } from '../../../src/types/blog'
import Typography from '../../components/atoms/typography/Typography'
import TabTitle from '../../components/molecules/seo/SiteSEO'
import PageTitle from '../../components/organisms/blocks/PageTitle'
import MoreStories from '../../features/Blog/MoreStories'
import { getAllPosts } from '../../features/Blog/blog-helper'
import MoreMoreStories from '../../features/Blog/components/MoreMoreStories'
import { t } from 'i18next'
import React from 'react'

interface BlogProps {
  allPosts: BlogPostData[]
}

const Blog: React.FC<BlogProps> = ({ allPosts }) => {
  const morePosts = allPosts

  return (
    <>
      <TabTitle pageTitle={t('blog.pageTitle')} />
      <PageHero image="/static/images/page-hero-typewriter.png" />
      <div className="container mx-auto">
        {/* title and intro */}
        <PageTitle title={t('blog.headline')} description={t('blog.intro')} />
        {/* blog posts */}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        <Typography variant="h1" as="h1" highlight>
          {t('blog.more')}
        </Typography>
        {morePosts.length > 0 && <MoreMoreStories posts={morePosts} />}
      </div>
    </>
  )
}

export default Blog

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt'
  ])

  return {
    props: { allPosts }
  }
}
