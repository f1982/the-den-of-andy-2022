import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apps | The Den of Andy',
  description: 'Apps created by Andy Cao.',
  robots: { index: false, follow: false },
}

export default function pages() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      this is the page for apps
    </div>
  )
}
