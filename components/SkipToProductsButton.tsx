'use client'

import { useEffect, useState } from 'react'

export default function SkipToProductsButton() {
  const [visible, setVisible] = useState(false)
  const [tooltip, setTooltip] = useState(false)

  useEffect(() => {
    const section = document.getElementById('founder-story')
    if (!section) return

    let tooltipTimer: ReturnType<typeof setTimeout>

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
        if (entry.isIntersecting) {
          setTooltip(true)
          tooltipTimer = setTimeout(() => setTooltip(false), 5000)
        } else {
          clearTimeout(tooltipTimer)
          setTooltip(false)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(section)
    return () => {
      observer.disconnect()
      clearTimeout(tooltipTimer)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed z-40 flex flex-col items-end gap-2"
      style={{
        // Directly above WA button: 24px (WA bottom) + 56px (WA height) + 8px gap
        bottom: '88px',
        right: 'max(16px, calc((100vw - 430px) / 2 + 16px))',
      }}
    >
      {/* Tooltip — same style as WA, auto-dismisses after 5s */}
      {tooltip && (
        <div className="bg-white text-navy text-xs font-semibold px-4 py-2.5 rounded-2xl rounded-br-sm shadow-lg border border-cream-dark max-w-[190px] text-right animate-in fade-in slide-in-from-bottom-2 duration-300">
          Naomi, aku baca nanti yah.
          <span className="block font-normal text-text-muted">
            Mau liat produk mu hehe 😄
          </span>
        </div>
      )}

      {/* Circular navy button with down arrow — mirrors WA button style */}
      <a
        href="#products"
        aria-label="Lihat produk"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        style={{ backgroundColor: '#1C355E' }}
        onClick={() => setTooltip(false)}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
      </a>
    </div>
  )
}
