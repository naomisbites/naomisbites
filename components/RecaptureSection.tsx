const WA_LINK =
  'https://wa.me/6285190825988?text=Halo+Naomi!+Saya+mau+tanya-tanya+soal+kue+%F0%9F%98%8A'

export default function RecaptureSection() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-8 md:p-14 border border-cream-dark shadow-sm text-center">
          {/* Icon */}
          <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
            🤔
          </div>

          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Belum yakin?
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy mb-4 leading-tight">
            Tidak apa-apa. Naomi siap
            <span className="text-gold italic block">
              menjawab pertanyaanmu.
            </span>
          </h2>

          <p className="text-text-muted text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8">
            Mau tanya soal bahan? Pengiriman? Pesan buat hampers? Atau sekadar
            ingin tahu lebih dulu sebelum pesan — tidak masalah. Chat langsung
            dan Naomi akan balas sendiri.
          </p>

          {/* Process steps */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 text-left">
            {[
              {
                step: '01',
                title: 'Chat di WhatsApp',
                desc: 'Ceritakan apa yang kamu butuhkan. Jumlah, kota tujuan, tanggal dibutuhkan.',
              },
              {
                step: '02',
                title: 'Konfirmasi & bayar',
                desc: 'Naomi konfirmasi ketersediaan dan kirim detail pembayaran.',
              },
              {
                step: '03',
                title: 'Kue dikirim',
                desc: 'Dibuat segar sesuai pesanan, dikemas dengan aman, dan dikirim ke pintumu.',
              },
            ].map((s) => (
              <div key={s.step} className="flex gap-4">
                <span className="font-display font-bold text-gold/30 text-3xl leading-none shrink-0">
                  {s.step}
                </span>
                <div>
                  <p className="font-semibold text-navy text-sm mb-1">
                    {s.title}
                  </p>
                  <p className="text-text-muted text-xs leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-8 py-4 rounded-full hover:bg-navy-light transition-colors text-base"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Tanya Naomi Sekarang
          </a>
        </div>
      </div>
    </section>
  )
}
