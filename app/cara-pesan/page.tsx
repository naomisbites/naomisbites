import type { Metadata } from 'next'
import SectionRedirect from '@/components/SectionRedirect'

export const metadata: Metadata = {
  title: 'Cara Pesan — Naomi\'s Bites',
  description: 'Cara pesan kue dari Naomi\'s Bites: chat WhatsApp, Naomi konfirmasi estimasi tanggal dan ongkir dulu, baru kamu transfer. Nggak ada kejutan biaya.',
  alternates: {
    canonical: 'https://naomisbites.vercel.app/cara-pesan',
  },
  openGraph: {
    title: 'Cara Pesan — Naomi\'s Bites',
    description: 'Chat WhatsApp, Naomi konfirmasi estimasi tanggal dan ongkir dulu, baru transfer. Nggak ada kejutan biaya.',
    url: 'https://naomisbites.vercel.app/cara-pesan',
  },
}

export default function CaraPesanPage() {
  return <SectionRedirect href="/#cara-pesan" />
}
