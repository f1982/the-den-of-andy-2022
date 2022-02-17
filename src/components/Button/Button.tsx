import React from 'react';
import cn from 'classnames';
import styles from './bubble.module.css';

interface PropsType {
  type?:'primary'|'secondary';
  children: React.ReactNode;
  onClick?: ()=>void;
  href?:string;
}
// `onClick`, `href`, and `ref` need to be passed to the DOM element
// for proper handling
const MyButton = React.forwardRef<HTMLAnchorElement, PropsType>((props:PropsType, ref) => {
  function getStyle(type:string):string {
    const buttonStyle = cn(
      'focus:outline-none',
      'inline-flex',
      'items-center',
      'border-0',
      'rounded',
      'py-2',
      'px-6',
      'text-on-primary',
      'bg-primary-medium',
      'transition ease-in-out delay-100',
      'hover:text-black',
      'hover:bg-primary-light',
      'hover:-translate-y-1',
      'hover:scale-105',
      styles.button_bubble,
    );
    if (type === 'primary') {
      return cn(
        buttonStyle,
        'text-on-primary',
        'hover:text-black',
        'bg-primary-medium',
        'hover:bg-primary-light',
      );
    }
    return cn(
      buttonStyle,
      'text-on-secondary',
      'hover:text-black',
      'bg-secondary-dark',
      'hover:bg-secondary-light',
    );
  }

  return (
    <a href={props.href} onClick={props.onClick} ref={ref}>
      <button
        type="button"
        className={getStyle(props.type)}
      >
        {props.children}
      </button>
    </a>
  );
});

MyButton.displayName = 'MyButton';
MyButton.defaultProps = {
  onClick: null,
  href: null,
};

export default MyButton;