'use client'

import { useEffect, useState } from 'react'

import { useIsMounted } from 'usehooks-ts'

import { GoogleAnalyticsID, siteHostname } from '../config/site-config'
import { GoogleAnalytics } from '../utils/google-analytics'

type AnalyticsConsentLabels = {
  title: string
  description: string
  accept: string
  decline: string
  privacy: string
  manage: string
}

export const AnalyticSettings = ({
  labels,
  privacyHref,
}: {
  labels: AnalyticsConsentLabels
  privacyHref: string
}) => {
  const [consent, setConsent] = useState<'unknown' | 'granted' | 'denied'>('unknown')
  const [isDebugging, setIsDebugging] = useState(false)
  const isMounted = useIsMounted()
  const getDebugFlag = () => {
    return window.location.hostname !== siteHostname
  }
  useEffect(() => {
    if (isMounted()) {
      setIsDebugging(getDebugFlag())
      const storedConsent = window.localStorage.getItem('analytics-consent')
      if (storedConsent === 'granted' || storedConsent === 'denied') {
        setConsent(storedConsent)
      }
    }
  }, [isMounted])

  const saveConsent = (value: 'granted' | 'denied') => {
    window.localStorage.setItem('analytics-consent', value)
    setConsent(value)
  }

  return (
    <>
      {consent === 'granted' && (
        <GoogleAnalytics gaId={GoogleAnalyticsID} debugMode={isDebugging} />
      )}
      {consent === 'unknown' && (
        <aside
          aria-label={labels.title}
          className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl rounded-lg border border-border bg-background p-4 shadow-lg">
          <h2 className="font-semibold">{labels.title}</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {labels.description}{' '}
            <a className="underline" href={privacyHref}>
              {labels.privacy}
            </a>
          </p>
          <div className="mt-3 flex gap-3">
            <button
              type="button"
              className="rounded bg-primary px-3 py-2 text-sm text-primary-foreground"
              onClick={() => saveConsent('granted')}>
              {labels.accept}
            </button>
            <button
              type="button"
              className="rounded border border-border px-3 py-2 text-sm"
              onClick={() => saveConsent('denied')}>
              {labels.decline}
            </button>
          </div>
        </aside>
      )}
      {consent !== 'unknown' && (
        <button
          type="button"
          className="fixed bottom-4 right-4 z-40 rounded border border-border bg-background px-3 py-2 text-xs shadow"
          onClick={() => setConsent('unknown')}>
          {labels.manage}
        </button>
      )}
    </>
  )
}
