import Link from 'next/link'
import { Printer } from 'lucide-react'
import { COMPANY_NAME, NAV_LINKS } from '@/lib/site'

export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 text-white font-extrabold text-2xl">
          <Printer className="w-7 h-7" />
          {COMPANY_NAME}
        </Link>
        <p className="text-sm">
          © {new Date().getFullYear()} {COMPANY_NAME}. Wszelkie prawa zastrzeżone.
        </p>
        <div className="flex flex-wrap justify-center gap-5 text-sm">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
