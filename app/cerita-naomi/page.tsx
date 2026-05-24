import type { Metadata } from 'next'
import SectionRedirect from '@/components/SectionRedirect'

export const metadata: Metadata = {
  title: 'Cerita Naomi — Naomi\'s Bites',
  description: 'Naomi tumbuh di Palembang, pindah ke Bali, dan nggak nemu nastar yang rasanya seperti buatan sendiri. Jadi dia bikin sendiri — selama tiga bulan, sampai beneran pas.',
  alternates: {
    canonical: 'https://naomisbites.vercel.app/cerita-naomi',
  },
  openGraph: {
    title: 'Cerita Naomi — Naomi\'s Bites',
    description: 'Naomi tumbuh di Palembang, pindah ke Bali, dan nggak nemu nastar yang rasanya seperti buatan sendiri. Jadi dia bikin sendiri.',
    url: 'https://naomisbites.vercel.app/cerita-naomi',
  },
}

export default function CeritaNaomiPage() {
  return <SectionRedirect href="/#founder-story" />
}
