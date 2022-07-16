
import React, { useRef } from 'react';

import useScript from '../../../hooks/useScript';

function Comments() {
  const comment = useRef(null);

  const status = useScript({
    url: 'https://utteranc.es/client.js',
    theme: 'github-light',
    issueTerm: 'pathname',
    repo: 'f1982/the-den-of-andy-2022',
    ref: comment,
  });

  return (
    <div className="w-full">
      <div ref={comment} />
    </div>
  );
}

export default Comments;