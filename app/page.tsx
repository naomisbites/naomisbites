import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
      <FloatingWhatsApp />
    </>
  )
}
