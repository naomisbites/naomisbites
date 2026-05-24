import type { Metadata } from 'next'
import SectionRedirect from '@/components/SectionRedirect'

export const metadata: Metadata = {
  title: 'FAQ — Naomi\'s Bites',
  description: 'Pertanyaan yang sering ditanyain soal nastar dan putri salju Naomi\'s Bites: berapa lama tahan, ada rasa lain nggak, bisa untuk hampers, dan cara pesan.',
  alternates: {
    canonical: 'https://naomisbites.vercel.app/faq',
  },
  openGraph: {
    title: 'FAQ — Naomi\'s Bites',
    description: 'Pertanyaan yang sering ditanyain soal nastar dan putri salju Naomi\'s Bites.',
    url: 'https://naomisbites.vercel.app/faq',
  },
}

export default function FAQPage() {
  return <SectionRedirect href="/#faq" />
}
