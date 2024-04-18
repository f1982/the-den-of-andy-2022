import React from 'react'

const PlatformTag: React.FC<{ text: string }> = ({ text }) => (
  <span
    className="
      right-12 top-3
      rounded-lg
      bg-secondary
      px-2
      py-0.5 text-sm font-semibold
      tracking-widest text-secondary-foreground
    ">
    {text}
  </span>
)

export default PlatformTag
