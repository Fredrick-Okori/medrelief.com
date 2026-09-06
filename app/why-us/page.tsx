import type { Metadata } from "next"
import Header from "@/components/header"
import WhyChooseUs from "@/components/why-choose-us"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Why Choose MedRelief | Trusted Nursing & Medical Care in Uganda",
  description:
    "Discover why families and hospitals trust MedRelief for reliable bedside nursing, seamless hospital-to-home transitions, and personalized patient care.",
  alternates: {
    canonical: "https://www.medreliefservices.com/why-us",
  },
  openGraph: {
    title: "Why Choose MedRelief | Trusted Nursing Care in Uganda",
    description:
      "Reliable, compassionate nursing bedside support in hospitals and continued home care in Uganda.",
    url: "https://www.medreliefservices.com/why-us",
  },
}

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
