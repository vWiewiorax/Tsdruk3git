"use client"
import { useState, useEffect, useRef } from 'react'
import {
  Printer,
  Wrench,
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Menu,
  X,
  ChevronDown,
  Zap,
  Shield,
  Award,
  Send,
  Users,
  ThumbsUp,
  ArrowRight,
  Quote,
  Paperclip,
  X as XIcon,
  ImageIcon,
} from 'lucide-react'

const COMPANY_NAME = 'TSdruk'
const PHONE = '796 584 933'
const EMAIL = 'tomasz.strzepka@gmail.com'
const ADDRESS = 'Krzemienica 614, 37-127 Krzemienica'
const HOURS_WEEKDAY = '8:00 – 16:00'
const HOURS_SATURDAY = '10:00 – 14:00'

const services = [
  {
    icon: <Wrench className="w-8 h-8" />,
    title: 'Naprawa drukarek atramentowych',
    description:
      'Usuwam zacięcia papieru, naprawiam głowice drukujące, wymieniam tusze i uszczelki. Obsługuję wszystkie popularne marki.',
  },
  {
    icon: <Printer className="w-8 h-8" />,
    title: 'Naprawa drukarek laserowych',
    description:
      'Wymiana bębnów, kaset z tonerem, rolek podawania papieru i jednostek utrwalających. Naprawiam kserokopiarki i drukarki wielofunkcyjne.',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Diagnostyka i przegląd',
    description:
      'Przeprowadzam pełną diagnostykę urządzenia, czyszczenie wnętrza oraz przegląd prewencyjny zapobiegający przyszłym awariom.',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Serwis gwarancyjny i pogwarancyjny',
    description:
      'Realizuję naprawy gwarancyjne oraz udzielam własnej gwarancji na każdą wykonaną przeze mnie naprawę.',
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Dojazd do klienta',
    description:
      'Mogę przyjechać do Ciebie, odebrać drukarkę, naprawić ją i dostarczyć z powrotem — bez wychodzenia z domu czy biura.',
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: 'Konfiguracja i instalacja',
    description:
      'Instaluję sterowniki, konfiguruję sieć Wi-Fi i podłączam drukarkę do komputerów oraz urządzeń mobilnych.',
  },
]

const pricing = [
  { service: 'Diagnostyka / wycena', price: 'BEZPŁATNA', highlight: true },
  { service: 'Naprawa drukarki atramentowej', price: 'od 80 zł', highlight: false },
  { service: 'Naprawa drukarki laserowej', price: 'od 120 zł', highlight: false },
  { service: 'Czyszczenie głowicy drukującej', price: 'od 50 zł', highlight: false },
  { service: 'Wymiana bębna / wałka podającego', price: 'od 60 zł', highlight: false },
  { service: 'Przegląd prewencyjny + czyszczenie', price: 'od 70 zł', highlight: false },
  { service: 'Dojazd do klienta', price: 'od 30 zł', highlight: false },
  { service: 'Konfiguracja sieciowa / instalacja', price: 'od 50 zł', highlight: false },
]

const reviews = [
  {
    name: 'Anna K.',
    stars: 5,
    text: 'Szybka i profesjonalna obsługa! Moja drukarka HP została naprawiona w ciągu jednego dnia. Polecam z czystym sumieniem.'
  },
  {
    name: 'Marek W.',
    stars: 5,
    text: 'Bardzo rzetelny serwis. Dostałem darmową diagnozę, uczciwą wycenę i naprawę zgodnie z obietnicą. Na pewno wrócę.'
  },
  {
    name: 'Jacek R.',
    stars: 5,
    text: 'Serwisuje moje biuro od lat. Mam 12 drukarek pod opieką. Zawsze na czas, zawsze solidnie. Gorąco polecam!',
  },
  {
    name: 'Katarzyna M.',
    stars: 4,
    text: 'Sprawna naprawa i miła obsługa. Moja drukarka działa jak nowa. Ceny uczciwe jak na rynek.'
  },
]

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function useAnimatedCounter(target: number, duration = 1500, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (ts: number) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return count
}

