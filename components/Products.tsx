import { supabase, type Product } from '@/lib/supabase'

const WA_NASTAR =
  'https://wa.me/6285190825988?text=Halo+Naomi!+Saya+mau+pesan+Kue+Nastar+%F0%9F%8D%AA'
const WA_PUTRI =
  'https://wa.me/6285190825988?text=Halo+Naomi!+Saya+mau+pesan+Kue+Putri+Salju+%E2%9D%84%EF%B8%8F'

// Static product config — images + WA links keyed by slug
const PRODUCT_META: Record<string, { image: string; waLink: string; isNew: boolean }> = {
  'kue-nastar':     { image: '/images/nastar.jpg',      waLink: WA_NASTAR, isNew: false },
  'kue-putri-salju':{ image: '/images/putri-salju.jpg', waLink: WA_PUTRI,  isNew: true  },
}

const FALLBACK_PRODUCTS = [
  {
    id: '1',
    slug: 'kue-nastar',
    name: 'Kue Nastar',
    subtitle: 'Classic Pineapple Tart',
    price: 75000,
    badges: ['Wijsman Butter', 'Nanas Asli', 'Buatan Tangan'],
  },
  {
    id: '2',
    slug: 'kue-putri-salju',
    name: 'Kue Putri Salju',
    subtitle: 'Snow White Cookies',
    price: 70000,
    badges: ['Wijsman Butter', 'Buatan Tangan'],
  },
]

function formatRupiah(amount: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount)
}

async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_available', true)
    .order('created_at', { ascending: true })

  if (error || !data || data.length === 0) return []
  return data
}

function WhatsAppIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="white"
      style={{ flexShrink: 0 }}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default async function Products() {
  const dbProducts = await getProducts()

  // Merge DB data with static meta, or use fallback
  const products =
    dbProducts.length > 0
      ? dbProducts.map((p) => ({
          id: p.id,
          slug: p.slug,
          name: p.name,
          subtitle: p.slug === 'kue-nastar' ? 'Classic Pineapple Tart' : 'Snow White Cookies',
          price: p.price,
          badges:
            p.slug === 'kue-nastar'
              ? ['Wijsman Butter', 'Nanas Asli', 'Buatan Tangan']
              : ['Wijsman Butter', 'Buatan Tangan'],
        }))
      : FALLBACK_PRODUCTS

  return (
    <section
      id="products"
      style={{
        backgroundColor: '#FAF7F2',
        padding: '48px 24px 56px',
        fontFamily: 'var(--font-plus-jakarta)',
      }}
    >
      {/* Section label */}
      <p
        style={{
          color: '#C8820A',
          fontSize: '12px',
          fontWeight: 700,
          letterSpacing: '2.4px',
          textTransform: 'uppercase',
          marginBottom: '6px',
        }}
      >
        Produk Kami
      </p>

      {/* Headline */}
      <h2
        style={{
          color: '#1C355E',
          fontSize: '28px',
          fontWeight: 700,
          lineHeight: '1.2',
          marginBottom: '32px',
        }}
      >
        Pilih favoritmu.
      </h2>

      {/* Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {products.map((product) => {
          const meta = PRODUCT_META[product.slug] ?? {
            image: '/images/hero-bg-hq.jpg',
            waLink: WA_NASTAR,
            isNew: false,
          }

          return (
            <div
              key={product.id}
              style={{
                backgroundColor: '#fff',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 2px 16px rgba(28,53,94,0.08)',
                position: 'relative',
              }}
            >
              {/* "Baru" badge — only on new products */}
              {meta.isNew && (
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    right: '14px',
                    zIndex: 2,
                    backgroundColor: '#C8820A',
                    color: '#fff',
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '5px 12px',
                    borderRadius: '20px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                  }}
                >
                  ✦ Baru
                </div>
              )}

              {/* Product photo */}
              <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                <img
                  src={meta.image}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 30%',
                  }}
                />
              </div>

              {/* Card content */}
              <div style={{ padding: '18px 20px 22px' }}>
                {/* Name + price row */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '4px',
                  }}
                >
                  <div>
                    <h3
                      style={{
                        color: '#1C355E',
                        fontSize: '20px',
                        fontWeight: 700,
                        margin: 0,
                        lineHeight: '1.2',
                      }}
                    >
                      {product.name}
                    </h3>
                    <p
                      style={{
                        color: '#6B7280',
                        fontSize: '13px',
                        margin: '3px 0 0',
                        fontStyle: 'italic',
                      }}
                    >
                      {product.subtitle}
                    </p>
                  </div>
                  <span
                    style={{
                      color: '#C8820A',
                      fontSize: '20px',
                      fontWeight: 700,
                      whiteSpace: 'nowrap',
                      paddingTop: '2px',
                    }}
                  >
                    {formatRupiah(product.price)}
                  </span>
                </div>

                {/* Ingredient badges */}
                <div
                  style={{
                    display: 'flex',
                    gap: '6px',
                    marginTop: '14px',
                    marginBottom: '18px',
                    flexWrap: 'wrap',
                  }}
                >
                  {product.badges.map((b) => (
                    <span
                      key={b}
                      style={{
                        backgroundColor: '#EEF3FB',
                        color: '#1C355E',
                        fontSize: '11px',
                        fontWeight: 600,
                        padding: '4px 10px',
                        borderRadius: '20px',
                      }}
                    >
                      {b}
                    </span>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <a
                  href={meta.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '9px',
                    backgroundColor: '#25D366',
                    color: '#fff',
                    padding: '15px',
                    borderRadius: '12px',
                    fontWeight: 700,
                    fontSize: '15px',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-plus-jakarta)',
                  }}
                >
                  <WhatsAppIcon />
                  Pesan via WhatsApp
                </a>
              </div>
            </div>
          )
        })}
      </div>

      {/* Footer note */}
      <p
        style={{
          color: '#9CA3AF',
          fontSize: '11px',
          textAlign: 'center',
          marginTop: '22px',
        }}
      >
        Maks. 4 toples per hari · Dikirim ke seluruh Indonesia
      </p>
    </section>
  )
}
