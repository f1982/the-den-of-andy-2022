import { clsx } from 'clsx'
import React, { PropsWithChildren } from 'react'

export default function PageRows(
  props: PropsWithChildren & { withMargin?: boolean },
) {
  return (
    <div
      className={clsx(
        'flex flex-col gap-24 sm:gap-48',
        props.withMargin ? 'mb-24 mt-12 sm:mb-48 sm:mt-24' : '',
      )}>
      {props.children}
    </div>
  )
}