function AnimatedStat({ value, label, icon }: { value: number; suffix: string; label: string; icon: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)
  const count = useAnimatedCounter(value, 1200, started)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true) }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={ref} className="flex flex-col items-center gap-3 group cursor-default select-none">
      <div className="text-white mb-1">{icon}</div>
      <div className="text-5xl font-extrabold text-white tabular-nums">{count}{value === 100 ? '%' : '+'}</div>
      <div className="text-blue-100 text-base font-medium text-center">{label}</div>
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    printerModel: '',
    problem: '',
  })
  const [files, setFiles] = useState<File[]>([])
  const [dragOver, setDragOver] = useState(false)
  const [submitted, setSubmitted] = useState(false)
const [submitting, setSubmitting] = useState(false)
const [error, setError] = useState<string | null>(null)
const requiredFields = ['name', 'phone', 'problem'] as const

const isFormValid = requiredFields.every((field) => formData[field]?.trim().length > 0)
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setSubmitting(true)
  setError(null)

  try {
    const data = new FormData()
    data.append('name', formData.name)
    data.append('phone', formData.phone)
    data.append('email', formData.email)
    data.append('printerModel', formData.printerModel)
    data.append('problem', formData.problem)
    files.forEach((file) => data.append('attachment', file))

    const res = await fetch('/api/send_email', {
      method: 'POST',
      body: data,
    })

    if (!res.ok) {
      const body = await res.json().catch(() => ({}))
      throw new Error(body.error || 'Wystąpił błąd podczas wysyłania.')
    }

    setSubmitted(true)
    setFormData({ name: '', phone: '', email: '', printerModel: '', problem: '' })
    setFiles([])
  } catch (err) {
    setError(err instanceof Error ? err.message : 'Wystąpił błąd podczas wysyłania.')
  } finally {
    setSubmitting(false)
  }
}
  useScrollReveal()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = ['o-mnie', 'uslugi', 'cennik', 'opinie', 'kontakt']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (window.location.search.includes('sent=1')) {
      setSubmitted(true)
      if (window.history.replaceState) {
        window.history.replaceState({}, document.title, window.location.pathname + window.location.hash)
      }
    }
  }, [])

  useEffect(() => {
    const input = fileInputRef.current
    if (!input) return
    if (files.length === 0) {
      input.files = null
      return
    }
    const dt = new DataTransfer()
    files.forEach((file) => dt.items.add(file))
    input.files = dt.files
  }, [files])

  const navLinks = [
    { href: '#o-mnie', label: 'O mnie' },
    { href: '#uslugi', label: 'Usługi' },
    { href: '#cennik', label: 'Cennik' },
    { href: '#galeria', label: 'Galeria' },
    { href: '#opinie', label: 'Opinie' },
    { href: '#kontakt', label: 'Kontakt' },
  ]

  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* NAVIGATION */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">
            <a href="#" className="flex items-center gap-2 font-extrabold text-2xl text-blue-700">
              <Printer className="w-7 h-7" />
              <span>{COMPANY_NAME}</span>
            </a>
            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((l) => {
                const id = l.href.replace('#', '')
                const isActive = activeSection === id
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    className={`font-medium transition-colors relative pb-0.5 ${isActive ? 'text-blue-700 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-700 after:rounded' : 'text-gray-600 hover:text-blue-700'}`}
                  >
                    {l.label}
                  </a>
                )
              })}
              <a
                href="#kontakt"
                className="ml-2 bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded-full font-semibold transition-colors shadow-sm"
              >
                Zgłoś usterkę
              </a>
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
          <div className="md:hidden bg-white border-t px-4 pb-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-gray-700 font-medium py-2 border-b border-gray-100"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="mt-2 bg-blue-700 text-white text-center px-5 py-2 rounded-full font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              Zgłoś usterkę
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="min-h-screen bg-gray-50 flex items-center pt-20 relative overflow-hidden">
        {/* decorative blobs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-100 rounded-full opacity-60 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-72 h-72 bg-blue-50 rounded-full opacity-80 blur-2xl pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full mb-5">
              Profesjonalny serwis drukarek
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Twoja drukarka<br />
              <span className="text-blue-700">znowu sprawna</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-lg">
              Naprawiam drukarki atramentowe i laserowe wszystkich marek.
              Szybka diagnostyka, uczciwa wycena i gwarancja na każdą naprawę.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#kontakt" className="bg-blue-700 hover:bg-blue-800 active:scale-95 text-white font-bold px-8 py-3.5 rounded-full text-lg transition-all shadow-lg shadow-blue-200">
                Zgłoś usterkę
              </a>
              <a href="#uslugi" className="border-2 border-blue-700 text-blue-700 hover:bg-blue-50 active:scale-95 font-semibold px-8 py-3.5 rounded-full text-lg transition-all">
                Moje usługi
              </a>
            </div>
            <div className="flex flex-wrap gap-5">
              {[
                'Bezpłatna diagnostyka',
                'Naprawa w 24h',
                'Gwarancja na naprawę',
              ].map((t) => (
                <div key={t} className="flex items-center gap-2 text-gray-600 text-sm">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Right – animated printer */}
          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-full max-w-md h-[420px] flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-700 rounded-3xl rotate-3 opacity-10" />
              <div className="relative w-72 h-80 flex items-center justify-center">
                {/* Animated papers */}
                {[
                  { delay: '0s', z: 20 },
                  { delay: '1.2s', z: 30 },
                  { delay: '2.4s', z: 40 },
                ].map((p, i) => (
                  <div
                    key={i}
                    className="absolute left-1/2 top-12 w-40 h-52 bg-white rounded-lg shadow-lg animate-print-slide flex flex-col items-center justify-start pt-4 gap-3 border border-gray-100"
                    style={{ animationDelay: p.delay, zIndex: p.z }}
                  >
                    <div className=" w-28 h-2 bg-gray-200 rounded" />
                    <div className=" w-24 h-2 bg-gray-200 rounded" />
                    <div className=" w-28 h-2 bg-gray-200 rounded" />
                    <div className=" w-20 h-2 bg-gray-200 rounded" />
                    <div className=" mt-8 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-7 h-7 text-green-600" />
                    </div>
                  </div>
                ))}

                {/* Printer body */}
                <div className="relative w-64 h-44 bg-gradient-to-b from-gray-700 to-gray-800 rounded-3xl shadow-2xl z-50 animate-printer-pulse flex flex-col items-center justify-end pb-4">
                  {/* Top slot */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-5 bg-gray-600 rounded-full border-4 border-gray-800" />
                  {/* Front panel */}
                  <div className="w-56 h-28 bg-gray-900/40 rounded-2xl border border-gray-600/30 flex flex-col items-center justify-center gap-2">
                    {/* Display */}
                    <div className="w-28 h-10 bg-blue-100 rounded-lg flex items-center justify-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
                    </div>
                    {/* Buttons */}
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                      <div className="w-3 h-3 rounded-full bg-gray-500" />
                      <div className="w-3 h-3 rounded-full bg-gray-500" />
                    </div>
                  </div>
                  {/* Output tray */}
                  <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-48 h-4 bg-gray-600 rounded-full border-4 border-gray-800" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="#o-mnie" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-blue-600 animate-bounce transition-colors hidden md:block">
          <ChevronDown className="w-7 h-7" />
        </a>
      </section>

      {/* STATS BAR */}
      <section className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white py-12">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-0">
          {([
            { value: 200, label: 'Zadowolonych klientów', icon: <Users className="w-10 h-10" /> },
            { value: 200, label: 'Naprawionych drukarek', icon: <Printer className="w-10 h-10" /> },
            { value: 20,  label: 'Lat doświadczenia',     icon: <Award className="w-10 h-10" /> },
            { value: 100, label: 'Gwarancja satysfakcji', icon: <ThumbsUp className="w-10 h-10" /> },
          ] as const).map((s, i) => (
            <div key={s.label} className={`flex flex-col items-center py-4 px-2 ${i < 3 ? 'md:border-r border-blue-600' : ''}`}>
              <AnimatedStat value={s.value} suffix={s.value === 100 ? '%' : '+'} label={s.label} icon={s.icon} />
            </div>
          ))}
        </div>
      </section>

      {/* O MNIE */}
      <section id="o-mnie" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-14 items-center">
          {/* Photo */}
          <div className="reveal flex justify-center">
            <div className="relative w-full max-w-md h-[28rem] md:max-w-lg md:h-[32rem]">
              <div className="absolute inset-0 bg-blue-700 rounded-3xl rotate-3 opacity-10" />
              <div className="relative h-full rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-gray-100">
                <img
                  src="/photo.png"
                  alt="Tomasz Strzępka – serwisant drukarek"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.parentElement!.innerHTML = '<div class="flex flex-col items-center justify-center h-full gap-4 text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-16 h-16 opacity-30"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg><p class="text-sm font-medium text-center px-6 opacity-60">Dodaj zdjęcie jako<br/>public/photo.png</p></div>'
                  }}
                />
              </div>
            </div>
          </div>
          {/* Text */}
          <div>
            <span className="text-blue-700 font-semibold uppercase tracking-widest text-sm reveal">O mnie</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-6 reveal reveal-delay-1">
              Naprawiam drukarki od ponad 20 lat
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed reveal reveal-delay-2">
              Specjalizuję się w naprawie drukarek atramentowych i laserowych.
              Obsługuję klientów indywidualnych, małe firmy oraz większe
              przedsiębiorstwa w całym regionie.
            </p>
            <p className="text-gray-600 mb-7 leading-relaxed reveal reveal-delay-2">
              Każdą naprawę zaczynam od bezpłatnej diagnostyki. Dopiero po
              jej wykonaniu przedstawiam dokładną wycenę — bez ukrytych kosztów.
              Na każdą wykonaną naprawę udzielam własnej gwarancji.
            </p>
            <ul className="space-y-3 mb-8 reveal reveal-delay-3">
              {[
                'Obsługuję wszystkie marki: HP, Canon, Epson, Brother, Samsung i inne',
                'Ponad 20 lat doświadczenia w serwisie drukarek',
                'Używam części zamiennych i materiałów eksploatacyjnych',
                'Naprawiam na miejscu lub odbieram i dostarczam sprzęt do klienta',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-2 gap-4 reveal reveal-delay-4">
              {[
                { icon: <Wrench className="w-10 h-10" />, title: 'Szybka naprawa', desc: 'Większość napraw w 24h' },
                { icon: <Shield className="w-10 h-10" />, title: 'Gwarancja', desc: 'Na każdą wykonaną naprawę' },
                { icon: <Zap className="w-10 h-10" />, title: 'Diagnoza gratis', desc: 'Płacisz tylko za naprawę' },
                { icon: <Star className="w-10 h-10" />, title: '20 lat w branży', desc: 'Setki zadowolonych klientów' },
              ].map((card) => (
                <div key={card.title} className="group bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all">
                  <div className="text-blue-600 mb-3 transition-transform duration-200 group-hover:scale-125 group-hover:-rotate-6">{card.icon}</div>
                  <div className="font-bold text-gray-800 text-base mb-1">{card.title}</div>
                  <div className="text-sm text-gray-500">{card.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* USŁUGI */}
      <section id="uslugi" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <span className="text-blue-700 font-semibold uppercase tracking-widest text-sm">Usługi</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              Co naprawiam i co oferuję
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Kompleksowy serwis drukarek dla klientów indywidualnych i biznesowych.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`reveal reveal-delay-${Math.min(i + 1, 6) as 1|2|3|4|5|6} group bg-white border border-gray-200 rounded-2xl p-7 hover:border-blue-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-200`}
              >
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-5 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  {s.icon}
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CENNIK */}
      <section id="cennik" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <span className="text-blue-700 font-semibold uppercase tracking-widest text-sm">Cennik</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              Przejrzyste ceny, bez niespodzianek
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Poniżej orientacyjne ceny usług. Dokładna wycena zawsze po bezpłatnej diagnostyce.
            </p>
          </div>
          <div className="space-y-3 reveal reveal-delay-1">
            {pricing.map((item) => (
              <div
                key={item.service}
                className={`flex items-center justify-between px-6 py-5 rounded-2xl border transition-all ${
                  item.highlight
                    ? 'bg-blue-600 border-blue-600 shadow-lg shadow-blue-100'
                    : 'bg-gray-50 border-gray-100 hover:border-blue-200 hover:shadow-sm'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${item.highlight ? 'bg-white/20' : 'bg-white border border-gray-200'}`}>
                    <CheckCircle className={`w-5 h-5 ${item.highlight ? 'text-white' : 'text-green-500'}`} />
                  </div>
                  <span className={`font-semibold ${item.highlight ? 'text-white text-lg' : 'text-gray-700'}`}>
                    {item.service}
                  </span>
                </div>
                <span className={`font-extrabold text-lg shrink-0 ml-4 px-4 py-1.5 rounded-full ${
                  item.highlight
                    ? 'bg-white text-blue-700'
                    : 'bg-blue-600 text-white'
                }`}>
                  {item.price}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-6 reveal reveal-delay-2">
            * Ceny mogą różnić się w zależności od stopnia uszkodzenia i modelu urządzenia.
            Ostateczna wycena po diagnostyce — zawsze przed przystąpieniem do naprawy.
          </p>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <span className="text-blue-700 font-semibold uppercase tracking-widest text-sm">Galeria</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              Sprzęt, który naprawiam
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Naprawiam drukarki i urządzenia wielofunkcyjne najpopularniejszych marek.
            </p>
          </div>

          {/* Brand grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-16 reveal">
            {[
              'HP', 'Samsung', 'Brother', 'Kyocera', 'Ricoh',
              'Canon', 'Konica-Minolta', 'Sharp', 'Oki', 'Lexmark',
            ].map((brand) => (
              <div
                key={brand}
                className="bg-white rounded-xl px-4 py-5 text-center font-bold text-gray-700 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 hover:text-blue-700 transition-all duration-200"
              >
                {brand}
              </div>
            ))}
          </div>

          {/* Photo gallery marquee */}
          <div className="relative overflow-hidden reveal reveal-delay-1">
            <div className="flex gap-6 marquee-content animate-marquee w-max">
              {[
                ...[
                  { src: '/gallery/hp.webp', alt: 'HP' },
                  { src: '/gallery/samsung.jpg', alt: 'Samsung' },
                  { src: '/gallery/brother.jpg', alt: 'Brother' },
                  { src: '/gallery/kyocera.webp', alt: 'Kyocera' },
                  { src: '/gallery/ricoh.jpg', alt: 'Ricoh' },
                  { src: '/gallery/canon.webp', alt: 'Canon' },
                  { src: '/gallery/konica.jpg', alt: 'Konica-Minolta' },
                  { src: '/gallery/sharp.jpg', alt: 'Sharp' },
                  { src: '/gallery/oki.jpg', alt: 'Oki' },
                  { src: '/gallery/lexmark.jpg', alt: 'Lexmark' },
                ],
                ...[
                  { src: '/gallery/hp.webp', alt: 'HP' },
                  { src: '/gallery/samsung.jpg', alt: 'Samsung' },
                  { src: '/gallery/brother.jpg', alt: 'Brother' },
                  { src: '/gallery/kyocera.webp', alt: 'Kyocera' },
                  { src: '/gallery/ricoh.jpg', alt: 'Ricoh' },
                  { src: '/gallery/canon.webp', alt: 'Canon' },
                  { src: '/gallery/konica.jpg', alt: 'Konica-Minolta' },
                  { src: '/gallery/sharp.jpg', alt: 'Sharp' },
                  { src: '/gallery/oki.jpg', alt: 'Oki' },
                  { src: '/gallery/lexmark.jpg', alt: 'Lexmark' },
                ],
              ].map((img, i) => (
                <div
                  key={i}
                  className="group relative w-72 h-48 rounded-2xl overflow-hidden bg-gray-200 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 shrink-0"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">{img.alt}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OPINIE */}
      <section id="opinie" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <span className="text-blue-700 font-semibold uppercase tracking-widest text-sm">Opinie</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              Co mówią moi klienci
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((r, i) => (
              <div key={r.name} className={`reveal reveal-delay-${Math.min(i+1,4) as 1|2|3|4} bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col`}>
                <Quote className="w-7 h-7 text-blue-200 mb-3 shrink-0" />
                <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">"{r.text}"</p>
                <div>
                  <div className="flex gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className={`w-4 h-4 ${j < r.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'}`} />
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-sm shrink-0">
                      {r.name[0]}
                    </div>
                    <p className="font-bold text-gray-800 text-sm">{r.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-blue-800 via-blue-700 to-blue-700">
        <div className="max-w-3xl mx-auto px-4 text-center reveal">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Naprawię Twoją drukarkę już w 24h
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
            <a
              href="#kontakt"
              className="flex items-center gap-2 border-2 border-white text-white font-bold px-8 py-3.5 rounded-full text-lg hover:bg-white/10 transition-colors"
            >
              Wyślij zgłoszenie
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <span className="text-blue-700 font-semibold uppercase tracking-widest text-sm">Kontakt</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-8">
              Skontaktuj się ze mną
            </h2>
            <div className="space-y-5">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-4 text-gray-700 hover:text-blue-700 transition-colors group"
              >
                <div className="bg-blue-100 group-hover:bg-blue-200 text-blue-700 p-3 rounded-xl transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">Telefon</div>
                  <div className="font-semibold text-lg">{PHONE}</div>
                </div>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 text-gray-700 hover:text-blue-700 transition-colors group"
              >
                <div className="bg-blue-100 group-hover:bg-blue-200 text-blue-700 p-3 rounded-xl transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">E-mail</div>
                  <div className="font-semibold text-lg">{EMAIL}</div>
                </div>
              </a>
              <div className="flex items-center gap-4 text-gray-700">
                <div className="bg-blue-100 text-blue-700 p-3 rounded-xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">Adres</div>
                  <div className="font-semibold">{ADDRESS}</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <div className="bg-blue-100 text-blue-700 p-3 rounded-xl">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">Godziny otwarcia</div>
                  <div className="font-semibold">Pn – Pt: {HOURS_WEEKDAY}</div>
                  <div className="font-semibold">Sobota: {HOURS_SATURDAY}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Zgłoszenie wysłane!</h3>
                <p className="text-gray-500">
                  Dziękuję za kontakt. Odezwę się do Ciebie najszybciej jak to możliwe.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-blue-600 font-semibold hover:underline"
                >
                  Wyślij kolejne zgłoszenie
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-gray-800 mb-6">Zgłoś usterkę drukarki</h3>
                <form  className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
    <div>
      <label className="block text-sm font-medium text-gray-800 mb-1">
        Imię i nazwisko <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        required
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full border border-gray-400 bg-gray-50 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-900 placeholder:text-gray-400"
        placeholder="Jan Kowalski"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-800 mb-1">
        Telefon <span className="text-red-500">*</span>
      </label>
      <input
        type="tel"
        required
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="w-full border border-gray-400 bg-gray-50 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-900 placeholder:text-gray-400"
        placeholder="+48 000 000 000"
      />
    </div>
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-800 mb-1">E-mail</label>
    <input
      type="email"
      value={formData.email}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      className="w-full border border-gray-400 bg-gray-50 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-900 placeholder:text-gray-400"
      placeholder="jan@example.com"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-800 mb-1">Model drukarki</label>
    <input
      type="text"
      value={formData.printerModel}
      onChange={(e) => setFormData({ ...formData, printerModel: e.target.value })}
      className="w-full border border-gray-400 bg-gray-50 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-900 placeholder:text-gray-400"
      placeholder="np. HP LaserJet Pro MFP M130fw"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-800 mb-1">
      Opis problemu <span className="text-red-500">*</span>
    </label>
    <textarea
      required
      rows={4}
      value={formData.problem}
      onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
      className="w-full border border-gray-400 bg-gray-50 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm resize-none text-gray-900 placeholder:text-gray-400"
      placeholder="Opisz krótko co się dzieje z Twoją drukarką..."
    />
  </div>
                  {/* FILE UPLOAD */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Zdjęcia / pliki (opcjonalnie)
                    </label>
                    <div
                      className={`relative border-2 border-dashed rounded-xl px-4 py-5 text-center transition-colors ${
                        dragOver ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
                      }`}
                    >
                      <input
                        ref={fileInputRef}
                        name="attachment"
                        type="file"
                        multiple
                        accept="image/*,.pdf,.doc,.docx"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
                        onDragLeave={() => setDragOver(false)}
                        onChange={(e) => {
                          const picked = Array.from(e.target.files ?? [])
                          setFiles((prev) => [...prev, ...picked].slice(0, 5))
                        }}
                      />
                      <div className="flex flex-col items-center gap-2 text-gray-400 pointer-events-none">
                        <div className="flex gap-2">
                          <ImageIcon className="w-5 h-5" />
                          <Paperclip className="w-5 h-5" />
                        </div>
                        <p className="text-xs">
                          <span className="font-semibold text-blue-600">Kliknij</span> lub przeciągnij pliki tutaj
                        </p>
                        <p className="text-xs text-gray-300">JPG, PNG, PDF, DOC — maks. 5 plików</p>
                      </div>
                    </div>
                    {files.length > 0 && (
                      <ul className="mt-2 space-y-1">
                        {files.map((f, i) => (
                          <li key={i} className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-1.5 text-sm">
                            <div className="flex items-center gap-2 text-gray-700 truncate">
                              <Paperclip className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                              <span className="truncate max-w-[200px]">{f.name}</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => setFiles(files.filter((_, j) => j !== i))}
                              className="ml-2 text-gray-400 hover:text-red-500 transition-colors shrink-0"
                            >
                              <XIcon className="w-3.5 h-3.5" />
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                              {!isFormValid && (
    <p className="text-xs text-gray-500">
      Uzupełnij wymagane pola: {[
        !formData.name.trim() && 'imię i nazwisko',
        !formData.phone.trim() && 'telefon',
        !formData.problem.trim() && 'opis problemu',
      ].filter(Boolean).join(', ')}
    </p>
  )}

  {error && (
    <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
      {error}
    </p>
  )}

                   <button
    type="button"
    onClick={handleSubmit}
    disabled={submitting || !isFormValid}
    className="w-full bg-blue-800 hover:bg-blue-900 active:scale-95 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:active:scale-100 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all text-sm"
  >
    <Send className="w-4 h-4" />
    {submitting ? 'Wysyłanie...' : 'Wyślij zgłoszenie'}
  </button>
</form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-white font-extrabold text-2xl">
            <Printer className="w-7 h-7" />
            {COMPANY_NAME}
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} {COMPANY_NAME}. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex gap-5 text-sm">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}