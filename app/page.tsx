import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FounderStory from '@/components/FounderStory'
import Products from '@/components/Products'
import SkipToProductsButton from '@/components/SkipToProductsButton'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FounderStory />
        <Products />
      </main>
      <SkipToProductsButton />
      <FloatingWhatsApp />
    </>
  )
}
