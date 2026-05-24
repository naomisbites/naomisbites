'use client'
import { useEffect } from 'react'

export default function ProdukPage() {
  useEffect(() => {
    window.location.replace('/#products')
  }, [])
  return null
}
