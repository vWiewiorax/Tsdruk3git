import type { Metadata } from 'next'
import SerwisLanding from '@/components/serwis/SerwisLanding'
import { SERWIS_DRUKARKI } from '@/lib/serwis'

export const metadata: Metadata = {
  title: SERWIS_DRUKARKI.metaTitle,
  description: SERWIS_DRUKARKI.metaDescription,
  alternates: { canonical: 'https://www.tsdruk.pl/serwis/drukarki' },
}

export default function SerwisDrukarekPage() {
  return <SerwisLanding config={SERWIS_DRUKARKI} />
}
