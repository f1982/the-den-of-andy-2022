import markdownToHtml from '../../../../../lib/markdownToHtml'
import { BlogPostData } from '../../../../../types/blog'
import BlogPost from '../_lib/BlogPost'
import { getPostBySlug } from '../_lib/blog-helper'

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
  // const router = useRouter()
  // const pageURL = usePageURL()

  // if the slug is not correct url, it will led user to the 404 page
  if (!params.slug) {
    return <h2>error</h2>
  }

  const post = await getPost(params.slug)
  console.log('post', post)

  const handleClose = () => {
    // router.push('/blog')
  }

  // Trim spaces at the beginning and end of the keyword
  const parseKeywords = (keywords) =>
    keywords.split(',').map((keyword) => keyword.trim())

  return (
    <>
      {/* <NextSeo
        title={post.title}
        additionalMetaTags={[
          { name: 'keywords', content: post.keywords } // keywords metadata
        ]}
        openGraph={{
          title: post.title,
          description: post.excerpt,
          // url: pageURL,
          type: 'article',
          article: {
            publishedTime: post.date,
            authors: [post.author.name],
            tags: parseKeywords(post.keywords)
          },
          images: [
            {
              url: post.coverImage,
              width: 850,
              height: 650,
              alt: `Photo of ${post.title}`
            }
          ]
        }}
      /> */}
      {/* TODO: add JSON-LD support, https://jsonld.com/blog-post/ */}
      <div className="container mx-auto mt-3 flex">
        <div className="flex-1" />
        {/* <CloseButton onClick={handleClose} /> */}
      </div>
      <article className="mb-32">
        <BlogPost {...post} />
      </article>
    </>
  )
}

// getStaticPaths will define a list of paths to be statically generated
// https://nextjs.org/docs/basic-features/data-fetching/get-static-paths
// this is not true
// export async function getStaticPaths(context) {
//   const posts = getAllPosts(['slug'])
//   return {
//     paths: posts.map((post) => ({
//       params: {
//         slug: post.slug
//       }
//     })),
//     fallback: false
//   }
// }
