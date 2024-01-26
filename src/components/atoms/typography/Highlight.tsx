import React from 'react';
import styles from './headline.module.css';

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className={styles.headline}>{children}</span>
);

export default Highlight;
