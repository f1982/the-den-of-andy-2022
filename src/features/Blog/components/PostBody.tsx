// import markdownStyles from './markdown.module.css';
import styles from './markdown.module.css';

function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={styles.markdown}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

export default PostBody;
