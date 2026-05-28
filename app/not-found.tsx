import Link from 'next/link'

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: '100svh',
        backgroundColor: '#F3F8FF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 28px',
        fontFamily: 'var(--font-plus-jakarta)',
        textAlign: 'center',
      }}
    >
      <p
        style={{
          color: '#C8820A',
          fontSize: '12px',
          fontWeight: 700,
          letterSpacing: '2.4px',
          textTransform: 'uppercase',
          marginBottom: '16px',
        }}
      >
        Halaman tidak ditemukan
      </p>

      <h1
        style={{
          color: '#1C355E',
          fontSize: '28px',
          fontWeight: 700,
          lineHeight: '36px',
          maxWidth: '280px',
          marginBottom: '16px',
        }}
      >
        Ups, halaman ini tidak ada.
      </h1>

      <p
        style={{
          color: '#1C355E',
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '22px',
          maxWidth: '260px',
          marginBottom: '40px',
          opacity: 0.7,
        }}
      >
        Tapi kuenya masih ada. Yuk balik ke halaman utama.
      </p>

      <Link
        href="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          width: '220px',
          height: '52px',
          backgroundColor: '#0049FF',
          color: '#F1F3F4',
          borderRadius: '10px',
          fontFamily: 'var(--font-plus-jakarta)',
          fontWeight: 700,
          fontSize: '16px',
          textDecoration: 'none',
          boxShadow: '0px 10px 20px rgba(0,0,0,0.15)',
        }}
      >
        Kembali ke Beranda
      </Link>
    </section>
  )
}
