'use client'

import React, { useRef, useState } from 'react'

import useScript from '@/lib/hooks/useScript'

const CommentsEmbed: React.FC = () => {
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

const Comments: React.FC<{
  labels: { open: string; description: string }
}> = ({ labels }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="container mx-auto max-w-3xl" aria-label={labels.open}>
      {!isOpen ? (
        <div className="rounded-lg border border-border p-6 text-center">
          <p className="mb-4 text-sm text-muted-foreground">{labels.description}</p>
          <button
            type="button"
            className="rounded bg-primary px-4 py-2 text-sm text-primary-foreground"
            onClick={() => setIsOpen(true)}>
            {labels.open}
          </button>
        </div>
      ) : (
        <CommentsEmbed />
      )}
    </section>
  )
}

export default Comments
