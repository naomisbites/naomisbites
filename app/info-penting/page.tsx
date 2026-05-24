import Link from 'next/link'

export const metadata = {
  title: 'Info Penting — Naomi\'s Bites',
  description: 'Hal-hal penting yang perlu kamu tahu sebelum memesan dari Naomi\'s Bites.',
}

const SECTIONS = [
  {
    title: '📦 Produk Rusak',
    items: [
      'Kuenya sampai rusak atau pecah? WA Naomi dalam 24 jam ya, sertakan foto produk dan kemasannya.',
      'Kalau memang rusak dari pengiriman, kami ganti di order berikutnya.',
    ],
  },
  {
    title: '💸 Refund',
    items: [
      'Uang dikembalikan hanya kalau produknya rusak saat sampai, atau kami ternyata nggak bisa penuhi pesananmu.',
      'Refund karena berubah pikiran atau salah pesan, maaf nggak bisa kami proses ya.',
    ],
  },
  {
    title: '🕐 Antrean & Jadwal',
    items: [
      'Produksi kami batasi biar kualitas tetap terjaga, jadi semua pesanan masuk antrean.',
      'Naomi akan konfirmasi estimasi tanggal dan ongkir dulu sebelum kamu transfer. Nggak ada kejutan.',
      'Begitu sudah bayar, posisi antreanmu aman.',
    ],
  },
  {
    title: '⚠️ Waspada Penipuan',
    items: [
      'Satu-satunya rekening kami: BCA 0212991706 a/n Celly Novanda.',
      'Selalu konfirmasi nomor rekening lewat WhatsApp Naomi langsung sebelum transfer. Jangan percaya rekening yang datang dari SMS, email, atau DM Instagram.',
      'WhatsApp resmi: +62 851-9082-5988. Nggak ada nomor lain.',
    ],
  },
  {
    title: '🚚 Pengiriman',
    items: [
      'Kami kirim ke seluruh Indonesia via JNE, J&T, atau SiCepat. Ongkir ditanggung pembeli.',
      'Keterlambatan dari kurir di luar kendali kami, tapi kalau ada masalah chat Naomi dan kami bantu lacak.',
    ],
  },
]

export default function InfoPenting() {
  return (
    <main style={{ backgroundColor: '#FAF7F2', minHeight: '100svh', fontFamily: 'var(--font-plus-jakarta)' }}>

      {/* Header */}
      <div style={{ backgroundColor: '#1C355D', padding: '56px 24px 40px' }}>
        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            color: 'rgba(255,255,255,0.6)',
            fontSize: 13,
            textDecoration: 'none',
            marginBottom: 24,
          }}
        >
          ← Kembali
        </Link>
        <p style={{ color: '#C8820A', fontSize: 11, fontWeight: 700, letterSpacing: '2.4px', textTransform: 'uppercase', margin: '0 0 8px' }}>
          Naomi&apos;s Bites
        </p>
        <h1 style={{ color: '#fff', fontSize: 28, fontWeight: 800, lineHeight: 1.2, margin: 0 }}>
          Info Penting
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, marginTop: 8, marginBottom: 0 }}>
          Soal kerusakan, refund, antrean, dan cara aman bertransaksi.
        </p>
      </div>

      {/* Content */}
      <div style={{ padding: '40px 24px 64px' }}>
        {SECTIONS.map((section, i) => (
          <div key={i} style={{ marginBottom: 36 }}>
            <h2 style={{ color: '#1C355D', fontSize: 15, fontWeight: 800, margin: '0 0 12px' }}>
              {section.title}
            </h2>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {section.items.map((item, j) => (
                <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#C8820A', fontWeight: 800, fontSize: 14, flexShrink: 0, marginTop: 1 }}>·</span>
                  <span style={{ color: '#374151', fontSize: 13, lineHeight: 1.6 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div style={{ backgroundColor: '#F3F8FF', borderRadius: 16, padding: '20px 20px' }}>
          <p style={{ color: '#1C355D', fontSize: 14, fontWeight: 700, margin: '0 0 6px' }}>Ada pertanyaan?</p>
          <p style={{ color: '#6B7280', fontSize: 13, lineHeight: 1.6, margin: '0 0 16px' }}>
            Langsung chat Naomi, lebih cepat dan lebih personal.
          </p>
          <a
            href="https://wa.me/6285190825988?text=Halo+Naomi!+Saya+mau+tanya+soal+info+penting+%F0%9F%98%8A"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              backgroundColor: '#25D366',
              color: '#fff',
              fontSize: 13,
              fontWeight: 700,
              padding: '10px 20px',
              borderRadius: 50,
              textDecoration: 'none',
            }}
          >
            Chat Naomi
          </a>
        </div>
      </div>
    </main>
  )
}
