import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, MapPin, Phone } from 'lucide-react'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { getAllPosts } from '@/lib/blog'
import {
  ADDRESS,
  BRANDS,
  HOURS_SATURDAY,
  HOURS_WEEKDAY,
  PHONE,
  SERVICE_AREA_CITIES,
  SERVICE_BASE,
  SITE_URL,
} from '@/lib/site'

export const metadata: Metadata = {
  title: 'Serwis drukarek i kserokopiarek Łańcut, Rzeszów, Podkarpacie',
  description:
    'Pogwarancyjny serwis i naprawa drukarek atramentowych, laserowych, kserokopiarek i urządzeń wielofunkcyjnych. Krzemienica koło Łańcuta, Rzeszów, Przeworsk, Jarosław, Leżajsk i całe Podkarpacie. Bezpłatna diagnostyka.',
  alternates: { canonical: '/serwis' },
  openGraph: {
    title: 'Serwis drukarek i kserokopiarek | Łańcut, Rzeszów, Podkarpacie',
    description:
      'Naprawa drukarek i kserokopiarek wszystkich popularnych marek. Bezpłatna diagnostyka, wycena przed naprawą, gwarancja na naprawę.',
    url: '/serwis',
  },
}

const steps = [
  {
    title: 'Zgłoszenie',
    text: 'Dzwonisz lub wysyłasz formularz z opisem usterki. Możesz dołączyć zdjęcie wydruku albo komunikatu na wyświetlaczu.',
  },
  {
    title: 'Bezpłatna diagnostyka',
    text: 'Sprawdzam urządzenie i ustalam przyczynę problemu. Za samą diagnostykę nie płacisz.',
  },
  {
    title: 'Wycena przed naprawą',
    text: 'Dostajesz konkretną cenę. Jeśli potrzebna jest część, zamawiam ją pod Twoją naprawę. Naprawiam dopiero po Twojej akceptacji.',
  },
  {
    title: 'Naprawa z gwarancją',
    text: 'Po naprawie testuję urządzenie. Na każdą wykonaną naprawę udzielam własnej gwarancji.',
  },
]

const faq = [
  {
    q: 'Gdzie znajduje się serwis?',
    a: `Serwis działa w miejscowości ${SERVICE_BASE} (${ADDRESS}). Urządzenie możesz przywieźć osobiście albo umówić odbiór.`,
  },
  {
    q: 'Czy dojeżdżasz do klienta?',
    a: 'Tak, po wcześniejszym uzgodnieniu. Mogę odebrać drukarkę, naprawić ją i dostarczyć z powrotem. Dojazd kosztuje od 30 zł.',
  },
  {
    q: 'Czy naprawiasz drukarki na gwarancji?',
    a: 'Nie. Zajmuję się wyłącznie naprawami pogwarancyjnymi. Jeśli urządzenie jest jeszcze na gwarancji producenta, zgłoś je do autoryzowanego serwisu producenta.',
  },
  {
    q: 'Ile kosztuje diagnostyka?',
    a: 'Diagnostyka i wycena są bezpłatne. Płacisz tylko wtedy, gdy zaakceptujesz wycenę i zdecydujesz się na naprawę.',
  },
  {
    q: 'Jak długo trwa naprawa?',
    a: 'Wiele usterek usuwam w ciągu 24 godzin. Jeśli potrzebna jest część zamienna, czas naprawy zależy od jej dostępności u dostawcy, o czym informuję przy wycenie.',
  },
  {
    q: 'Jakie marki naprawiasz?',
    a: `Naprawiam drukarki i kserokopiarki wszystkich popularnych marek, m.in. ${BRANDS.join(', ')}.`,
  },
]

