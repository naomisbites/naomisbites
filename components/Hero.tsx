const WA_LINK =
  'https://wa.me/6285190825988?text=Halo+Naomi!+Saya+mau+tanya-tanya+soal+kue+%F0%9F%98%8A'

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        height: '100svh',
        minHeight: '700px',
        maxHeight: '900px',
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
      <div className="absolute inset-x-0 bottom-0 z-10 pb-10 px-8">

        {/* Headline */}
        <h1
          className="text-white text-center text-[25px] leading-[34px] font-medium mb-4"
          style={{ fontFamily: 'var(--font-plus-jakarta)' }}
        >
          Rasa yang selalu kamu rindukan,{' '}
          kini hadir dari dapur kami di{' '}
          <span className="font-bold">Bali.</span>
        </h1>

        {/* Body */}
        <p
          className="text-white/80 text-center text-[15px] leading-[22px] font-normal mb-8"
          style={{ fontFamily: 'var(--font-plus-jakarta)' }}
        >
          Dibuat dari Wijsman butter dan nanas asli.{' '}
          Dikirim ke seluruh Indonesia.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
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
