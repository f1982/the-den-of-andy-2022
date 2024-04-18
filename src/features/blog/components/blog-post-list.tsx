import FormattedDate from '@/components/atoms/formatted-date'
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
        <FormattedDate date={post.date} />
      </li>
    ))}
  </ul>
)

export default BlogPostList
