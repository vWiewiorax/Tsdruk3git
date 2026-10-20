import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { formatDate, getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog o drukarkach - porady, usterki i naprawy',
  description:
    'Poradnik serwisanta drukarek: co zrobić, gdy drukarka nie pobiera papieru, drukuje puste kartki, robi smugi albo nie łączy się z Wi-Fi. Praktyczne wskazówki od TSdruk z Podkarpacia.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog TSdruk - porady o drukarkach i kserokopiarkach',
    description:
      'Praktyczne porady o naprawie, konserwacji i wyborze drukarek od serwisanta z ponad 20-letnim doświadczeniem.',
    url: '/blog',
  },
}

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <div className="font-sans text-gray-800 bg-white">
      <SiteNav />

      <section className="bg-gray-50 pt-32 pb-14 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-100 rounded-full opacity-60 blur-3xl pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full mb-5">
            Blog
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
            Porady o drukarkach i kserokopiarkach
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            Najczęstsze usterki, proste rozwiązania, które możesz sprawdzić sam, i podpowiedzi,
            kiedy lepiej oddać urządzenie do serwisu.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-white border border-gray-200 rounded-2xl p-7 hover:border-blue-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readingMinutes} min
                </span>
              </div>
              <h2 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{post.description}</p>
              <span className="flex items-center gap-1 text-blue-700 font-semibold text-sm">
                Czytaj dalej
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
