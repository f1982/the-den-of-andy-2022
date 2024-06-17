import { notFound } from 'next/navigation'

// https://github.com/vercel/next.js/discussions/50518

export default function CatchAll({ params: { locale } }) {
  notFound()
}
