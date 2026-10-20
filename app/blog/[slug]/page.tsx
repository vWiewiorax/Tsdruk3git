import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Clock, Phone } from 'lucide-react'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { formatDate, getAllPosts, getPost, getRelatedPosts } from '@/lib/blog'
import { COMPANY_NAME, PHONE, SITE_URL } from '@/lib/site'

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: PageProps<'/blog/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
    },
  }
}

export default async function BlogPostPage({ params }: PageProps<'/blog/[slug]'>) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()
  const related = getRelatedPosts(post)

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.date,
      inLanguage: 'pl-PL',
      keywords: post.tags.join(', '),
      mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
      author: { '@type': 'Organization', name: COMPANY_NAME, url: SITE_URL },
      publisher: { '@type': 'Organization', name: COMPANY_NAME, url: SITE_URL },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Strona główna', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
        { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
      ],
    },
  ]

  return (
    <div className="font-sans text-gray-800 bg-white">
      <SiteNav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article>
        <header className="bg-gray-50 pt-32 pb-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline mb-6">
              <ArrowLeft className="w-4 h-4" />
              Wszystkie artykuły
            </Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readingMinutes} min czytania
              </span>
            </div>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.html }} />

          <aside className="mt-14 rounded-3xl bg-gradient-to-br from-blue-800 to-blue-600 p-8 sm:p-10 text-white">
            <h2 className="text-2xl font-extrabold mb-3">Drukarka dalej sprawia problemy?</h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Diagnostyka jest bezpłatna, a wycenę dostajesz przed naprawą. Serwis pogwarancyjny
              drukarek i kserokopiarek w Krzemienicy koło Łańcuta, dla Rzeszowa i całego Podkarpacia.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {PHONE}
              </a>
              <Link
                href="/#kontakt"
                className="flex items-center gap-2 border-2 border-white text-white font-bold px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
              >
                Zgłoś usterkę
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </aside>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8">Przeczytaj też</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((p) => (
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

      <SiteFooter />
    </div>
  )
}
