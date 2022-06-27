import React from 'react';
import cn from 'classnames';
import styles from './button.module.css';

interface ButtonPropsType {
  type?: 'primary' | 'secondary';
  children: React.ReactNode | string;
  onClick?: () => void;
  className?: string;
}
// for proper handling
const Button = React.forwardRef<
  HTMLButtonElement, ButtonPropsType
>((props: ButtonPropsType, ref) => {
  function getStyle(type: string): string {
    const buttonStyle = cn(
      'focus:outline-none',
      'inline-flex',
      'items-center',
      'border-0',
      'rounded',
      'py-2',
      'px-6',
      'transition ease-in-out delay-100',
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
        'hover:bg-primary-dark',
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
    <button
      ref={ref}
      onClick={props.onClick}
      type="button"
      className={cn(getStyle(props.type), props.className)}
    >
      {props.children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
