import clsx from 'clsx'
import React from 'react'

// TODO: add new styles for the tags, for example: skill tag and platform tag
interface TagsProps {
  type?: 'tech' | 'platform' | 'skill'
  stacks: string[]
  className?: string
}
const Tags: React.FC<TagsProps> = ({ type = 'tech', stacks, className }) => (
  <div
    className={clsx('flex flex-row flex-wrap', 'gap-x-2 gap-y-2', className)}>
    {stacks.map((item, index) => (
      <span
        className={clsx(
          'rounded-lg px-2 py-0.5',
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
