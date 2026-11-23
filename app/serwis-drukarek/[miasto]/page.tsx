import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CheckCircle, Clock, Mail, MapPin, Phone, Wrench } from 'lucide-react'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import {
  ADDRESS,
  BRANDS,
  CITY_PAGES,
  EMAIL,
  HOURS_SATURDAY,
  HOURS_WEEKDAY,
  PHONE,
  SERVICE_BASE,
  SITE_URL,
} from '@/lib/site'

export const dynamicParams = false

export function generateStaticParams() {
  return CITY_PAGES.map((c) => ({ miasto: c.slug }))
}

type Params = { params: Promise<{ miasto: string }> }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { miasto } = await params
  const city = CITY_PAGES.find((c) => c.slug === miasto)
  if (!city) return {}
  return {
    title: `Serwis drukarek ${city.name} | Naprawa drukarek i kserokopiarek ${city.name}`,
    description: `Serwis drukarek ${city.name} – naprawa drukarek atramentowych i laserowych, kserokopiarek i urządzeń wielofunkcyjnych. Dojazd do ${city.gen}, bezpłatna diagnostyka i wycena przed naprawą. HP, Canon, Epson, Brother.`,
    alternates: { canonical: `/serwis-drukarek/${city.slug}` },
    openGraph: {
      title: `Serwis drukarek ${city.name} | TSdruk`,
      description: `Naprawa drukarek i kserokopiarek dla klientów z ${city.gen}. Bezpłatna diagnostyka, dojazd po uzgodnieniu, gwarancja na naprawę.`,
      url: `/serwis-drukarek/${city.slug}`,
    },
  }
}

