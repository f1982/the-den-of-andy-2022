import Link from 'next/link';

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-6xl font-bold tracking-tighter leading-tight">
        More More Stories
      </h2>
      <ul>
        {posts.map((post) => (
          <Link key={post.plug} as={`/post/${post.slug}`} href="/post/[slug]" passHref>
            <li className="cursor-pointer hover:underline">{post.title}</li>
          </Link>
        ))}
      </ul>
    </section>
  );
}
