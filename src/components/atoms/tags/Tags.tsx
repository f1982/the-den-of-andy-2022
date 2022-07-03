import React from 'react';
import cn from 'classnames';

function Tags(
  {
    type = 'tech',
    stacks,
    className,
  }: {
    type?: 'tech' | 'platform' | 'skill'
    stacks: string[],
    className?: string
  },
) {
  return (
    <div className={cn(
      'flex flex-row flex-wrap',
      'gap-y-2 gap-x-2',
      className,
    )}
    >
      {stacks.map((item, index) => (
        <span
          className={cn(
            'px-2 py-0.5 rounded-lg',
            'text-sm',
            'text-on-surface bg-primary-dark',
          )}
          key={item}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default Tags;
