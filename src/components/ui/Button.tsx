import React from 'react';

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
        <button type="button" className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">{children}</button>
      ) : (
        <button type="button" className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">{children}</button>
      )}
    </>

  );
}

export default Button;
