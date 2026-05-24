'use client'

import { useState } from 'react'
import Image from 'next/image'

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

interface Props {
  name: string
  subtitle: string
  image: string
  isNew: boolean
  prices: { size: string; originalPrice: string; discountedPrice: string; waLink: string; soldOut?: boolean }[]
  badges: string[]
}

export default function ProductCard({
  name,
  subtitle,
  image,
  isNew,
  prices,
  badges,
}: Props) {
  const firstAvailable = prices.findIndex((p) => !p.soldOut)
  const [selected, setSelected] = useState(firstAvailable >= 0 ? firstAvailable : 0)
  const activeOriginal   = prices[selected]?.originalPrice   ?? ''
  const activeDiscounted = prices[selected]?.discountedPrice ?? ''
  const activeWaLink     = prices[selected]?.waLink          ?? ''
  const activeSoldOut    = prices[selected]?.soldOut         ?? false

  return (
    <div
      style={{
        backgroundColor: '#fff',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
        position: 'relative',
      }}
    >
      {/* "Baru" badge — top right */}
      {isNew && (
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

      {/* Product photo + Hemat badge inside same relative container */}
      <div style={{ width: '100%', height: '260px', overflow: 'hidden', position: 'relative' }}>
        <Image
          src={image}
          alt={`${name} Naomi's Bites — kue kering homemade dari Bali dalam toples kaca`}
          fill
          style={{ objectFit: 'cover', objectPosition: 'center center' }}
          sizes="(max-width: 430px) 100vw, 430px"
          priority={false}
        />
        {/* "Hemat 30%" badge — bottom left of photo */}
        <div
          style={{
            position: 'absolute',
            bottom: '14px',
            left: '14px',
            backgroundColor: '#EF4444',
            color: '#fff',
            fontSize: '12px',
            fontWeight: 700,
            padding: '5px 12px',
            borderRadius: '20px',
            letterSpacing: '0.5px',
          }}
        >
          Hemat 20%
        </div>
      </div>

      {/* Card content */}
      <div style={{ padding: '18px 20px 22px' }}>

        {/* Name + subtitle (left) / Price stack (right) */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '16px',
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
              {name}
            </h3>
            <p
              style={{
                color: '#6B7280',
                fontSize: '13px',
                margin: '3px 0 0',
                fontStyle: 'italic',
              }}
            >
              {subtitle}
            </p>
          </div>

          {/* Price — original crossed out above, discounted below */}
          <div style={{ textAlign: 'right', flexShrink: 0, paddingLeft: '12px' }}>
            <p
              style={{
                color: '#9CA3AF',
                fontSize: '12px',
                textDecoration: 'line-through',
                margin: '0 0 2px',
              }}
            >
              {activeOriginal}
            </p>
            <p
              style={{
                color: '#C8820A',
                fontSize: '22px',
                fontWeight: 800,
                margin: 0,
                lineHeight: 1,
              }}
            >
              {activeDiscounted}
            </p>
          </div>
        </div>

        {/* Size toggle pills */}
        <p
          style={{
            color: '#6B7280',
            fontSize: '11px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            margin: '14px 0 8px',
          }}
        >
          Pilih Varian
        </p>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '18px' }}>
          {prices.map((tier, i) => (
            <button
              key={tier.size}
              onClick={() => !tier.soldOut && setSelected(i)}
              disabled={tier.soldOut}
              style={{
                padding: '7px 18px',
                borderRadius: '20px',
                border: tier.soldOut
                  ? '2px solid #E5E7EB'
                  : `2px solid ${i === selected ? '#1C355E' : '#E5E7EB'}`,
                backgroundColor: tier.soldOut
                  ? '#F3F4F6'
                  : i === selected ? '#1C355E' : 'transparent',
                color: tier.soldOut ? '#C4C8CF' : i === selected ? '#fff' : '#6B7280',
                fontSize: '13px',
                fontWeight: 600,
                cursor: tier.soldOut ? 'not-allowed' : 'pointer',
                fontFamily: 'var(--font-plus-jakarta)',
                transition: 'all 0.15s ease',
                position: 'relative',
              }}
            >
              {tier.soldOut ? (
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <span style={{ textDecoration: 'line-through' }}>{tier.size}</span>
                  <span style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.5px',
                    color: '#E8392A',
                    textDecoration: 'none',
                  }}>
                    Habis
                  </span>
                </span>
              ) : (
                tier.size
              )}
            </button>
          ))}
        </div>

        {/* WhatsApp CTA */}
        {activeSoldOut ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '9px',
              backgroundColor: '#E5E7EB',
              color: '#9CA3AF',
              padding: '15px',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '15px',
              fontFamily: 'var(--font-plus-jakarta)',
              cursor: 'not-allowed',
            }}
          >
            Varian ini sedang habis
          </div>
        ) : (
          <a
            href={activeWaLink}
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
        )}
      </div>
    </div>
  )
}
