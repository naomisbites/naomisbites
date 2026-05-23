'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Berapa lama daya tahan kuenya?',
    a: 'Kue nastar dan putri salju kami tahan hingga 3–4 minggu dalam suhu ruangan jika disimpan dalam toples tertutup dan tidak terkena langsung sinar matahari. Untuk ketahanan lebih lama, bisa disimpan di kulkas hingga 6 minggu.',
  },
  {
    q: 'Apakah bisa pesan dalam jumlah banyak untuk hampers?',
    a: 'Bisa! Untuk pesanan hampers (5 toples ke atas), silakan hubungi kami via WhatsApp minimal 5 hari sebelum tanggal dibutuhkan. Kami akan konfirmasi ketersediaan dan menyiapkan packaging khusus jika diminta.',
  },
  {
    q: 'Pengiriman ke luar Bali bisa?',
    a: 'Ya, kami kirim ke seluruh Indonesia menggunakan kurir terpercaya (JNE, J&T, SiCepat, dll). Ongkos kirim ditanggung pembeli dan dihitung berdasarkan kota tujuan.',
  },
  {
    q: 'Kenapa maksimal 4 toples per hari?',
    a: 'Karena setiap kue dibuat, dibentuk, dan dipanggang oleh Naomi sendiri. Bukan mesin, bukan karyawan produksi massal. 4 toples adalah kapasitas yang bisa dijaga kualitasnya dengan standar yang tidak mau kami kompromikan.',
  },
  {
    q: 'Apakah menggunakan bahan pengawet?',
    a: 'Tidak ada pengawet buatan. Ketahanan alami kue ini berasal dari kadar gula dan teknik pemanggangan yang tepat, bukan dari bahan kimia tambahan.',
  },
  {
    q: 'Bagaimana cara pemesanan?',
    a: 'Langsung via WhatsApp ke +62 851-9082-5988. Ceritakan produk yang kamu inginkan, jumlah toples, dan kota tujuan. Kami akan balas dalam waktu 1–3 jam (jam kerja Bali, 08.00–17.00 WITA).',
  },
  {
    q: 'Metode pembayaran apa saja yang diterima?',
    a: 'Saat ini kami menerima transfer bank (BCA, Mandiri, BNI), GoPay, OVO, dan QRIS. Detail rekening akan diberikan setelah konfirmasi pesanan.',
  },
  {
    q: 'Apakah produk ini cocok untuk yang alergi gluten?',
    a: 'Kue kami mengandung tepung terigu, sehingga tidak cocok untuk mereka yang sensitif terhadap gluten atau memiliki celiac disease. Jika kamu punya alergi spesifik, silakan tanyakan langsung kepada kami sebelum memesan.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-cream-dark py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Pertanyaan umum
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy mb-4">
            Ada yang masih
            <span className="text-gold italic"> ragu?</span>
          </h2>
          <p className="text-text-muted text-base">
            Semua pertanyaan yang sering kami terima, sudah kami jawab di sini.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className={`bg-white rounded-2xl border transition-colors ${
                  isOpen ? 'border-gold/40' : 'border-cream-dark'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-navy text-sm sm:text-base">
                    {faq.q}
                  </span>
                  <span
                    className={`text-gold shrink-0 text-xl transition-transform duration-200 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-text-muted text-sm leading-relaxed border-t border-cream-dark pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-10 text-center">
          <p className="text-text-muted text-sm mb-4">
            Pertanyaanmu tidak ada di sini?
          </p>
          <a
            href="https://wa.me/6285190825988?text=Halo+Naomi!+Saya+ada+pertanyaan+soal+kue+%F0%9F%98%8A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-navy font-semibold text-sm border-2 border-navy px-6 py-3 rounded-full hover:bg-navy hover:text-white transition-colors"
          >
            Tanya langsung via WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
