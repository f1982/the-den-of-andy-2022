import React from 'react';
import styles from './headline.module.css';

function Highlight({ children }:{children:React.ReactNode}) {
  return (
    <span className={styles.headline}>
      {children}
    </span>
  );
}

export default Highlight;
