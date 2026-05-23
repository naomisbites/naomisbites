const tiles = [
  { label: 'Proses membentuk nastar', size: 'tall' },
  { label: 'Isian nanas segar', size: 'normal' },
  { label: 'Toples siap kirim', size: 'normal' },
  { label: 'Wijsman butter', size: 'normal' },
  { label: 'Hasil jadi — close up', size: 'normal' },
  { label: 'Packaging & label', size: 'wide' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-2">
              Behind the scenes
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy">
              Dibuat dengan tangan,
              <span className="text-gold italic"> bukan mesin.</span>
            </h2>
          </div>
          <p className="text-text-muted text-sm max-w-xs">
            Foto asli segera hadir setelah sesi pemotretan. Untuk sekarang —
            bayangkan aromanya. 🍪
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Tile 1 — tall on md+ */}
          <div className="md:row-span-2 bg-cream-dark rounded-2xl overflow-hidden min-h-[180px] md:min-h-full flex items-center justify-center group relative">
            <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-colors" />
            <div className="flex flex-col items-center gap-2 text-navy/30 p-4 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" opacity="0.2">
                <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-8.5 12.5l-3-3.5L4 17h16l-5-6.5-3.5 5z" />
              </svg>
              <span className="text-xs font-medium text-navy/40">{tiles[0].label}</span>
            </div>
          </div>

          {/* Tiles 2–5 */}
          {tiles.slice(1, 5).map((tile, i) => (
            <div
              key={i}
              className="bg-cream-dark rounded-2xl overflow-hidden min-h-[140px] sm:min-h-[180px] flex items-center justify-center group relative"
            >
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-colors" />
              <div className="flex flex-col items-center gap-2 text-navy/30 p-4 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.2">
                  <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-8.5 12.5l-3-3.5L4 17h16l-5-6.5-3.5 5z" />
                </svg>
                <span className="text-xs font-medium text-navy/40">{tile.label}</span>
              </div>
            </div>
          ))}

          {/* Tile 6 — wide */}
          <div className="col-span-2 md:col-span-1 bg-navy rounded-2xl overflow-hidden min-h-[140px] flex items-center justify-center group relative">
            <div className="flex flex-col items-center gap-2 p-4 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white" opacity="0.2">
                <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-8.5 12.5l-3-3.5L4 17h16l-5-6.5-3.5 5z" />
              </svg>
              <span className="text-xs font-medium text-white/40">{tiles[5].label}</span>
            </div>
          </div>
        </div>

        {/* Instagram CTA */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="text-text-muted text-sm">Lihat lebih banyak foto di</span>
          <a
            href="https://www.instagram.com/naomisbitesofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-navy font-semibold text-sm hover:text-gold transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @naomisbitesofficial
          </a>
        </div>
      </div>
    </section>
  )
}
