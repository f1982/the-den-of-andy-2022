import React from 'react';
import cn from 'classnames';
import styles from './close.module.css';

function CloseButton({ onClick }:{onClick:()=>void}) {
  return (
    <button
      aria-label="Close"
      type="button"
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      <div className={cn(styles.close_button)} />
    </button>
  );
}

export default CloseButton;
