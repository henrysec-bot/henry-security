import Header from '@/components/Header';
import Hero from '@/components/Hero'
import { Features } from '@/components/Features'
import Pricing from '@/components/Pricing'
import {Footer} from '@/components/Footer'
import { BackgroundGlow } from '@/components/ui/BackgroundGlow'

export default function Home() {
  return (
    <>
      <Header />
      <BackgroundGlow />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </>
  )
}
