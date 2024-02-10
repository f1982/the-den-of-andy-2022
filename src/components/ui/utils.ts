import clsx, { ClassValue } from 'clsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'

export function getValidChildren(children: React.ReactNode) {
  return React.Children.toArray(children).filter((child) =>
    React.isValidElement(child),
  ) as React.ReactElement[]
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
