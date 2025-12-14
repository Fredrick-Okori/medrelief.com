"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"

import About from "@/components/about"
import WhyChooseUs from "@/components/why-choose-us"
import CTA from "@/components/cta"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <About />
      <Services />
      <Features />
      <HowItWorks />
   
      <WhyChooseUs />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}
