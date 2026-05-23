import { supabase, type Product } from '@/lib/supabase'

const WA_NASTAR =
  'https://wa.me/6285190825988?text=Halo+Naomi!+Saya+mau+pesan+Kue+Nastar+%F0%9F%8D%AA'
const WA_PUTRI =
  'https://wa.me/6285190825988?text=Halo+Naomi!+Saya+mau+pesan+Kue+Putri+Salju+%E2%9D%84%EF%B8%8F'

const fallbackProducts = [
  {
    id: '1',
    slug: 'kue-nastar',
    name: 'Kue Nastar',
    description:
      'Kulit lembut dari Wijsman butter, isian nanas asli yang asam manis. Setiap kue ditimbang dan dibentuk satu per satu. Sekitar 30 pcs per toples.',
    price: 75000,
    image_url: null,
    is_available: true,
    badge: 'Best Seller',
    badgeColor: 'bg-gold text-white',
    waLink: WA_NASTAR,
    emoji: '🍪',
  },
  {
    id: '2',
    slug: 'kue-putri-salju',
    name: 'Kue Putri Salju',
    description:
      'Tekstur rapuh yang lumer di mulut, dibuat dengan Wijsman butter dan taburan gula halus. Ringan, elegan, dan susah berhenti makan.',
    price: 70000,
    image_url: null,
    is_available: true,
    badge: 'Fan Favourite',
    badgeColor: 'bg-navy text-white',
    waLink: WA_PUTRI,
    emoji: '❄️',
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

export default async function Products() {
  const dbProducts = await getProducts()

  const products =
    dbProducts.length > 0
      ? dbProducts.map((p) => {
          const isNastar = p.slug === 'kue-nastar'
          return {
            ...p,
            badge: isNastar ? 'Best Seller' : 'Fan Favourite',
            badgeColor: isNastar ? 'bg-gold text-white' : 'bg-navy text-white',
            waLink: isNastar ? WA_NASTAR : WA_PUTRI,
            emoji: isNastar ? '🍪' : '❄️',
          }
        })
      : fallbackProducts

  return (
    <section id="products" className="bg-cream-dark py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Produk kami
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy mb-4">
            Dua produk. Dibuat dengan
            <span className="text-gold italic"> satu standar.</span>
          </h2>
          <p className="text-text-muted text-base">
            Tidak ada yang setengah-setengah. Setiap toples melewati tangan
            Naomi sendiri.
          </p>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-cream-dark hover:shadow-lg transition-shadow"
            >
              {/* Image area */}
              <div className="relative bg-cream-dark h-64 flex items-center justify-center">
                <span className="text-8xl opacity-20">{product.emoji}</span>
                {/* Badge */}
                <span
                  className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full ${product.badgeColor}`}
                >
                  {product.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-bold text-navy text-2xl mb-2">
                  {product.name}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-5">
                  {product.description}
                </p>

                {/* Price + CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-text-muted text-xs mb-0.5">Harga per toples</p>
                    <p className="font-display font-bold text-2xl text-gold">
                      {formatRupiah(product.price)}
                    </p>
                    <p className="text-text-muted text-xs">~30 pcs</p>
                  </div>
                  <a
                    href={product.waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-navy text-white text-sm font-semibold px-5 py-3 rounded-full hover:bg-navy-light transition-colors flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Pesan
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note below */}
        <p className="text-center text-text-muted text-sm mt-8">
          💬 Pesan via WhatsApp — kami akan konfirmasi ketersediaan dan jadwal
          pengiriman.
        </p>
      </div>
    </section>
  )
}
