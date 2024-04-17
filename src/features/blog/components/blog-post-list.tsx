import parseDate from '@/features/about/utils/date.utils'
import Link from 'next/link'

const BlogPostList = ({ posts }) => (
  <ul>
    {posts.map((post) => (
      <li
        key={`list_${post.slug}`}
        className="mb-6 flex cursor-pointer flex-row justify-between border-b border-b-border py-3 hover:underline">
        <Link
          as={`/blog/${post.slug}`}
          href="/blog/[slug]"
          passHref
          legacyBehavior>
          {post.title}
        </Link>
        <span className="text-right text-xs">{parseDate(post.date)}</span>
      </li>
    ))}
  </ul>
)

export default BlogPostList
