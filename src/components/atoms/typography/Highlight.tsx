import styles from './headline.module.css'
import React from 'react'

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className={styles.headline}>{children}</span>
)

export default Highlight
