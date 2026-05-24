export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        height: '75svh',
        minHeight: '520px',
        maxHeight: '720px',
        backgroundImage: 'url(/images/hero-bg-hq.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

      {/* Single smooth gradient overlay — no harsh lines */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            to bottom,
            transparent 0%,
            transparent 30%,
            rgba(28, 53, 94, 0.15) 42%,
            rgba(28, 53, 94, 0.6) 52%,
            rgba(28, 53, 94, 0.92) 62%,
            rgba(28, 53, 94, 1) 70%,
            rgba(28, 53, 94, 1) 100%
          )`,
        }}
      />

      {/* Text + CTA — anchored to bottom */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-8" style={{ paddingBottom: '40px' }}>

        {/* H1 — product clarity for ads + SEO */}
        <h1
          className="text-white text-center font-bold mx-auto"
          style={{ fontFamily: 'var(--font-plus-jakarta)', fontSize: '26px', lineHeight: '32px', maxWidth: '320px', marginBottom: '16px' }}
        >
          Kue Nastar &amp; Putri Salju Homemade dari <span style={{ fontWeight: 900 }}>Bali</span>
        </h1>

        {/* Emotional subline */}
        <p
          className="text-white/75 text-center font-normal mx-auto"
          style={{ fontFamily: 'var(--font-plus-jakarta)', fontSize: '15px', lineHeight: '22px', maxWidth: '300px', marginBottom: '40px' }}
        >
          Rasa yang selalu kamu rindukan, kini hadir dari dapur kami di Bali.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a
            href="#products"
            className="flex items-center justify-center gap-2 font-bold text-[17px] rounded-[10px] transition-opacity hover:opacity-90 active:opacity-80"
            style={{
              width: '255px',
              height: '52px',
              backgroundColor: '#0049FF',
              color: '#F1F3F4',
              boxShadow: '0px 10px 20px rgba(0,0,0,0.25)',
              fontFamily: 'var(--font-plus-jakarta)',
            }}
          >
            Pesan Sekarang
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
