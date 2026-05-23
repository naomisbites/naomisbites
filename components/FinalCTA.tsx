const WA_LINK =
  'https://wa.me/6285190825988?text=Halo+Naomi!+Saya+mau+pesan+kue+%F0%9F%8D%AA'

export default function FinalCTA() {
  return (
    <section className="bg-navy py-20 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/3 rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
          Siap memesan?
        </p>

        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-6">
          Slot hari ini masih ada.
          <span className="text-gold italic block mt-1">
            Tapi tidak untuk selamanya.
          </span>
        </h2>

        <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Ingat: Naomi hanya membuat{' '}
          <strong className="text-white">4 toples per hari</strong>. Kalau kamu
          sudah baca sampai sini, kamu sudah tahu mengapa. Sekarang waktunya
          pesan sebelum habis.
        </p>

        {/* Product pricing reminder */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <div className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-left">
            <p className="text-white/60 text-xs mb-1">Kue Nastar</p>
            <p className="font-display font-bold text-white text-2xl">Rp 75.000</p>
            <p className="text-white/50 text-xs">per toples (~30 pcs)</p>
          </div>
          <div className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-left">
            <p className="text-white/60 text-xs mb-1">Kue Putri Salju</p>
            <p className="font-display font-bold text-white text-2xl">Rp 70.000</p>
            <p className="text-white/50 text-xs">per toples (~30 pcs)</p>
          </div>
        </div>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gold text-white font-bold px-10 py-4 rounded-full hover:bg-gold-light transition-colors text-base sm:text-lg shadow-lg shadow-gold/30"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Pesan Sekarang via WhatsApp
        </a>

        <p className="text-white/40 text-xs mt-4">
          Balas dalam 1–3 jam · Jam kerja 08.00–17.00 WITA
        </p>
      </div>
    </section>
  )
}
