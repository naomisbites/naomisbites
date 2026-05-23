const testimonials = [
  {
    name: 'Sari W.',
    location: 'Jakarta',
    rating: 5,
    text: 'Jujur gak nyangka bisa sepremium ini. Biasanya nastar yang dikirim online texturenya keras. Ini beneran lembut dan aromanya harum banget. Langsung repeat order.',
    product: 'Kue Nastar',
    avatar: 'SW',
  },
  {
    name: 'Dian P.',
    location: 'Surabaya',
    rating: 5,
    text: 'Putri saljunya legit banget, gula halusnya tidak terlalu manis. Habis dalam 2 hari karena langsung rebutan sama keluarga 😂 Bakal beli lagi sebelum Lebaran.',
    product: 'Kue Putri Salju',
    avatar: 'DP',
  },
  {
    name: 'Reza M.',
    location: 'Bandung',
    rating: 5,
    text: 'Sudah cobain nastar dari banyak tempat. Ini yang paling mirip sama buatan almarhumah ibu saya. Rasanya nostalgia banget. Terima kasih Naomi.',
    product: 'Kue Nastar',
    avatar: 'RM',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-navy py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Kata mereka
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Mereka sudah coba.
            <span className="text-gold italic block">Sekarang giliranmu.</span>
          </h2>
          <p className="text-white/60 text-base">
            Testimoni nyata dari pelanggan yang sudah order. Tidak ada skrip,
            tidak ada endorse berbayar.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <span key={s} className="text-gold text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/90 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-sm shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/50 text-xs">{t.location} · {t.product}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder note */}
        <p className="text-center text-white/30 text-xs mt-8">
          Testimoni di atas akan diperbarui dengan ulasan asli setelah pelanggan pertama masuk.
        </p>
      </div>
    </section>
  )
}
