'use client'

import React, { useRef } from 'react'

import useScript from '@/lib/hooks/useScript'

const Comments: React.FC = () => {
  const comment = useRef(null)

  useScript({
    url: 'https://utteranc.es/client.js',
    theme: 'github-light',
    issueTerm: 'pathname',
    repo: 'f1982/the-den-of-andy-2022',
    ref: comment,
  })

  return <div ref={comment} />
}

export default Comments
