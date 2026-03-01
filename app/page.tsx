"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <Services />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  )
}
