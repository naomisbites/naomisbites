import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FounderStory from '@/components/FounderStory'
import Products from '@/components/Products'
import HowToOrder from '@/components/HowToOrder'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
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
        <HowToOrder />
        <Testimonials />
        <FAQ />
      </main>
      <SkipToProductsButton />
      <FloatingWhatsApp />
    </>
  )
}
