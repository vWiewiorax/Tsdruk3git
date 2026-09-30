import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Copy, Phone, Printer } from 'lucide-react'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { PHONE } from '@/lib/site'
import { SERWIS_KINDS } from '@/lib/serwis'

export const metadata: Metadata = {
  title: 'Serwis — drukarki i kserokopiarki | Łańcut, Rzeszów',
  description:
    'Kompleksowy serwis sprzętu biurowego: naprawa i konserwacja drukarek oraz kserokopiarek wszystkich marek. Gwarancyjnie i pogwarancyjnie, z dojazdem do klienta. Łańcut, Rzeszów, Podkarpacie.',
  alternates: { canonical: 'https://www.tsdruk.pl/serwis' },
}

export default function SerwisPage() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <SiteNav />

      {/* HERO */}
      <section className="bg-gray-50 pt-32 pb-16 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-100 rounded-full opacity-60 blur-3xl pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full mb-5">
            Serwis sprzętu biurowego
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Serwis drukarek i kserokopiarek
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mb-8">
            Naprawa, konserwacja i przeglądy sprzętu biurowego — gwarancyjnie i
            pogwarancyjnie. Wybierz rodzaj urządzenia i poznaj pełną ofertę serwisową.
          </p>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          {[
            {
              href: '/serwis/drukarki',
              icon: <Printer className="w-9 h-9" />,
              title: 'Serwis drukarek',
              desc: 'Naprawa drukarek atramentowych i laserowych, urządzeń wielofunkcyjnych i skanerów. Przeglądy, konserwacje, urządzenie zastępcze.',
              count: SERWIS_KINDS.drukarki.brands.length,
            },
            {
              href: '/serwis/kserokopiarki',
              icon: <Copy className="w-9 h-9" />,
              title: 'Serwis kserokopiarek',
              desc: 'Kompleksowy serwis kserokopiarek dla firm i instytucji: naprawa, konserwacja, regulacja podzespołów i wsparcie techniczne.',
              count: SERWIS_KINDS.kserokopiarki.brands.length,
            },
          ].map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group bg-gray-50 border border-gray-200 rounded-3xl p-8 hover:border-blue-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">
                {card.icon}
              </div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                {card.title}
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">{card.desc}</p>
              <span className="inline-flex items-center gap-2 text-blue-700 font-semibold">
                Zobacz ofertę i marki ({card.count})
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-blue-800 via-blue-700 to-blue-700">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Potrzebujesz naprawy już teraz?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Zadzwoń teraz lub wyślij zgłoszenie — bezpłatna diagnostyka i uczciwa wycena.
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
