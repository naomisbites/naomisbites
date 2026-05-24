import type { Metadata } from 'next'
import SectionRedirect from '@/components/SectionRedirect'

export const metadata: Metadata = {
  title: 'Testimoni — Naomi\'s Bites',
  description: 'Kata mereka yang sudah pesan nastar dan putri salju dari Naomi\'s Bites. Video testimonial langsung dari pelanggan kami di seluruh Indonesia.',
  alternates: {
    canonical: 'https://naomisbites.vercel.app/testimoni',
  },
  openGraph: {
    title: 'Testimoni — Naomi\'s Bites',
    description: 'Kata mereka yang sudah pesan nastar dan putri salju dari Naomi\'s Bites.',
    url: 'https://naomisbites.vercel.app/testimoni',
  },
}

export default function TestimoniPage() {
  return <SectionRedirect href="/#testimonials" />
}
