import { PropsWithChildren } from 'react'

export default function Prose({ children }: PropsWithChildren) {
  return (
    <article className="prose-md prose mb-9 max-w-none dark:prose-invert">
      {children}
    </article>
  )
}
