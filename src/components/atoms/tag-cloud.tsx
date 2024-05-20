import React from 'react'

import clsx from 'clsx'

// TODO: add new styles for the tags, for example: skill tag and platform tag
interface TagsProps {
  stacks: string[]
  className?: string
}
const Tags: React.FC<TagsProps> = ({ stacks, className }) => (
  <div
    className={clsx('flex flex-row flex-wrap', 'gap-x-2 gap-y-2', className)}>
    {stacks.map((item, index) => (
      <span
        className={clsx(
          'rounded-xl px-3 py-1',
          'text-sm font-semibold',
          'bg-accent text-accent-foreground',
        )}
        key={item}>
        {item}
      </span>
    ))}
  </div>
)

export default Tags
