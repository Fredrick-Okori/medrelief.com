import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Contact from "@/components/contact"

export const metadata: Metadata = {
  title: "Contact MedRelief | 24/7 Nursing Support in Kampala, Uganda",
  description:
    "Reach MedRelief Services 24/7 for hospital bedside nursing, home care, physiotherapy, or consultations. Call or WhatsApp +256 784 040 350.",
  alternates: {
    canonical: "https://www.medreliefservices.com/contact",
  },
  openGraph: {
    title: "Contact MedRelief Services | 24/7 Nursing in Uganda",
    description:
      "Get in touch with MedRelief for hospital bedside care and home nursing across Uganda. Call or WhatsApp +256 784 040 350.",
    url: "https://www.medreliefservices.com/contact",
  },
}

export default function ContactPage() {
  return (
    <main className="w-full">
      <Header />
      <Contact />
      <Footer />
    </main>
  )
}
