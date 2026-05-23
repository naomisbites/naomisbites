'use client'

import { useEffect, useState } from 'react'

export default function SkipToProductsButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const section = document.getElementById('founder-story')
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.05 }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed z-40"
      style={{
        bottom: '90px',
        left: 'max(20px, calc((100vw - 430px) / 2 + 20px))',
        // Stop short of WA button (56px wide + 16px margin = 72px from right edge)
        right: 'max(84px, calc((100vw - 430px) / 2 + 84px))',
      }}
    >
      <a
        href="#products"
        style={{
          display: 'block',
          backgroundColor: '#1C355E',
          color: '#FFFFFF',
          fontSize: '12px',
          fontWeight: 600,
          lineHeight: '18px',
          padding: '12px 20px',
          borderRadius: '100px',
          textAlign: 'center',
          textDecoration: 'none',
          boxShadow: '0 4px 20px rgba(28, 53, 94, 0.35)',
          fontFamily: 'var(--font-plus-jakarta)',
        }}
      >
        Naomi, aku baca nanti yah. Mau liat produk mu hehe&nbsp;👀
      </a>
    </div>
  )
}
