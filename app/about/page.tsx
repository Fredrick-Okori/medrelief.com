import type { Metadata } from "next"
import Header from "@/components/header"
import About from "@/components/about"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "About Us | Dedicated Healthcare & Nursing in Uganda",
  description:
    "Learn about MedRelief Services, our mission to bridge hospital and home healthcare in Uganda, our experienced nursing team, and our patient-first values.",
  alternates: {
    canonical: "https://www.medreliefservices.com/about",
  },
  openGraph: {
    title: "About MedRelief Services | Uganda",
    description:
      "Learn about our dedicated nursing and home health team supporting patients in hospital and at home across Uganda.",
    url: "https://www.medreliefservices.com/about",
  },
}

export default function AboutPage() {
  return (
    <main className="w-full">
      <Header />
      <About />
      <Footer />
    </main>
  )
}
