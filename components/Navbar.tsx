'use client'

import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-5"
      style={{ height: '64px' }}
    >
      {/* Logo */}
      <img
        src="/images/logo-naomi.png"
        alt="Naomi's Bites"
        style={{ height: '56px', width: 'auto' }}
        draggable={false}
      />

      {/* Burger menu button */}
      <button
        aria-label="Open menu"
        onClick={() => setMenuOpen(!menuOpen)}
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
          style={{
            width: '26px',
            opacity: menuOpen ? 0 : 1,
          }}
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
  )
}
