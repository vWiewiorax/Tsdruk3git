import type { Metadata, Viewport } from 'next'
import { Geist, Oswald } from 'next/font/google'

import './globals.css'
import CookieConsent from '@/lib/cookies'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'TSdruk — Serwis Drukarek | Naprawa HP, Canon, Brother, Epson',
    template: '%s | TSdruk Serwis Drukarek',
  },
  description:
    'Profesjonalny serwis drukarek. Naprawa drukarek atramentowych, laserowych, igłowych i wielofunkcyjnych HP, Canon, Brother, Epson, Samsung. Diagnostyka, czyszczenie głowic, wymiana bębna i tonera, naprawa podajników papieru.',
  keywords: [
    // PL — usługi
    'serwis drukarek',
    'naprawa drukarek',
    'naprawa drukarki',
    'serwis drukarek Rzeszów',
    'naprawa drukarek Rzeszów',
    'serwis drukarek Podkarpacie',
    'naprawa drukarki laserowej',
    'naprawa drukarki atramentowej',
    'czyszczenie głowic drukujących',
    'wymiana bębna',
    'wymiana tonera',
    'naprawa podajnika papieru',
    'naprawa skanera',
    'naprawa urządzenia wielofunkcyjnego',
    'naprawa ploterów',
    'serwis ksero',
    'naprawa kserokopiarek',
    'diagnostyka drukarki',
    'czyszczenie drukarki',
    'regeneracja tonerów',
    'naprawa drukarki HP',
    'naprawa drukarki Canon',
    'naprawa drukarki Brother',
    'naprawa drukarki Epson',
    'naprawa drukarki Samsung',
    'serwis drukarek biurowych',
    'serwis drukarek dla firm',
    'naprawa drukarki 3D',
    // EN — services
    'printer repair',
    'printer service',
    'printer maintenance',
    'inkjet printer repair',
    'laser printer repair',
    'printhead cleaning',
    'toner replacement',
    'drum replacement',
    'paper feed repair',
    'scanner repair',
    'multifunction printer repair',
    'plotter repair',
    'copier repair',
    'printer diagnostics',
    'office printer service',
    'business printer repair',
    'HP printer repair',
    'Canon printer repair',
    'Brother printer repair',
    'Epson printer repair',
    'Samsung printer repair',
  ],
  authors: [{ name: 'TSdruk' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.tsdruk.pl',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'TSdruk — Serwis Drukarek | Naprawa HP, Canon, Brother, Epson',
    description:
      'Naprawa i serwis drukarek atramentowych, laserowych i wielofunkcyjnych. Diagnostyka, czyszczenie głowic, wymiana bębna i tonera. Szybko i solidnie.',
    url: 'https://www.tsdruk.pl',
    siteName: 'TSdruk',
    images: [
      {
        url: 'https://www.tsdruk.pl/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TSdruk — Serwis Drukarek',
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  metadataBase: new URL('https://www.tsdruk.pl'),
  twitter: {
    card: 'summary_large_image',
    title: 'TSdruk — Serwis Drukarek',
    description:
      'Naprawa drukarek HP, Canon, Brother, Epson i innych. Diagnostyka, czyszczenie głowic, wymiana bębna i tonera.',
    images: ['https://www.tsdruk.pl/og-image.jpg'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pl"
      className={`dark bg-background ${geistSans.variable} ${oswald.variable}`}
    >
      <head>
        {/* Replace content values with your actual verification codes */}
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
        <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'TSdruk',
              description:
                'Profesjonalny serwis i naprawa drukarek atramentowych, laserowych i wielofunkcyjnych. Diagnostyka, czyszczenie głowic, wymiana bębna i tonera, naprawa podajników papieru.',
              url: 'https://www.tsdruk.pl',
              telephone: '+48-YOUR-PHONE',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'YOUR STREET ADDRESS',
                addressLocality: 'YOUR CITY',
                postalCode: 'YOUR POSTAL CODE',
                addressCountry: 'PL',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 'YOUR_LAT',
                longitude: 'YOUR_LNG',
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '08:00',
                  closes: '17:00',
                },
              ],
              priceRange: '$$',
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Usługi serwisowe',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Naprawa drukarek atramentowych' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Naprawa drukarek laserowych' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Czyszczenie głowic drukujących' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wymiana bębna i tonera' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Naprawa podajnika papieru' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Naprawa urządzeń wielofunkcyjnych' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Serwis ploterów' } },
                ],
              },
              sameAs: [
                'https://www.facebook.com/YOUR_PAGE',
                'https://www.instagram.com/YOUR_PAGE',
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}