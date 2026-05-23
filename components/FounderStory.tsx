export default function FounderStory() {
  return (
    <section
      style={{
        backgroundColor: '#F3F8FF',
        padding: '48px 28px 52px',
        fontFamily: 'var(--font-plus-jakarta)',
      }}
    >
      {/* Label */}
      <p
        style={{
          color: '#C8820A',
          fontSize: '12px',
          fontWeight: 700,
          letterSpacing: '2.4px',
          textTransform: 'uppercase',
          marginBottom: '8px',
        }}
      >
        Nota dari Founder
      </p>

      {/* Headline — width 295px matches Figma exactly for correct line breaks */}
      <h2
        style={{
          color: '#1C355E',
          fontSize: '30px',
          fontWeight: 700,
          lineHeight: '37.8px',
          maxWidth: '310px',
          marginBottom: '40px',
        }}
      >
        Bukan sekedar kue. Ini tentang rasa yang kamu rindukan.
      </h2>

      {/* Photo + Quote row */}
      <div
        style={{
          display: 'flex',
          gap: '18px',
          alignItems: 'flex-start',
          marginBottom: '40px',
        }}
      >
        {/* Photo */}
        <div
          style={{
            width: '196px',
            height: '214px',
            flexShrink: 0,
            borderRadius: '20px',
            border: '2px solid #C8820A',
            overflow: 'hidden',
          }}
        >
          <img
            src="/images/naomi-photo.jpg"
            alt="Naomi, Founder of Naomi's Bites"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
            }}
          />
        </div>

        {/* Quote + attribution */}
        <div style={{ paddingTop: '19px', flex: 1 }}>
          <p
            style={{
              color: '#1C355E',
              fontSize: '12px',
              fontWeight: 600,
              fontStyle: 'italic',
              lineHeight: '20px',
              marginBottom: '14px',
            }}
          >
            &ldquo;Aku cari nastar yang rasanya kayak homemade. Nggak ketemu. Jadi aku buat sendiri&rdquo;.
          </p>
          <p
            style={{
              color: '#C8820A',
              fontSize: '12px',
              fontWeight: 700,
              lineHeight: '20px',
            }}
          >
            – Naomi, Founder
          </p>
        </div>
      </div>

      {/* Body copy — exact Figma text, paragraph by paragraph */}
      {[
        <>Halo, aku Naomi. Aku tumbuh di Palembang, kota yang orang-orangnya emang nggak bisa kompromi soal makanan 😂 </>,
        <>Di sana, kue homemade itu hal yang biasa. Nastar, putri salju ; semua orang tau mana yang beneran enak dan mana yang nggak.</>,
        <>Pas pindah ke Bali, rasa itu semakin menghilang. Mau beli di mana pun, selalu ada yang kurang. Jadi aku bikin sendiri. </>,
        <>Tiga bulan nyempurnain resep, sampai akhirnya ketemu yang beneran pas. Naomi&apos;s Bites aku buat khusus untuk kamu yang kangen <span style={{ textDecoration: 'underline' }}>rumah</span>; dengan&nbsp;<strong style={{ fontWeight: 700 }}>Wijsman butter</strong>,&nbsp;<strong style={{ fontWeight: 700 }}>nanas asli</strong>. Sementara aku batasi produksi 4 toples per hari dulu yaa.</>,
        <>Karena bagiku, kualitas nggak bisa dikompromikan.</>,
      ].map((para, i) => (
        <p
          key={i}
          style={{
            color: '#1C355E',
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: '20px',
            marginTop: i === 0 ? 0 : '16px',
          }}
        >
          {para}
        </p>
      ))}
    </section>
  )
}
