import { HOME_OG_IMAGE_URL } from '../../../constants/paths'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Metadata = () => {
  const { basePath } = useRouter()
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${basePath}/favicons/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${basePath}/favicons/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${basePath}/favicons/favicon-16x16.png`}
      />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href={`${basePath}/favicons/safari-pinned-tab.svg`}
        color="#000000"
      />
      <link rel="icon" href={`${basePath}/favicons/favicon.ico`} />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta
        name="msapplication-config"
        content={`${basePath}/favicons/browserconfig.xml`}
      />
      <meta name="theme-color" content="#000" />
      <link
        rel="alternate"
        type="application/rss+xml"
        href={`${basePath}/feed.xml`}
      />
      <meta
        name="description"
        content="A statically generated blog example using Next.js"
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  )
}

export default Metadata
