import { MessageCircleQuestion } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { localizedPath } from '@/utils/locale-path'

export default function NotFound({ params }: { params?: { locale?: string } }) {
  const locale = params?.locale ?? 'en'

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
      <MessageCircleQuestion size={48} />
      <h2 className="text-lg">Oops! Not Found</h2>

      <Link href={localizedPath(locale)}>
        <Button>Home</Button>
      </Link>
    </div>
  )
}
