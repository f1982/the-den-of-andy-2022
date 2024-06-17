import { MessageCircleQuestion } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
      <MessageCircleQuestion size={48} />
      <h2 className="text-lg">Oops! Not Found</h2>

      <Link href="/">
        <Button>Home</Button>
      </Link>
    </div>
  )
}
