'use client'

import Script from 'next/script'

export const GoogleAnalytics = ({
  gaId,
  debugMode = false,
}: {
  gaId: string
  debugMode?: boolean
}) => {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
   
            gtag('config', '${gaId}'${
              debugMode ? `, { debug_mode: true }` : ''
            })
        `}
      </Script>
    </>
  )
}
