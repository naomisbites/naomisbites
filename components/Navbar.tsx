'use client'

import { useState } from 'react'

const WA_LINK = 'https://wa.me/6285190825988?text=Halo+Naomi!+Saya+mau+pesan+kue+%F0%9F%98%8A'

const NAV_ITEMS = [
  { label: 'Produk',       href: '#products' },
  { label: 'Cerita Naomi', href: '#founder-story' },
  { label: 'Cara Pesan',   href: '#cara-pesan' },
  { label: 'Testimoni',    href: '#testimonials' },
  { label: 'FAQ',          href: '#faq' },
  { label: 'Info Penting', href: '/info-penting' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const close = () => setMenuOpen(false)

  return (
    <>
      {/* Navbar bar — fixed so the burger is always reachable */}
      <nav
        className="fixed top-0 left-0 right-0 flex items-center justify-between px-5"
        style={{ height: '64px', zIndex: 60 }}
      >
        {/* Logo */}
        <img
          src="/images/logo-naomi.png"
          alt="Naomi's Bites"
          style={{ height: '56px', width: 'auto' }}
          draggable={false}
        />

        {/* Burger / ✕ button */}
        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(prev => !prev)}
          className="flex flex-col justify-center gap-[5px] p-2 -mr-2"
        >
          <span
            className="block h-[2.5px] bg-white rounded-full transition-all duration-300"
            style={{
              width: '26px',
              transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }}
          />
          <span
            className="block h-[2.5px] bg-white rounded-full transition-all duration-300"
            style={{ width: '26px', opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block h-[2.5px] bg-white rounded-full transition-all duration-300"
            style={{
              width: '26px',
              transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Full-screen overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 50,
          backgroundColor: '#1C355D',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-plus-jakarta)',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        {/* Nav items */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', marginBottom: '48px' }}>
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={close}
              style={{
                color: '#fff',
                fontSize: '32px',
                fontWeight: 800,
                textDecoration: 'none',
                padding: '10px 0',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 0.35s ease ${0.15 + i * 0.07}s, transform 0.35s ease ${0.15 + i * 0.07}s`,
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA button */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#0049FF',
            color: '#fff',
            fontSize: '16px',
            fontWeight: 700,
            padding: '14px 32px',
            borderRadius: '12px',
            textDecoration: 'none',
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? 'translateY(0)' : 'translateY(16px)',
            transition: `opacity 0.35s ease ${0.15 + NAV_ITEMS.length * 0.07}s, transform 0.35s ease ${0.15 + NAV_ITEMS.length * 0.07}s`,
          }}
        >
          Pesan Sekarang
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>

        {/* Bottom tagline */}
        <p style={{
          position: 'absolute',
          bottom: '36px',
          color: 'rgba(255,255,255,0.25)',
          fontSize: '12px',
          fontWeight: 500,
          letterSpacing: '0.5px',
          margin: 0,
        }}>
          Naomi&apos;s Bites — Bali
        </p>
      </div>
    </>
  )
}
