'use client'

import { useState, useSyncExternalStore } from 'react'

import { Settings2 } from 'lucide-react'

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

type Consent = 'unknown' | 'granted' | 'denied'

const CONSENT_KEY = 'analytics-consent'
const consentListeners = new Set<() => void>()

function subscribeConsent(listener: () => void) {
  consentListeners.add(listener)
  return () => consentListeners.delete(listener)
}

function readConsent(): Consent {
  try {
    const stored = window.localStorage.getItem(CONSENT_KEY)
    return stored === 'granted' || stored === 'denied' ? stored : 'unknown'
  } catch {
    return 'unknown'
  }
}

// Nothing is rendered on the server or during hydration: the stored choice is
// only known in the browser, so returning visitors never see the banner flash.
const readServerConsent = () => null

export const AnalyticSettings = ({
  labels,
  privacyHref,
}: {
  labels: AnalyticsConsentLabels
  privacyHref: string
}) => {
  const storedConsent = useSyncExternalStore(
    subscribeConsent,
    readConsent,
    readServerConsent,
  )
  const [isManaging, setIsManaging] = useState(false)

  if (storedConsent === null) return null

  const consent: Consent = isManaging ? 'unknown' : storedConsent
  const isDebugging = window.location.hostname !== siteHostname

  const saveConsent = (value: 'granted' | 'denied') => {
    window.localStorage.setItem(CONSENT_KEY, value)
    consentListeners.forEach((listener) => listener())
    setIsManaging(false)
  }

  return (
    <>
      {storedConsent === 'granted' && (
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
          aria-label={labels.manage}
          title={labels.manage}
          className="fixed bottom-4 right-4 z-40 rounded-full border border-border bg-background p-2 text-muted-foreground shadow-sm transition-colors hover:bg-muted hover:text-foreground"
          onClick={() => setIsManaging(true)}>
          <Settings2 size={16} aria-hidden="true" />
        </button>
      )}
    </>
  )
}
