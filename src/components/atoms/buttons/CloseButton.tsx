import React from 'react';
import cn from 'classnames';
import styles from './close.module.css';

const CloseButton = ({ size = 'md', onClick }: { size?: 'md' | 'sm'; onClick: () => void }) => (
  <button
    aria-label="Close"
    type="button"
    onClick={() => {
      if (onClick) {
        onClick();
      }
    }}
  >
    <div className={cn(styles.close_button, size === 'sm' ? styles.close_button_small : '')} />
  </button>
);

export default CloseButton;
