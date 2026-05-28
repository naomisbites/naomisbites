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
      priceRange: 'Rp 132.000 - Rp 148.000',
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
        price: '148000',
        priceCurrency: 'IDR',
        availability: 'https://schema.org/InStock',
        url: `${siteUrl}#products`,
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Bagaimana cara memesan Naomi\'s Bites?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pesan langsung via WhatsApp ke +62 851-9082-5988. Pilih produk dan ukuran toples, lalu konfirmasi alamat pengiriman.',
          },
        },
        {
          '@type': 'Question',
          name: 'Apakah Naomi\'s Bites bisa dikirim ke seluruh Indonesia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ya, kami mengirim ke seluruh Indonesia menggunakan jasa ekspedisi pilihan.',
          },
        },
        {
          '@type': 'Question',
          name: 'Apa yang membuat Naomi\'s Bites berbeda dari kue kering lainnya?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Kami menggunakan Wijsman butter (bukan margarin) dan nanas asli untuk isian nastar. Setiap kue dibentuk dan ditimbang gram per gram — tidak ada mesin, tidak ada kompromi.',
          },
        },
        {
          '@type': 'Question',
          name: 'Berapa lama kue Naomi\'s Bites bisa tahan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Kue tahan hingga 3 minggu dalam toples tertutup di suhu ruangan, dan hingga 1 bulan jika disimpan di lemari es.',
          },
        },
        {
          '@type': 'Question',
          name: 'Berapa minimum pemesanan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Minimum pemesanan adalah 1 toples. Tersedia ukuran 600ml dan 800ml.',
          },
        },
        {
          '@type': 'Question',
          name: 'Metode pembayaran apa saja yang tersedia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Kami menerima transfer bank dan konfirmasi pembayaran via WhatsApp.',
          },
        },
      ],
    },
    {
      '@type': 'Product',
      name: 'Kue Putri Salju',
      description:
        'Kue putri salju homemade dengan tekstur rapuh yang lumer di mulut, dibuat dengan Wijsman butter dan taburan gula halus.',
      brand: { '@type': 'Brand', name: "Naomi's Bites" },
      offers: {
        '@type': 'Offer',
        price: '132000',
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
