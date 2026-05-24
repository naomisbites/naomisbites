'use client'
import { useEffect } from 'react'

export default function FAQPage() {
  useEffect(() => {
    window.location.replace('/#faq')
  }, [])
  return null
}