export default async function CityPage({ params }: Params) {
  const { miasto } = await params
  const city = CITY_PAGES.find((c) => c.slug === miasto)
  if (!city) notFound()

  const others = CITY_PAGES.filter((c) => c.slug !== city.slug)

  const steps = [
    {
      title: 'Zgłoszenie',
      text: `Dzwonisz lub wysyłasz formularz z opisem usterki. Obsługuję klientów z ${city.gen} i okolic.`,
    },
    {
      title: 'Odbiór lub dostawa',
      text: `Drukarkę możesz przywieźć do serwisu (${SERVICE_BASE}) albo umówić odbiór sprzętu w ${city.loc}.`,
    },
    {
      title: 'Diagnostyka i wycena',
      text: 'Diagnozuję usterkę i podaję konkretną cenę naprawy. Naprawiam dopiero po Twojej akceptacji.',
    },
    {
      title: 'Naprawa z gwarancją',
      text: 'Po naprawie testuję urządzenie i oddaję je sprawne. Na każdą naprawę udzielam własnej gwarancji.',
    },
  ]

  const faq = [
    {
      q: `Czy dojeżdżasz do klienta w ${city.loc}?`,
      a: `Tak, po wcześniejszym uzgodnieniu odbieram drukarkę z adresu w ${city.loc}, naprawiam ją w serwisie i odwożę sprawne. Dojazd kosztuje od 30 zł.`,
    },
    {
      q: `Ile kosztuje naprawa drukarki w ${city.loc}?`,
      a: 'Diagnostyka i wycena są bezpłatne. Naprawa drukarki atramentowej zaczyna się od 80 zł, a laserowej od 120 zł – konkretną cenę poznasz przed naprawą.',
    },
    {
      q: 'Jakie marki naprawiasz?',
      a: `Naprawiam drukarki i kserokopiarki wszystkich popularnych marek, m.in. ${BRANDS.join(', ')}.`,
    },
    {
      q: 'Jak długo trwa naprawa?',
      a: 'Wiele usterek usuwam w ciągu 24 godzin. Jeśli potrzebna jest część zamienna, informuję o czasie realizacji przy wycenie.',
    },
  ]

  const faults = [
    'Zacięcia papieru i uszkodzone podajniki',
    'Zaschnięte głowice i słaba jakość wydruku',
    'Wymiana bębna, wałka i kaset z tonerem',
    'Wymiana tuszy, uszczelek i elementów eksploatacyjnych',
    'Problemy z Wi-Fi i sterownikami',
    'Czyszczenie i przegląd prewencyjny',
  ]

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `Serwis drukarek ${city.name}`,
      serviceType: 'Pogwarancyjna naprawa drukarek i kserokopiarek',
      url: `${SITE_URL}/serwis-drukarek/${city.slug}`,
      provider: {
        '@type': 'LocalBusiness',
        name: 'TSdruk',
        url: SITE_URL,
        telephone: `+48 ${PHONE}`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Krzemienica 614',
          postalCode: '37-127',
          addressLocality: 'Krzemienica',
          addressRegion: 'podkarpackie',
          addressCountry: 'PL',
        },
      },
      areaServed: { '@type': 'City', name: city.name },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ]

  return (
    <div className="font-sans text-gray-800 bg-white">
      <SiteNav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="bg-gray-50 pt-32 pb-16 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-100 rounded-full opacity-60 blur-3xl pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/serwis" className="text-blue-700 text-sm font-semibold hover:underline">
            ← Serwis drukarek – całe Podkarpacie
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mt-4 mb-6 max-w-4xl">
            Serwis drukarek {city.name}
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mb-8">
            Naprawa drukarek atramentowych, laserowych, kserokopiarek i urządzeń wielofunkcyjnych
            dla klientów z {city.gen} i okolic. Serwis mieści się w {SERVICE_BASE} – możesz
            przywieźć sprzęt osobiście albo umówić odbiór.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/#kontakt"
              className="bg-blue-700 hover:bg-blue-800 active:scale-95 text-white font-bold px-8 py-3.5 rounded-full text-lg transition-all shadow-lg shadow-blue-200"
            >
              Zgłoś usterkę
            </Link>
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-2 border-2 border-blue-700 text-blue-700 hover:bg-blue-50 active:scale-95 font-semibold px-8 py-3.5 rounded-full text-lg transition-all"
            >
              <Phone className="w-5 h-5" />
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* JAK DZIAŁAM */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-blue-700 font-semibold uppercase tracking-widest text-sm">Proces</span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-10">
            Jak wygląda naprawa dla klientów z {city.gen}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <div className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold mb-4">
                  {i + 1}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CO NAPRAWIAM */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-blue-700 font-semibold uppercase tracking-widest text-sm">Zakres napraw</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-6">Co naprawiam</h2>
            <ul className="space-y-3">
              {faults.map((f) => (
                <li key={f} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="text-blue-700 font-semibold uppercase tracking-widest text-sm">Marki</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-6">Obsługiwane marki</h2>
            <ul className="flex flex-wrap gap-2">
              {BRANDS.map((b) => (
                <li key={b} className="bg-white border border-gray-200 text-gray-800 text-sm font-semibold px-4 py-2 rounded-full">
                  {b}
                </li>
              ))}
            </ul>
            <div className="bg-white border border-gray-100 rounded-3xl p-8 mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-gray-900">Adres serwisu</div>
                  <div className="text-gray-600">{ADDRESS}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-gray-900">Godziny pracy</div>
                  <div className="text-gray-600">Poniedziałek - piątek: {HOURS_WEEKDAY}</div>
                  <div className="text-gray-600">Sobota: {HOURS_SATURDAY}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-gray-900">Telefon</div>
                  <a href={`tel:${PHONE}`} className="text-blue-700 hover:underline">{PHONE}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-gray-900">E-mail</div>
                  <a href={`mailto:${EMAIL}`} className="text-blue-700 hover:underline">{EMAIL}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-blue-700 font-semibold uppercase tracking-widest text-sm">FAQ</span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-10">
            Najczęstsze pytania – {city.name}
          </h2>
          <div className="space-y-4">
            {faq.map((f) => (
              <details key={f.q} className="group bg-gray-50 border border-gray-100 rounded-2xl px-6 py-5">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  {f.q}
                  <Wrench className="w-5 h-5 text-blue-600 shrink-0 ml-4" />
                </summary>
                <p className="text-gray-600 leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* INNE MIASTA + CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Serwis w innych miastach</h2>
          <p className="text-gray-600 mb-8">Dojezdżam także do klientów w innych miejscowościach Podkarpacia.</p>
          <ul className="flex flex-wrap justify-center gap-2 mb-12">
            {others.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/serwis-drukarek/${c.slug}`}
                  className="flex items-center gap-1.5 bg-white border border-gray-200 hover:border-blue-400 hover:text-blue-700 text-gray-800 text-sm font-semibold px-4 py-2 rounded-full transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#kontakt"
            className="inline-block bg-blue-700 hover:bg-blue-800 active:scale-95 text-white font-bold px-10 py-4 rounded-full text-lg transition-all shadow-lg shadow-blue-200"
          >
            Umów naprawę w {city.loc}
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
