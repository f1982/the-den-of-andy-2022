import React from 'react';

function TechStackItem(
  {
    stacks,
  }: {
    stacks: string[]
  },
) {
  return (
    <div className="mt-3 mb-6">
      {stacks.map((item, index) => (
        <span className="px-3 py-2 rounded-lg text-sm border-2 mr-2 border-gray-500 bg-gray-200" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}

export default TechStackItem;