export default function SerwisPage() {
  const posts = getAllPosts().slice(0, 3)

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Serwis drukarek i kserokopiarek',
      serviceType: 'Pogwarancyjna naprawa drukarek i kserokopiarek',
      url: `${SITE_URL}/serwis`,
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
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Podkarpacie' },
        ...SERVICE_AREA_CITIES.map((name) => ({ '@type': 'City', name })),
      ],
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
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full mb-5">
            Serwis pogwarancyjny
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6 max-w-4xl">
            Serwis drukarek i kserokopiarek: Łańcut, Rzeszów i całe Podkarpacie
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mb-8">
            Naprawiam drukarki atramentowe, laserowe, kserokopiarki i urządzenia wielofunkcyjne
            od ponad 20 lat. Serwis mieści się w Krzemienicy koło Łańcuta, a klientów obsługuję
            na terenie całego województwa podkarpackiego.
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

      {/* OBSZAR */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-blue-700 font-semibold uppercase tracking-widest text-sm">Obszar działania</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-5">
              Gdzie działam
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Serwis znajduje się w Krzemienicy koło Łańcuta. Drukarkę możesz przywieźć osobiście w godzinach pracy albo umówić odbiór.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Obsługuję klientów indywidualnych, małe firmy i większe przedsiębiorstwa z całego Podkarpacia.
              Dojazd do klienta jest możliwy po wcześniejszym uzgodnieniu: odbieram urządzenie,
              naprawiam je w serwisie i odwożę sprawne.
            </p>
            <ul className="flex flex-wrap gap-2">
              {SERVICE_AREA_CITIES.map((city) => (
                <li
                  key={city}
                  className="flex items-center gap-1.5 bg-blue-50 text-blue-800 text-sm font-semibold px-3.5 py-1.5 rounded-full"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  {city}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 h-fit space-y-6">
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
                <a href={`tel:${PHONE}`} className="text-blue-700 font-semibold hover:underline">
                  {PHONE}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARKI */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-blue-700 font-semibold uppercase tracking-widest text-sm">Marki</span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-8">Marki, które serwisuję</h2>
          <ul className="flex flex-wrap gap-2 mb-5">
            {BRANDS.map((b) => (
              <li key={b} className="bg-white border border-gray-200 text-gray-700 text-sm font-semibold px-4 py-2 rounded-full">
                {b}
              </li>
            ))}
          </ul>
          <p className="text-gray-500 text-sm leading-relaxed">
            Nie widzisz swojej marki? Zadzwoń, a powiem, czy mogę pomóc z Twoim modelem.
          </p>
        </div>
      </section>

      {/* PROCES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-blue-700 font-semibold uppercase tracking-widest text-sm">Krok po kroku</span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-10">Jak wygląda naprawa</h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <li key={s.title} className="relative bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-700 text-white font-extrabold mb-4">
                  {i + 1}
                </span>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-gray-600 leading-relaxed max-w-3xl">
            Wykonuję wyłącznie naprawy pogwarancyjne. Urządzenia objęte gwarancją producenta
            warto zgłosić do autoryzowanego serwisu marki. Aktualne ceny orientacyjne znajdziesz
            w{' '}
            <Link href="/#cennik" className="text-blue-700 font-semibold hover:underline">
              cenniku
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-blue-700 font-semibold uppercase tracking-widest text-sm">FAQ</span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-8">Najczęstsze pytania</h2>
          <div className="space-y-3">
            {faq.map((f) => (
              <details key={f.q} className="group bg-white border border-gray-200 rounded-2xl px-6 py-4 open:shadow-md">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-bold text-gray-900">
                  {f.q}
                  <ArrowRight className="w-5 h-5 text-blue-600 shrink-0 transition-transform group-open:rotate-90" />
                </summary>
                <p className="text-gray-600 leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      {posts.length > 0 && (
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
              <h2 className="text-3xl font-extrabold text-gray-900">Porady z bloga</h2>
              <Link href="/blog" className="flex items-center gap-1 text-blue-700 font-semibold hover:underline">
                Wszystkie artykuły
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {posts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-400 hover:shadow-lg transition-all"
                >
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">{p.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{p.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-blue-800 via-blue-700 to-blue-700">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Oddaj drukarkę w ręce serwisanta</h2>
          <p className="text-blue-100 text-lg mb-8">
            Zadzwoń albo wyślij zgłoszenie. Bezpłatna diagnostyka i wycena przed naprawą.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-2 bg-white text-blue-700 font-bold px-8 py-3.5 rounded-full text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              {PHONE}
            </a>
            <Link
              href="/#kontakt"
              className="flex items-center gap-2 border-2 border-white text-white font-bold px-8 py-3.5 rounded-full text-lg hover:bg-white/10 transition-colors"
            >
              Wyślij zgłoszenie
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
