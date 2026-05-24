import type { Metadata } from 'next'
import SectionRedirect from '@/components/SectionRedirect'

export const metadata: Metadata = {
  title: 'Produk — Naomi\'s Bites',
  description: 'Nastar dan putri salju homemade dari Bali. Dibuat dengan Wijsman butter dan nanas asli. Rp 70.000–75.000 per toples, kirim ke seluruh Indonesia.',
  alternates: {
    canonical: 'https://naomisbites.vercel.app/produk',
  },
  openGraph: {
    title: 'Produk — Naomi\'s Bites',
    description: 'Nastar dan putri salju homemade dari Bali. Dibuat dengan Wijsman butter dan nanas asli.',
    url: 'https://naomisbites.vercel.app/produk',
  },
}

export default function ProdukPage() {
  return <SectionRedirect href="/#products" />
}
