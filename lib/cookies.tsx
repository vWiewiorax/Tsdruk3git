'use client'

import { Analytics } from '@vercel/analytics/next'
import { useEffect, useState } from 'react'

const CONSENT_KEY = 'tsdruk-cookie-consent'

type ConsentValue = 'accepted' | 'rejected' | null

export default function CookieConsent() {
  const [consent, setConsent] = useState<ConsentValue>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Read stored choice on mount (client only — localStorage doesn't exist during SSR)
    const stored = window.localStorage.getItem(CONSENT_KEY) as ConsentValue
    if (stored === 'accepted' || stored === 'rejected') {
      setConsent(stored)
    } else {
      setVisible(true)
    }
  }, [])

  function handleChoice(choice: 'accepted' | 'rejected') {
    window.localStorage.setItem(CONSENT_KEY, choice)
    setConsent(choice)
    setVisible(false)
  }

  return (
    <div>
      {process.env.NODE_ENV === 'production' && consent === 'accepted' && <Analytics />}
      {visible && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Zgoda na pliki cookie"
          className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-neutral-950/95 px-4 py-4 backdrop-blur sm:px-6"
        >
          <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-neutral-300">
              Używamy plików cookie do analizy ruchu na stronie (Vercel Analytics).
              Dane są zbierane wyłącznie po Twojej zgodzie. Szczegóły znajdziesz w{' '}
              <a href="/polityka-prywatnosci" className="underline hover:text-white">
                polityce prywatności
              </a>
              .
            </p>

            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={() => handleChoice('rejected')}
                className="rounded-lg border border-neutral-700 px-4 py-2 text-sm font-medium text-neutral-300 transition hover:border-neutral-500 hover:text-white"
              >
                Odrzuć
              </button>
              <button
                type="button"
                onClick={() => handleChoice('accepted')}
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Akceptuj
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}