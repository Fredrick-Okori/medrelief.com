"use client"

import Header from "@/components/header"
import WhyChooseUs from "@/components/why-choose-us"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function WhyUsPage() {
  return (
    <main className="w-full">
      <Header />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </main>
  )
}
