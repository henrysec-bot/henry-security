import Hero from '@/components/Hero'
import { Features } from '@/components/Features'
import Pricing from '@/components/Pricing'

export default function Home() {
  return (
    <section className="text-white min-h-screen pt-24 md:pt-0">
      <Hero />
      <Features />
      <Pricing />
    </section>
  )
}
