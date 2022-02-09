import React from 'react';
import classNames from 'classnames';

interface PropsType {
  type:'primary'|'secondary';
  children: React.ReactNode;
  onClick?: ()=>void;
  href?:string;
}
// `onClick`, `href`, and `ref` need to be passed to the DOM element
// for proper handling
const MyButton = React.forwardRef<HTMLAnchorElement, PropsType>((props:PropsType, ref) => (
  <a href={props.href} onClick={props.onClick} ref={ref}>
    {props.type === 'primary' ? (
      <button
        type="button"
        className="
          inline-flex
          text-on-primary
          hover:text-black
          bg-primary-medium
          hover:bg-primary-light
          border-0
          py-2
          px-6
          focus:outline-none
          rounded
          text-lg
        "
      >
        {props.children}
      </button>
    ) : (
      <button
        type="button"
        className="
          ml-4
          inline-flex
          text-on-secondary
          hover:text-black
          bg-secondary-dark
          hover:bg-secondary-light
          border-0
          py-2
          px-6
          focus:outline-none
          rounded
          text-lg
        "
      >
        {props.children}
      </button>
    )}
  </a>
));
MyButton.displayName = 'MyButton';
MyButton.defaultProps = {
  onClick: null,
  href: null,
};
export default MyButton;
