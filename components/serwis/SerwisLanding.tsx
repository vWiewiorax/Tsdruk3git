import Link from 'next/link'
import { ArrowRight, ChevronRight, Phone } from 'lucide-react'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { PHONE } from '@/lib/site'
import { SERWIS_KINDS, type SerwisConfig } from '@/lib/serwis'

const IMAGES: Record<SerwisConfig['kind'], { src: string; alt: string }[]> = {
  drukarki: [
    { src: '/gallery/canon.webp', alt: 'Drukarka Canon w serwisie' },
    { src: '/gallery/hp.webp', alt: 'Drukarka HP w serwisie' },
  ],
  kserokopiarki: [
    { src: '/gallery/konica.jpg', alt: 'Kserokopiarka Konica Minolta w serwisie' },
    { src: '/gallery/ricoh.jpg', alt: 'Kserokopiarka Ricoh w serwisie' },
  ],
}

export default function SerwisLanding({ config }: { config: SerwisConfig }) {
  const images = IMAGES[config.kind]

  return (
    <div className="font-sans text-gray-800 bg-white">
      <SiteNav />

      {/* HERO */}
      <section className="bg-gray-50 pt-32 pb-16 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-100 rounded-full opacity-60 blur-3xl pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full mb-5">
            {config.badge}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            {config.title}
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mb-8">
            {config.subtitle}
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

      {/* BENEFITS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-start">
          <div className="grid gap-6">
            {images.map((img) => (
              <div
                key={img.src}
                className="rounded-3xl overflow-hidden border border-gray-100 shadow-lg h-56 bg-gray-100"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-7">
              {config.benefitsTitle}
            </h2>
            <ul className="space-y-4">
              {config.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-gray-700">
                  <ArrowRight className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {config.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-5">
                {s.heading}
              </h2>
              {s.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-4">
                  {p}
                </p>
              ))}
            </div>
          ))}

          {/* OFFER */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
              {config.offerTitle}
            </h2>
            <ul className="space-y-4">
              {config.offerList.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <ChevronRight className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
              {config.offerHighlight && (
                <li className="flex items-start gap-3 text-gray-800 font-semibold">
                  <ChevronRight className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>{config.offerHighlight}</span>
                </li>
              )}
            </ul>
          </div>

          {/* TRUST */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-5">
              {config.trustHeading}
            </h2>
            {config.trustParagraphs.map((p, i) => (
              <p key={i} className="text-gray-600 leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </div>

          {/* BRANDS */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
              {config.brandsTitle}
            </h2>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {SERWIS_KINDS[config.kind].brands.map((b) => (
                <li key={b.slug}>
                  <Link
                    href={`/serwis/${config.kind}/${b.slug}`}
                    className="flex items-center gap-2 text-blue-700 font-semibold hover:underline"
                  >
                    <ChevronRight className="w-4 h-4 shrink-0" />
                    {config.kind === 'drukarki'
                      ? `Serwis drukarek ${b.name.toUpperCase()}`
                      : `Serwis kserokopiarek ${b.name}`}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-blue-800 via-blue-700 to-blue-700">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Oddaj sprzęt w ręce specjalisty
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

