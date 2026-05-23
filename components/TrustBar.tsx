const items = [
  { icon: '🧈', text: 'Wijsman Butter Asli' },
  { icon: '🍍', text: 'Nanas Segar — Bukan Selai Sachet' },
  { icon: '⚖️', text: 'Ditimbang Gram per Gram' },
  { icon: '🏡', text: 'Dibuat Sendiri — Bukan Pabrik' },
  { icon: '📦', text: 'Maks. 4 Toples / Hari' },
  { icon: '🚚', text: 'Kirim ke Seluruh Indonesia' },
  // Repeated for infinite scroll effect
  { icon: '🧈', text: 'Wijsman Butter Asli' },
  { icon: '🍍', text: 'Nanas Segar — Bukan Selai Sachet' },
  { icon: '⚖️', text: 'Ditimbang Gram per Gram' },
  { icon: '🏡', text: 'Dibuat Sendiri — Bukan Pabrik' },
  { icon: '📦', text: 'Maks. 4 Toples / Hari' },
  { icon: '🚚', text: 'Kirim ke Seluruh Indonesia' },
]

export default function TrustBar() {
  return (
    <section className="bg-navy py-4 overflow-hidden">
      <div
        className="flex gap-8 w-max"
        style={{ animation: 'marquee 25s linear infinite' }}
      >
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2.5 shrink-0">
            <span className="text-lg">{item.icon}</span>
            <span className="text-white/90 text-sm font-medium whitespace-nowrap">
              {item.text}
            </span>
            <span className="text-gold text-lg ml-4">✦</span>
          </div>
        ))}
      </div>
    </section>
  )
}
