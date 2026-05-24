'use client'
import { useEffect } from 'react'

export default function TestimoniPage() {
  useEffect(() => {
    window.location.replace('/#testimonials')
  }, [])
  return null
}
