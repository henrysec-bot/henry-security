import Hero from '@/components/Hero'
import { Features } from '@/components/Features'
import Pricing from '@/components/Pricing'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <section className="bg-black text-white min-h-screen pt-24 md:pt-0">
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </section>
  )
}
