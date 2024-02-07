'use client'

import { usePathname, useRouter } from 'next/navigation'

const usePageURL = () => {
  const pathname = usePathname()
  console.log('pathname', pathname)
  return process.env.NEXT_PUBLIC_APP_SITE_URL + pathname
}

export default usePageURL
