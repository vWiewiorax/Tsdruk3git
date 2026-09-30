import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BrandPage from '@/components/serwis/BrandPage'
import { COPIER_BRANDS } from '@/lib/serwis'

export const dynamicParams = false

export function generateStaticParams() {
  return COPIER_BRANDS.map((b) => ({ marka: b.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<'/serwis/kserokopiarki/[marka]'>): Promise<Metadata> {
  const { marka } = await params
  const brand = COPIER_BRANDS.find((b) => b.slug === marka)
  if (!brand) return {}
  return {
    title: `Serwis kserokopiarek ${brand.name}, naprawa i konserwacja`,
    description: `Profesjonalny pogwarancyjny serwis kserokopiarek ${brand.name}: naprawy, konserwacje, regulacja podzespołów. Łańcut, Rzeszów i całe Podkarpacie.`,
    alternates: { canonical: `https://www.tsdruk.pl/serwis/kserokopiarki/${brand.slug}` },
  }
}

export default async function Page({ params }: PageProps<'/serwis/kserokopiarki/[marka]'>) {
  const { marka } = await params
  const brand = COPIER_BRANDS.find((b) => b.slug === marka)
  if (!brand) notFound()
  return <BrandPage kind="kserokopiarki" brand={brand} />
}
