import React from 'react';
import classNames from 'classnames';

function Button(
  {
    type = 'primary',
    children,
  }
  :
  {
    type:'primary'|'secondary',
    children: React.ReactNode
  },
) {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {type === 'primary' ? (
        <button
          type="button"
          className={classNames(
            'inline-flex',
            'text-white',
            'bg-blue-500',
            'border-0',
            'py-2',
            'px-6',
            'focus:outline-none',
            'hover:bg-blue-600',
            'rounded',
            'text-lg',
          )}
        >
          {children}

        </button>
      ) : (
        <button
          type="button"
          className={classNames(
            'ml-4',
            'inline-flex',
            'text-gray-700',
            'bg-gray-100',
            'border-0',
            'py-2',
            'px-6',
            'focus:outline-none',
            'hover:bg-gray-200',
            'rounded',
            'text-lg',
          )}
        >
          {children}

        </button>
      )}
    </>

  );
}

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
          text-primary-medium
          hover:text-primary-dark
          bg-secondary-medium
          hover:bg-accent-light
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
          text-th-primary-medium
          hover:text-th-primary-dark
          bg-secondary-medium
          hover:bg-accent-light
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
