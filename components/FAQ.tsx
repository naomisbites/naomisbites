'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const CAROUSEL_IMAGES = [
  '/images/Instagram post - 15.jpg',
  '/images/Instagram post - 16.jpg',
  '/images/Instagram post - 18.jpg',
  '/images/Instagram post - 11.jpg',
  '/images/Instagram post - 13.jpg',
]

const FAQS = [
  {
    q: 'Kuenya tahan berapa lama?',
    a: '2 minggu dari tanggal produksi kalau disimpan di suhu ruangan. Masukkin kulkas, bisa sampai 1 bulan. Tapi jujur — biasanya habis duluan sebelum itu. 😄',
  },
  {
    q: 'Ada pilihan rasa atau ukuran lain?',
    a: 'Untuk sekarang kami fokus di Nastar dan Putri Salju dalam dua ukuran — 600ml dan 800ml. Kalau ada yang baru, kami umumin duluan di Instagram.',
  },
  {
    q: 'Kalau kuenya sampai pecah atau rusak, gimana?',
    a: 'Kami kemas dengan ekstra hati-hati. Tapi kalau sampai ada masalah, langsung chat Naomi — pasti kami urus.',
  },
  {
    q: 'Bisa pesan untuk hampers atau acara?',
    a: 'Bisa! Banyak pelanggan kami pesan untuk hampers Lebaran, ulang tahun, atau parcel kantor. Chat Naomi dulu ya buat ngobrol soal jumlah dan waktu.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % CAROUSEL_IMAGES.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="faq"
      style={{ backgroundColor: '#F3F8FF', fontFamily: 'var(--font-plus-jakarta)' }}
    >
      <div style={{ padding: '48px 24px 56px' }}>
        {/* Header */}
        <div style={{ marginBottom: 24 }}>
          <p style={{
            color: '#C8820A',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '2.4px',
            textTransform: 'uppercase',
            margin: '0 0 8px',
          }}>
            FAQ
          </p>
          <h2 style={{
            color: '#1C355D',
            fontSize: 24,
            fontWeight: 800,
            lineHeight: 1.2,
            margin: 0,
            whiteSpace: 'nowrap',
          }}>
            Ada yang mau kamu <em style={{ color: '#C8820A' }}>tanyain?</em>
          </h2>
        </div>

        {/* Accordions */}
        <div style={{ paddingBottom: 32 }}>
          {FAQS.map((faq, i) => (
            <div
              key={i}
              style={{ borderBottom: '1px solid #E5E7EB', paddingBottom: 16, marginBottom: 16 }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  cursor: 'pointer',
                  padding: 0,
                  gap: 12,
                }}
              >
                <span style={{
                  color: '#1C355D',
                  fontSize: 14,
                  fontWeight: 700,
                  textAlign: 'left',
                  lineHeight: 1.4,
                }}>
                  {faq.q}
                </span>
                <span style={{
                  color: '#C8820A',
                  fontSize: 20,
                  fontWeight: 300,
                  flexShrink: 0,
                  lineHeight: 1,
                }}>
                  {open === i ? '−' : '+'}
                </span>
              </button>
              {open === i && (
                <p style={{
                  color: '#6B7280',
                  fontSize: 13,
                  lineHeight: 1.6,
                  margin: '10px 0 0',
                }}>
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Image carousel — 4:5, crossfade every 2.5s */}
        <div style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '4 / 5',
          borderRadius: 16,
          overflow: 'hidden',
        }}>
          {CAROUSEL_IMAGES.map((src, i) => (
            <div
              key={src}
              style={{
                position: 'absolute',
                inset: 0,
                opacity: i === activeSlide ? 1 : 0,
                transition: 'opacity 0.7s ease-in-out',
              }}
            >
              <Image
                src={src}
                alt={`Naomi's Bites kue ${i + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 430px) 100vw, 430px"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
