import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import PromoBanner from '@/components/PromoBanner'
import FounderStory from '@/components/FounderStory'
import Products from '@/components/Products'
import HowToOrder from '@/components/HowToOrder'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PromoBanner />
        <Products />
        <FounderStory />
        <HowToOrder />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
