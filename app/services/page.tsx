import type { Metadata } from "next"
import Header from "@/components/header"
import Services from "@/components/services"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Healthcare & Nursing Services in Uganda | MedRelief",
  description:
    "Explore MedRelief's services: hospital bedside nursing, continued home care, physiotherapy, elderly care, chronic illness support, and pedicare across Uganda.",
  alternates: {
    canonical: "https://www.medreliefservices.com/services",
  },
  openGraph: {
    title: "Healthcare & Nursing Services in Uganda | MedRelief",
    description:
      "Comprehensive medical and nursing services in Uganda: hospital bedside care, home nursing, physiotherapy, elderly care, and more.",
    url: "https://www.medreliefservices.com/services",
  },
}

export default function ServicesPage() {
  return (
    <main className="w-full">
      <Header />
      <Services />
      <Footer />
    </main>
  )
}
