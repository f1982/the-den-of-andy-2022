import cn from 'classnames'
import React from 'react'

// TODO: add new styles for the tags, for example: skill tag and platform tag
interface TagsProps {
  type?: 'tech' | 'platform' | 'skill'
  stacks: string[]
  className?: string
}
const Tags: React.FC<TagsProps> = ({ type = 'tech', stacks, className }) => (
  <div className={cn('flex flex-row flex-wrap', 'gap-y-2 gap-x-2', className)}>
    {stacks.map((item, index) => (
      <span
        className={cn(
          'px-2 py-0.5 rounded-lg',
          'text-sm',
          'text-on-surface bg-primary-dark'
        )}
        key={item}>
        {item}
      </span>
    ))}
  </div>
)

export default Tags
