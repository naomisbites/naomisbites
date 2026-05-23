const proofPoints = [
  {
    number: '01',
    icon: '🧈',
    title: 'Wijsman Butter',
    subtitle: 'Bukan margarin. Bukan butter generic.',
    body: 'Wijsman adalah premium European-style butter yang memberikan aroma dan tekstur yang tidak bisa ditiru. Semua orang yang pernah makan tahu bedanya.',
    highlight: 'Bisa kamu rasakan langsung di gigitan pertama.',
  },
  {
    number: '02',
    icon: '🍍',
    title: 'Nanas Asli',
    subtitle: 'Bukan selai sachet dari toko.',
    body: 'Isian nastar kami dibuat dari nanas segar yang direbus dan dimasak sendiri. Tidak ada tambahan perisa buatan. Asam manisnya alami.',
    highlight: 'Begitulah cara nenek-nenek dulu membuatnya.',
  },
  {
    number: '03',
    icon: '⚖️',
    title: 'Gram per Gram',
    subtitle: 'Setiap kue ditimbang satu per satu.',
    body: 'Tidak ada yang lebih besar atau lebih kecil. Tidak ada yang lebih matang atau kurang matang. Setiap kue mendapatkan perhatian yang sama — karena begitulah cara yang benar.',
    highlight: 'Tidak ada mesin. Hanya tangan Naomi.',
  },
  {
    number: '04',
    icon: '📦',
    title: 'Maks. 4 Toples / Hari',
    subtitle: 'Bukan keputusan bisnis. Tapi keputusan kualitas.',
    body: 'Ketika kamu membuat sesuatu dengan benar, ada batas kapasitas. Batas itu adalah bukti nyata bahwa kami tidak berkompromi untuk memenuhi permintaan.',
    highlight: 'Kalau sold out, berarti kamu terlambat pesan.',
  },
]

export default function TheDifference() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Kenapa berbeda
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-navy leading-tight mb-4">
            Nastar biasa sudah banyak.
            <span className="text-gold italic block">
              Yang seperti ini, belum tentu.
            </span>
          </h2>
          <p className="text-text-muted text-base sm:text-lg leading-relaxed">
            Naomi tidak menciptakan produk baru. Dia mengambil resep yang sudah
            ada — dan menolak semua jalan pintas yang biasanya diambil orang
            lain.
          </p>
        </div>

        {/* Proof point cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {proofPoints.map((point) => (
            <div
              key={point.number}
              className="bg-white rounded-2xl p-6 border border-cream-dark hover:shadow-md transition-shadow group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{point.icon}</span>
                <span className="font-display font-bold text-navy/10 text-4xl leading-none group-hover:text-gold/20 transition-colors">
                  {point.number}
                </span>
              </div>
              <h3 className="font-display font-bold text-navy text-xl mb-1">
                {point.title}
              </h3>
              <p className="text-gold text-xs font-semibold mb-3 uppercase tracking-wide">
                {point.subtitle}
              </p>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                {point.body}
              </p>
              <p className="text-navy text-xs font-semibold italic border-t border-cream-dark pt-3">
                &ldquo;{point.highlight}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* Bottom belief shift callout */}
        <div className="mt-14 bg-navy rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-white/60 text-sm mb-2">Cara lama</p>
            <p className="text-white font-display text-xl md:text-2xl font-semibold line-through decoration-gold decoration-2">
              Beli nastar di supermarket, cukup lah.
            </p>
          </div>
          <div className="hidden md:block w-8 text-gold text-2xl">→</div>
          <div>
            <p className="text-gold text-sm mb-2">Cara Naomi&apos;s Bites</p>
            <p className="text-white font-display text-xl md:text-2xl font-semibold">
              Pesan yang dibuat dengan tangan, untuk rasa yang benar-benar kamu ingat.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
