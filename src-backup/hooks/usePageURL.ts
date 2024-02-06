import { useRouter } from 'next/router'

const usePageURL = () => {
  const router = useRouter()
  return process.env.NEXT_PUBLIC_APP_SITE_URL + router.asPath
}

export default usePageURL
