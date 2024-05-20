'use client'

import { ChangeEvent, ReactNode, useTransition } from 'react'

import clsx from 'clsx'

import { usePathname, useRouter } from './navigation'

type Props = {
  children: ReactNode
  defaultValue: string
  label: string
}

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale })
    })
  }

  return (
    <div className="flex flex-row items-center">
      <label
        className={clsx(
          isPending && 'transition-opacity [&:disabled]:opacity-30',
        )}>
        <p className="sr-only">{label}</p>
      </label>
      <select
        className="inline-flex appearance-none bg-transparent"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}>
        {children}
      </select>
      <span className="pointer-events-none">▿</span>
    </div>
  )
}
