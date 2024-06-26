import { PropsWithChildren } from 'react'

import clsx from 'clsx'

export default function Prose({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return (
    <article
      className={clsx(
        'prose-md prose mb-9 max-w-none dark:prose-invert',
        className,
      )}>
      {children}
    </article>
  )
}
