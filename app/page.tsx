import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FounderStory from '@/components/FounderStory'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FounderStory />
      </main>
      <FloatingWhatsApp />
    </>
  )
}
