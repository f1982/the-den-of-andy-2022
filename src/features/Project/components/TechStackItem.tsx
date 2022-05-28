import React from 'react';
import cn from 'classnames';

function TechStackItem(
  {
    stacks,
    className,
  }: {
    stacks: string[],
    className?: string
  },
) {
  return (
    <div className={cn(className)}>
      {stacks.map((item, index) => (
        <span className="px-2 py-1 rounded-lg text-sm border-16 mr-2 bg-secondary-dark" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}

export default TechStackItem;
