"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import CareOptions from "@/components/care-options"
import Services from "@/components/services"
import HowItWorks from "@/components/how-it-works"
import Reassurance from "@/components/reassurance"
import FAQ from "@/components/faq"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import MobileContactBar from "@/components/mobile-contact-bar"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#132044]">
      <Header />
      <main id="main" className="flex-1 w-full pb-16 sm:pb-0">
        <Hero />
        <CareOptions />
        <Services />
        <HowItWorks />
        <Reassurance />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <MobileContactBar />
    </div>
  )
}
