import PostPreview from './PostPreview';

export default function MoreStories({ posts }) {
  return (
    <section>

      <div className="
      grid grid-cols-1
      lg:gap-x-32
      md:grid-cols-2
      md:gap-x-16
      md:gap-y-16
      gap-y-20
      mb-16"
      >
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
