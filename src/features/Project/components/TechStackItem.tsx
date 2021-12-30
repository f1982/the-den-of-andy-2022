import React from 'react';

function TechStackItem(
  {
    stacks,
  }: {
    stacks: string[]
  },
) {
  return (
    <div className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
      {stacks.map((item, index) => (
        <span key={item}>
          {item}
          {index === stacks.length - 1 ? '' : ', '}
        </span>
      ))}
    </div>
  );
}

export default TechStackItem;
