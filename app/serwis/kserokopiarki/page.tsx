import type { Metadata } from 'next'
import SerwisLanding from '@/components/serwis/SerwisLanding'
import { SERWIS_KSEROKOPIARKI } from '@/lib/serwis'

export const metadata: Metadata = {
  title: SERWIS_KSEROKOPIARKI.metaTitle,
  description: SERWIS_KSEROKOPIARKI.metaDescription,
  alternates: { canonical: 'https://www.tsdruk.pl/serwis/kserokopiarki' },
}

export default function SerwisKserokopiarekPage() {
  return <SerwisLanding config={SERWIS_KSEROKOPIARKI} />
}
