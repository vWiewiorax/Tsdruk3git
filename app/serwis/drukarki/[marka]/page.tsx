import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BrandPage from '@/components/serwis/BrandPage'
import { PRINTER_BRANDS } from '@/lib/serwis'

export const dynamicParams = false

export function generateStaticParams() {
  return PRINTER_BRANDS.map((b) => ({ marka: b.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<'/serwis/drukarki/[marka]'>): Promise<Metadata> {
  const { marka } = await params
  const brand = PRINTER_BRANDS.find((b) => b.slug === marka)
  if (!brand) return {}
  return {
    title: `Serwis drukarek ${brand.name} — naprawa i konserwacja`,
    description: `Profesjonalny serwis drukarek ${brand.name}: naprawy gwarancyjne i pogwarancyjne, bezpłatna diagnostyka, części zamienne, dojazd do klienta. Łańcut, Rzeszów i całe Podkarpacie.`,
    alternates: { canonical: `https://www.tsdruk.pl/serwis/drukarki/${brand.slug}` },
  }
}

export default async function Page({ params }: PageProps<'/serwis/drukarki/[marka]'>) {
  const { marka } = await params
  const brand = PRINTER_BRANDS.find((b) => b.slug === marka)
  if (!brand) notFound()
  return <BrandPage kind="drukarki" brand={brand} />
}
