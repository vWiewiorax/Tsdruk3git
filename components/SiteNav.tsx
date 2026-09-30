'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, ChevronRight, Menu, Printer, X } from 'lucide-react'
import { COMPANY_NAME, NAV_LINKS } from '@/lib/site'

export default function SiteNav({ activeSection = '' }: { activeSection?: string }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({})
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (href: string) => {
    if (href.includes('#')) return activeSection === href.split('#')[1]
    return pathname === href || (href !== '/' && pathname.startsWith(href))
  }

  const toggleGroup = (key: string) =>
    setOpenGroups((prev) => ({ ...prev, [key]: !prev[key] }))

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          <Link href="/" className="flex items-center gap-2 font-extrabold text-2xl text-blue-700">
            <Printer className="w-7 h-7" />
            <span>{COMPANY_NAME}</span>
          </Link>
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) =>
              l.children ? (
                <div key={l.href} className="relative group">
                  <Link
                    href={l.href}
                    className={`flex items-center gap-1 font-medium transition-colors relative pb-0.5 ${pathname.startsWith(l.href) ? 'text-blue-700 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-700 after:rounded' : 'text-gray-600 hover:text-blue-700'}`}
                  >
                    {l.label}
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                  </Link>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 hidden group-hover:block group-focus-within:block">
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 py-2 w-60">
                      {l.children.map((c) => (
                        <div key={c.href} className="relative group/item">
                          <Link
                            href={c.href}
                            className="flex items-center justify-between gap-2 px-5 py-2.5 text-sm font-medium text-gray-600 hover:text-blue-700 hover:bg-blue-50"
                          >
                            {c.label}
                            {c.children && <ChevronRight className="w-4 h-4 shrink-0" />}
                          </Link>
                          {c.children && (
                            <div className="absolute left-full top-0 pl-1 hidden group-hover/item:block group-focus-within/item:block">
                              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 py-2 w-56 max-h-[70vh] overflow-y-auto">
                                {c.children.map((b) => (
                                  <Link
                                    key={b.href}
                                    href={b.href}
                                    className="block px-5 py-2 text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50"
                                  >
                                    {b.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`font-medium transition-colors relative pb-0.5 ${isActive(l.href) ? 'text-blue-700 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-700 after:rounded' : 'text-gray-600 hover:text-blue-700'}`}
                >
                  {l.label}
                </Link>
              )
            )}
            <Link
              href="/#kontakt"
              className="ml-2 bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded-full font-semibold transition-colors shadow-sm"
            >
              Zgłoś usterkę
            </Link>
          </div>
          {/* Mobile toggle */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
          {NAV_LINKS.map((l) =>
            l.children ? (
              <div key={l.href} className="border-b border-gray-100">
                <div className="flex items-center justify-between py-2">
                  <Link
                    href={l.href}
                    className="text-gray-700 font-medium"
                    onClick={() => setMenuOpen(false)}
                  >
                    {l.label}
                  </Link>
                  <button
                    aria-label={`Rozwiń ${l.label}`}
                    onClick={() => toggleGroup(l.label)}
                    className="p-2 text-gray-500"
                  >
                    <ChevronDown className={`w-5 h-5 transition-transform ${openGroups[l.label] ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                {openGroups[l.label] && (
                  <div className="pb-2 flex flex-col">
                    {l.children.map((c) => (
                      <div key={c.href}>
                        <div className="flex items-center justify-between pl-4">
                          <Link
                            href={c.href}
                            className="text-gray-600 font-medium py-1.5"
                            onClick={() => setMenuOpen(false)}
                          >
                            {c.label}
                          </Link>
                          {c.children && (
                            <button
                              aria-label={`Rozwiń ${c.label}`}
                              onClick={() => toggleGroup(c.label)}
                              className="p-2 text-gray-400"
                            >
                              <ChevronDown className={`w-4 h-4 transition-transform ${openGroups[c.label] ? 'rotate-180' : ''}`} />
                            </button>
                          )}
                        </div>
                        {c.children && openGroups[c.label] && (
                          <div className="pl-8 flex flex-col">
                            {c.children.map((b) => (
                              <Link
                                key={b.href}
                                href={b.href}
                                className="text-gray-500 text-sm py-1.5"
                                onClick={() => setMenuOpen(false)}
                              >
                                {b.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className="text-gray-700 font-medium py-2 border-b border-gray-100"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            )
          )}
          <Link
            href="/#kontakt"
            className="mt-2 bg-blue-700 text-white text-center px-5 py-2 rounded-full font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Zgłoś usterkę
          </Link>
        </div>
      )}
    </nav>
  )
}
