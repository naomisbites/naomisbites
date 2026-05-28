import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600', '700'],
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const siteUrl = 'https://naomisbites.id'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Naomi's Bites — Nastar & Putri Salju Homemade dari Bali",
  description:
    'Nastar dan putri salju homemade dibuat dengan Wijsman butter dan nanas asli. Dibuat gram per gram, dikirim ke seluruh Indonesia.',
  keywords: [
    'nastar homemade',
    'putri salju homemade',
    'kue nastar bali',
    'pesan nastar online',
    'nastar lebaran',
    'nastar wijsman butter',
    'nastar nanas asli',
    'kue kering homemade bali',
    'kue kering bali',
    'pesan kue online indonesia',
  ],
  authors: [{ name: "Naomi's Bites" }],
  creator: "Naomi's Bites",
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: siteUrl,
    siteName: "Naomi's Bites",
    title: "Naomi's Bites — Nastar & Putri Salju Homemade dari Bali",
    description:
      'Nastar dan putri salju homemade dibuat dengan Wijsman butter dan nanas asli. Dikirim ke seluruh Indonesia.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Naomi's Bites — Kue Nastar & Putri Salju Homemade",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Naomi's Bites — Nastar & Putri Salju Homemade dari Bali",
    description:
      'Nastar dan putri salju homemade dibuat dengan Wijsman butter dan nanas asli. Dikirim ke seluruh Indonesia.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': siteUrl,
      name: "Naomi's Bites",
      description:
        'Nastar dan putri salju homemade dibuat dengan Wijsman butter dan nanas asli. Dikirim ke seluruh Indonesia.',
      url: siteUrl,
      telephone: '+6285190825988',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bali',
        addressCountry: 'ID',
      },
      sameAs: ['https://www.instagram.com/naomisbitesofficial'],
      priceRange: 'Rp 116.000 - Rp 148.000',
      servesCuisine: 'Indonesian',
    },
    {
      '@type': 'Product',
      name: 'Kue Nastar',
      description:
        'Kue nastar homemade dengan kulit lembut dari Wijsman butter dan isian nanas asli. Dibuat gram per gram dengan bahan pilihan.',
      brand: { '@type': 'Brand', name: "Naomi's Bites" },
      offers: {
        '@type': 'Offer',
        price: '132000',
        priceCurrency: 'IDR',
        availability: 'https://schema.org/InStock',
        url: `${siteUrl}#products`,
      },
    },
    {
      '@type': 'Product',
      name: 'Kue Putri Salju',
      description:
        'Kue putri salju homemade dengan tekstur rapuh yang lumer di mulut, dibuat dengan Wijsman butter dan taburan gula halus.',
      brand: { '@type': 'Brand', name: "Naomi's Bites" },
      offers: {
        '@type': 'Offer',
        price: '116000',
        priceCurrency: 'IDR',
        availability: 'https://schema.org/InStock',
        url: `${siteUrl}#products`,
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${dmSans.variable} ${plusJakarta.variable}`}
      style={{ colorScheme: 'light' }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Preload hero background — CSS background-images are not auto-optimised by Next.js */}
        <link
          rel="preload"
          href="/images/hero-bg-hq.jpg"
          as="image"
          type="image/jpeg"
        />
      </head>
      <body className="text-navy font-body" style={{ backgroundColor: '#FFFFFF' }}>
        {/* Constrain to mobile width — always shows the mobile layout regardless of screen size */}
        <div
          style={{
            maxWidth: '430px',
            margin: '0 auto',
            minHeight: '100vh',
            backgroundColor: '#FFFFFF',
            position: 'relative',
          }}
        >
          {children}
        </div>
      </body>
    </html>
  )
}
