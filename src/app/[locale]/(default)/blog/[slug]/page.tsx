import markdownToHtml from '@//utils/markdownToHtml'
import { getAllPosts, getPostBySlug } from '@/features/blog/blog-data'
import { BlogPostData } from '@/features/blog/blog-types'
import BlogPost from '@/features/blog/components/blog-post'
import Comments from '@/lib/comment/utteranc-comments'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])
  const slugs = posts.map((item) => {
    return {
      slug: item.slug,
    }
  })
  return slugs
}

/**
 * Get post data by slug
 * @returns
 */
async function getPost(slug: string): Promise<BlogPostData | null> {
  const fields = [
    'title',
    'date',
    'excerpt',
    'slug',
    'author',
    'keywords',
    'content',
    'ogImage',
    'coverImage',
  ]
  const post = getPostBySlug(slug, fields)
  if (!post) {
    return null
  }
  const content = await markdownToHtml(post.content || '')
  return {
    ...post,
    content,
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  if (!post) {
    return notFound()
  }

  const handleClose = () => {
    // router.push('/blog')
  }

  // Trim spaces at the beginning and end of the keyword
  const parseKeywords = (keywords) =>
    keywords.split(',').map((keyword) => keyword.trim())

  return (
    <>
      {/* TODO: add JSON-LD support, https://jsonld.com/blog-post/ */}
      <div className="container mx-auto mt-3 flex">
        <div className="flex-1" />
        {/* <CloseButton onClick={handleClose} /> */}
      </div>
      <BlogPost {...post} />
      <Comments />
    </>
  )
}
