import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FounderStory from '@/components/FounderStory'
import SkipToProductsButton from '@/components/SkipToProductsButton'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FounderStory />
        {/* #products anchor — replace this div with the actual Products component when built */}
        <div id="products" />
      </main>
      <SkipToProductsButton />
      <FloatingWhatsApp />
    </>
  )
}
