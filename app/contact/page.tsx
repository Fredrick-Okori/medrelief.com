"use client"

import Header from "@/components/header"

import Footer from "@/components/footer"

import BookingPage from "../booking/[id]/page"
import Contact from "@/components/contact"

export default function ContactPage() {
  return (
    <main className="w-full">
      <Header />
<Contact/>
    
      <Footer />
    </main>
  )
}
