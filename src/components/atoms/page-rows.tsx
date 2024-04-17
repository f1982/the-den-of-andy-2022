import React, { PropsWithChildren } from 'react'

export default function PageRows(props: PropsWithChildren & { gap?: number }) {
  return <div className="flex flex-col gap-24 sm:gap-48">{props.children}</div>
}
