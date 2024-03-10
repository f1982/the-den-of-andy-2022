import React from 'react'

const PlatformTag: React.FC<{ text: string }> = ({ text }) => (
  <span
    className="
      bg-secondary-dark text-on-surface
      right-12
      top-3
      rounded-lg
      px-2 py-0.5 text-sm
      font-bold tracking-widest
    ">
    {text}
  </span>
)

export default PlatformTag
