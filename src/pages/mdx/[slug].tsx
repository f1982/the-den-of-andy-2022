import { unified } from 'unified';
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import html from 'rehype-stringify';

const Post = ({ post }) => (
  <div>
    test:
    {post.slug}

    <div
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: post.text }}
    />
  </div>
);

Post.getLayout = function getLayout(page) {
  return (
    <div>
      {page}
    </div>
  );
};

// this is not true
export async function getStaticPaths() {
  console.log('getStaticPaths', ['slug']);

  return {
    paths: [{
      params: {
        slug: '111',
      },
    }, {
      params: {
        slug: '222',
      },
    }],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log('getStaticProps params: ', params);
  const mdText = `
# Our Project

## My productive WFH setup introduction and desk tour of 2022

Hello, **Markdown**!

Last year, I was WFH for most of time, that made me to reconsider my desktop setups and working environment at home. I did some research, DIY some gadgets, bought some LED strips, two monitors, monitor stands, mechanical keyboard and new mouse. Iteratively to change the layout and reorganize the cables. It was a such great time to rethinking how the setups and arrangements can affect my daily work and productivity.


`;

  const htmlText = await unified()
    .use(markdown)
    .use(remark2rehype)
    .use(html)
    .processSync(mdText);
  console.log('htmlText', htmlText);

  return {
    props: {
      post: {
        slug: params.slug,
        text: htmlText.toString(),
      },
    },
  };
}

export default Post;