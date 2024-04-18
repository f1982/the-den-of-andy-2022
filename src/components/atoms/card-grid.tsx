import clsx from 'clsx'
import { PropsWithChildren } from 'react'

export default function CardGrid(props: PropsWithChildren) {
  return (
    <div
      className={clsx(
        'grid',
        'mx-0',
        'grid-cols-1 md:grid-cols-2 lg:grid-cols-3', //x grid: sm:1 md:2 lg:3
        'gap-x-6 lg:gap-x-5', //x gap: sm:6 md:5 lg:4
        'gap-y-9 lg:gap-y-9', //y gap:
      )}>
      {props.children}
    </div>
  )
}
