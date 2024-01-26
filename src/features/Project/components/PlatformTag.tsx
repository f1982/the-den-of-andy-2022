import React from 'react';

const PlatformTag: React.FC<{ text: string }> = ({ text }) => (
  <span
    className="
      top-3 right-12
      bg-secondary-dark
      font-bold
      text-on-surface
      px-2 py-0.5 rounded-lg
      tracking-widest text-sm
    "
  >
    {text}
  </span>
);

export default PlatformTag;
