import Link from 'next/link'
import { ArrowRight, CheckCircle, ChevronRight, ClipboardCheck, Phone, Search, Shield, Wrench } from 'lucide-react'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { PHONE } from '@/lib/site'
import {
  COPIER_BRAND_ISSUES,
  PRINTER_BRAND_ISSUES,
  SERWIS_KINDS,
  SERVICE_AREA_CITIES,
  type Brand,
  type SerwisKind,
} from '@/lib/serwis'

const STEPS = [
  {
    icon: <Search className="w-6 h-6" />,
    title: 'Bezpłatna diagnostyka',
    desc: 'Sprawdzam urządzenie i ustalam przyczynę usterki, bez opłat i zobowiązań.',
  },
  {
    icon: <ClipboardCheck className="w-6 h-6" />,
    title: 'Uczciwa wycena',
    desc: 'Przedstawiam koszt naprawy przed przystąpieniem do prac, bez ukrytych kosztów.',
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: 'Naprawa',
    desc: 'Usuwam usterkę w serwisie lub u Klienta po wcześniejszym uzgodnieniu.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Testy i gwarancja',
    desc: 'Sprawdzam działanie urządzenia i udzielam gwarancji na wykonaną naprawę.',
  },
]

export default function BrandPage({ kind, brand }: { kind: SerwisKind; brand: Brand }) {
  const isPrinters = kind === 'drukarki'
  const devicePlural = isPrinters ? 'drukarek' : 'kserokopiarek'
  const deviceNominative = isPrinters ? 'drukarka' : 'kserokopiarka'
  const deviceAdjective = isPrinters ? 'drukarki' : 'kserokopiarki'
  const issues = isPrinters ? PRINTER_BRAND_ISSUES : COPIER_BRAND_ISSUES
  const others = SERWIS_KINDS[kind].brands.filter((b) => b.slug !== brand.slug)
  const pageTitle = `Serwis ${devicePlural} ${brand.name}`

  return (
    <div className="font-sans text-gray-800 bg-white">
      <SiteNav />

      {/* HERO */}
      <section className="bg-gray-50 pt-32 pb-16 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-100 rounded-full opacity-60 blur-3xl pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/serwis/${kind}`}
            className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mb-5 hover:underline"
          >
            ← {SERWIS_KINDS[kind].label}
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            {pageTitle}
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mb-8">
            Specjalizuję się w naprawie i konserwacji {devicePlural} {brand.name}. Diagnozuję
            i usuwam usterki mechaniczne, elektroniczne oraz programowe, przywracając
            urządzeniom pełną sprawność w ramach serwisu pogwarancyjnego.
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

      {/* ISSUES */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
            Typowe usterki {devicePlural} {brand.name}, które naprawiam:
          </h2>
          <ul className="space-y-4 mb-12">
            {issues.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <ArrowRight className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
            Jak wygląda serwis {deviceAdjective} {brand.name}?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {STEPS.map((s, i) => (
              <div
                key={s.title}
                className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-3">
                  {s.icon}
                </div>
                <div className="text-xs font-bold text-blue-700 mb-1">Krok {i + 1}</div>
                <div className="font-bold text-gray-800 mb-1">{s.title}</div>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-5">
            Serwis {devicePlural} {brand.name} na Podkarpaciu
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Serwisuję {devicePlural} {brand.name} na terenie całego Podkarpacia, m.in.:{' '}
            {SERVICE_AREA_CITIES}. Naprawę wykonuję przede wszystkim w serwisie, a dojazd
            do Klienta lub odbiór sprzętu jest możliwy w miarę możliwości, po wcześniejszym
            uzgodnieniu.
          </p>
          <ul className="space-y-3 mb-12">
            {[
              `pogwarancyjne naprawy ${devicePlural} ${brand.name},`,
              'szybka diagnostyka i reakcja na zgłoszenie serwisowe,',
              'pomoc w doborze i zamówieniu części zamiennych oraz materiałów eksploatacyjnych,',
              'gwarancja na każdą wykonaną naprawę.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* OTHER BRANDS */}
          <h2 className="text-xl font-extrabold text-gray-900 mb-4">
            Serwisuję również inne marki:
          </h2>
          <div className="flex flex-wrap gap-3">
            {others.map((b) => (
              <Link
                key={b.slug}
                href={`/serwis/${kind}/${b.slug}`}
                className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 font-semibold text-sm px-4 py-2 rounded-full hover:bg-blue-100 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
                {b.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-blue-800 via-blue-700 to-blue-700">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Twoja {deviceNominative} {brand.name} nie działa?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Zadzwoń teraz lub wyślij zgłoszenie. Bezpłatna diagnostyka i uczciwa wycena.
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
