function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="white" style={{ flexShrink: 0 }} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const WA_LINK = 'https://wa.me/6285190825988?text=Halo+Naomi!+Saya+mau+pesan+kue+%F0%9F%8D%AA'

const STEPS = [
  {
    n: '01',
    title: 'Pilih toples kamu',
    body: '600ml atau 800ml. Nastar, Putri Salju — atau dua-duanya sekalian.',
  },
  {
    n: '02',
    title: 'Kirim pesan ke Naomi',
    body: 'Ketuk tombol WhatsApp. Pesan masuk langsung ke HP Naomi.',
  },
  {
    n: '03',
    title: 'Bayar & konfirmasi',
    body: 'Naomi kasih nomor BCA-nya langsung di chat.',
  },
  {
    n: '04',
    title: 'Tunggu di pintu rumah',
    body: '2–3 hari kemudian toples kamu udah ada di depan pintu. Langsung dari dapur Naomi.',
  },
]

export default function HowToOrder() {
  return (
    <section
      id="cara-pesan"
      style={{
        backgroundColor: '#1C355E',
        padding: '52px 24px 60px',
        fontFamily: 'var(--font-plus-jakarta)',
      }}
    >
      {/* Label */}
      <p style={{ color: '#C8820A', fontSize: '11px', fontWeight: 700, letterSpacing: '2.4px', textTransform: 'uppercase', margin: '0 0 10px' }}>
        Cara Pesan
      </p>

      {/* Headline */}
      <h2 style={{ color: '#fff', fontSize: '26px', fontWeight: 800, lineHeight: 1.25, margin: '0 0 6px' }}>
        Dari chat kamu,<br />
        langsung ke <em style={{ color: '#C8820A', fontStyle: 'italic' }}>dapur Naomi</em>.
      </h2>
      <div style={{ margin: '0 0 32px' }} />

      {/* WhatsApp Chat Mockup */}
      <div style={{ backgroundColor: '#0d1117', borderRadius: '20px', overflow: 'hidden', marginBottom: '32px', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
        {/* Chat header */}
        <div style={{ backgroundColor: '#1a2533', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: '#C8820A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 800, color: '#fff', flexShrink: 0 }}>
            N
          </div>
          <div>
            <p style={{ color: '#fff', fontSize: '14px', fontWeight: 700, margin: 0 }}>Naomi 🍪</p>
            <p style={{ color: '#25D366', fontSize: '11px', margin: 0 }}>online</p>
          </div>
        </div>

        {/* Chat bubbles */}
        <div style={{ padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ alignSelf: 'flex-end', backgroundColor: '#005c4b', color: '#fff', padding: '10px 14px', borderRadius: '18px 18px 4px 18px', maxWidth: '78%', fontSize: '13px', lineHeight: 1.5 }}>
            Halo Naomi! Saya mau pesan Kue Nastar 600ml 🍪
            <span style={{ display: 'block', fontSize: '10px', color: 'rgba(255,255,255,0.5)', textAlign: 'right', marginTop: '4px' }}>10:42 ✓✓</span>
          </div>
          <div style={{ alignSelf: 'flex-start', backgroundColor: '#1f2c34', color: '#fff', padding: '10px 14px', borderRadius: '18px 18px 18px 4px', maxWidth: '82%', fontSize: '13px', lineHeight: 1.5 }}>
            Halo! Makasih ya udah pesan 🥰<br />
            Nastar 600ml siap. Total <strong>Rp 132.000</strong>.<br />
            Bisa transfer ke BCA ya — kirim ke mana?
            <span style={{ display: 'block', fontSize: '10px', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>10:43</span>
          </div>
          <div style={{ alignSelf: 'flex-end', backgroundColor: '#005c4b', color: '#fff', padding: '10px 14px', borderRadius: '18px 18px 4px 18px', maxWidth: '70%', fontSize: '13px', lineHeight: 1.5 }}>
            Jakarta Selatan kak 🙏
            <span style={{ display: 'block', fontSize: '10px', color: 'rgba(255,255,255,0.5)', textAlign: 'right', marginTop: '4px' }}>10:44 ✓✓</span>
          </div>
          <div style={{ alignSelf: 'flex-start', backgroundColor: '#1f2c34', color: '#fff', padding: '10px 14px', borderRadius: '18px 18px 18px 4px', maxWidth: '82%', fontSize: '13px', lineHeight: 1.5 }}>
            Siap! Estimasi 2–3 hari sampai. Ditunggu ya 📦✨
            <span style={{ display: 'block', fontSize: '10px', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>10:44</span>
          </div>
        </div>
      </div>

      {/* 4 Steps */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {STEPS.map(s => (
          <div key={s.n} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '12px', backgroundColor: 'rgba(200,130,10,0.15)', border: '1.5px solid #C8820A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ color: '#C8820A', fontSize: '12px', fontWeight: 800 }}>{s.n}</span>
            </div>
            <div>
              <p style={{ color: '#fff', fontSize: '14px', fontWeight: 700, margin: '0 0 3px' }}>{s.title}</p>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', margin: 0, lineHeight: 1.5 }}>{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
