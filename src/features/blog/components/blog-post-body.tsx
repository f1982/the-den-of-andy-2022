const PostBody = ({ content }) => (
  <article
    className="prose-md prose mx-auto max-w-none dark:prose-invert"
    dangerouslySetInnerHTML={{ __html: content }}
  />
)

export default PostBody
