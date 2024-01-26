import styles from './markdown.module.css';

const PostBody = ({ content }) => (
  <div className="container mx-auto">
    <div
      className={styles.markdown}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </div>
);

export default PostBody;
