import { notFound } from 'next/navigation'

// https://github.com/vercel/next.js/discussions/50518

export default async function CatchAll(props) {
  const params = await props.params;

  const {
    locale
  } = params;

  notFound()
}
