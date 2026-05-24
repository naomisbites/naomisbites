import Link from 'next/link'

export const metadata = {
  title: 'Info Penting — Naomi\'s Bites',
  description: 'Hal-hal penting yang perlu kamu tahu sebelum memesan dari Naomi\'s Bites.',
}

const SECTIONS = [
  {
    title: 'Pemesanan',
    items: [
      'Semua pesanan dilakukan melalui WhatsApp.',
      'Pesanan dianggap sah setelah konfirmasi dari Naomi.',
      'Mohon pesan minimal 1 hari sebelumnya.',
    ],
  },
  {
    title: 'Pembayaran',
    items: [
      'Pembayaran dilakukan di muka (full payment) setelah pesanan dikonfirmasi.',
      'Metode pembayaran: transfer bank atau dompet digital (GoPay, OVO, QRIS).',
      'Pesanan baru diproses setelah pembayaran diterima.',
    ],
  },
  {
    title: 'Pengiriman',
    items: [
      'Kami mengirim ke seluruh Indonesia via JNE, J&T, atau SiCepat.',
      'Ongkos kirim ditanggung pembeli.',
      'Kami tidak bertanggung jawab atas keterlambatan yang disebabkan oleh pihak kurir.',
    ],
  },
  {
    title: 'Produk',
    items: [
      'Semua produk dibuat fresh dengan bahan berkualitas.',
      'Ketahanan produk: 2 minggu suhu ruangan, 1 bulan di kulkas.',
      'Kami tidak menerima pengembalian produk kecuali ada kerusakan saat diterima.',
    ],
  },
  {
    title: 'Kerusakan Produk',
    items: [
      'Jika produk sampai dalam kondisi rusak, segera hubungi Naomi dalam 24 jam setelah diterima.',
      'Sertakan foto kondisi produk dan kemasan untuk proses klaim.',
      'Klaim yang diterima akan diproses dalam bentuk penggantian produk.',
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
          Hal-hal yang perlu kamu tahu sebelum pesan.
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
            Langsung chat Naomi — lebih cepat dan lebih personal.
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
