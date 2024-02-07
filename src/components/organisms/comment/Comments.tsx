'use client'

import useScript from '../../../../src-backup/hooks/useScript'
import React, { useRef } from 'react'

const Comments: React.FC = () => {
  const comment = useRef(null)

  useScript({
    url: 'https://utteranc.es/client.js',
    theme: 'github-light',
    issueTerm: 'pathname',
    repo: 'f1982/the-den-of-andy-2022',
    ref: comment
  })

  return (
    <div className="w-full">
      <div ref={comment} />
    </div>
  )
}

export default Comments
