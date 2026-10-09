import React from 'react'

import { Squiggle } from './hand-drawn'
import { Highlight } from './marks'

// `*italic*`, `==highlight==`, `~~squiggle~~` (no nesting).
const TOKEN = /(\*[^*\n]+\*|==[^=\n]+==|~~[^~\n]+~~)/g

function renderLine(line: string, emClassName?: string) {
  return line.split(TOKEN).map((part, i) => {
    if (!part) return null
    if (part.length > 2 && part.startsWith('*') && part.endsWith('*')) {
      return (
        <em key={i} className={emClassName}>
          {part.slice(1, -1)}
        </em>
      )
    }
    if (part.length > 4 && part.startsWith('==') && part.endsWith('==')) {
      return <Highlight key={i}>{part.slice(2, -2)}</Highlight>
    }
    if (part.length > 4 && part.startsWith('~~') && part.endsWith('~~')) {
      return <Squiggle key={i}>{part.slice(2, -2)}</Squiggle>
    }
    return <React.Fragment key={i}>{part}</React.Fragment>
  })
}

/**
 * Render a dictionary string with the Den's inline marks:
 * `*italic swap*`, `==highlighter==`, `~~squiggle underline~~`, and `\n` as a
 * line break. Returns inline content; wrap it in your own heading/paragraph.
 */
export function RichText({
  text,
  emClassName,
}: {
  text: string
  emClassName?: string
}) {
  const lines = text.split('\n')
  return (
    <>
      {lines.map((line, i) => (
        <React.Fragment key={i}>
          {i > 0 && <br />}
          {renderLine(line, emClassName)}
        </React.Fragment>
      ))}
    </>
  )
}
