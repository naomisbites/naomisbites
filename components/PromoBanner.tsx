export default function PromoBanner() {
  return (
    <div style={{ backgroundColor: '#1C355D', padding: '0 16px 16px' }}>
      <div
        style={{
          backgroundColor: '#E8392A',
          borderRadius: 16,
          padding: '16px 16px 16px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
          fontFamily: 'var(--font-plus-jakarta)',
        }}
      >
        {/* Left: label + headline + subtext */}
        <div>
          <p style={{
            color: 'rgba(255,255,255,0.85)',
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '1.8px',
            textTransform: 'uppercase',
            margin: '0 0 4px',
          }}>
            🎉 Promo Opening
          </p>
          <p style={{
            color: '#fff',
            fontSize: 22,
            fontWeight: 800,
            margin: '0 0 2px',
            lineHeight: 1.1,
          }}>
            Diskon 20%
          </p>
          <p style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: 13,
            fontWeight: 400,
            margin: 0,
          }}>
            untuk semua produk
          </p>
        </div>

        {/* Right: badge */}
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.2)',
          borderRadius: 12,
          padding: '12px 16px',
          textAlign: 'center',
          flexShrink: 0,
        }}>
          <p style={{
            color: '#fff',
            fontSize: 24,
            fontWeight: 900,
            margin: 0,
            lineHeight: 1,
          }}>
            20%
          </p>
          <p style={{
            color: 'rgba(255,255,255,0.85)',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '1.5px',
            margin: '2px 0 0',
          }}>
            OFF
          </p>
        </div>
      </div>
    </div>
  )
}
