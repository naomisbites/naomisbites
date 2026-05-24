'use client'
import { useEffect } from 'react'

export default function SectionRedirect({ href }: { href: string }) {
  useEffect(() => {
    window.location.replace(href)
  }, [])
  return null
}
