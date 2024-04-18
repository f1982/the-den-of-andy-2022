import { BlogPostData } from '@//types/blog'
import markdownToHtml from '@//utils/markdownToHtml'
import BlogPost from '@/features/blog/components/blog-post'
import { getPostBySlug } from '@/features/blog/utils/blog-helper'
import Comments from '@/lib/comment/utteranc-comments'

/**
 * Get post data by slug
 * @returns
 */
async function getPost(slug: string): Promise<BlogPostData> {
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
  const content = await markdownToHtml(post.content || '')
  return {
    ...post,
    content,
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  // if the slug is not correct url, it will led user to the 404 page
  if (!params.slug) {
    return <h2>error</h2>
  }

  const post = await getPost(params.slug)

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
