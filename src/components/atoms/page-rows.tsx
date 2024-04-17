import { clsx } from 'clsx'
import React, { PropsWithChildren } from 'react'

export default function PageRows(
  props: PropsWithChildren & { withMargin?: boolean },
) {
  return (
    <div
      className={clsx(
        'flex flex-col gap-24 sm:gap-48',
        props.withMargin ? 'my-24 sm:my-48' : '',
      )}>
      {props.children}
    </div>
  )
}
