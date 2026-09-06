"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: "Can MedRelief support a patient who is still admitted in hospital?",
      a: "Yes. We arrange bedside support for patients in hospital, including day or night shifts depending on the patient’s needs and the hospital’s policies.",
    },
    {
      q: "Can the same care continue after discharge?",
      a: "Yes. We can plan the transition from hospital to home and coordinate nursing, personal care, monitoring and rehabilitation as required.",
    },
    {
      q: "How quickly can care be arranged?",
      a: "Timing depends on the patient’s needs, location and staff availability. Contact us as early as possible and we will tell you what can be arranged.",
    },
    {
      q: "What should I tell you when I contact MedRelief?",
      a: "Share the patient’s exact location, whether they are in hospital or at home, the support they need and when you would like care to begin. We will ask any further questions needed to understand the situation.",
    },
    {
      q: "Do you provide care everywhere in Uganda?",
      a: "Care is arranged according to the patient’s location, needs and staff availability. Send the exact location by phone or WhatsApp and we will confirm what can be arranged.",
    },
    {
      q: "Is MedRelief an emergency ambulance service?",
      a: "No. If the patient has severe breathing difficulty, heavy bleeding, loss of consciousness or another medical emergency, contact the nearest emergency service or hospital immediately.",
    },
  ]

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section className="py-20 md:py-24 bg-white" id="questions" aria-labelledby="faq-title">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-12 lg:gap-20 items-start">
          {/* Left Intro */}
          <div className="lg:sticky lg:top-28 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0012fd]/10 text-[#0012fd] text-xs font-bold tracking-widest uppercase mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0012fd]" />
              Frequently asked questions
            </div>
            <h2
              id="faq-title"
              className="font-bold text-[#071a51] text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.12]"
            >
              Before you arrange care
            </h2>
            <p className="text-[#5e6a86] text-base sm:text-lg leading-relaxed">
              Every patient’s situation is unique. For direct advice from our clinical coordinator, reach out by phone or WhatsApp anytime.
            </p>

            {/* Quick Contact Prompt */}
            <div className="p-5 rounded-2xl bg-[#f7f9ff] border border-[#dbe2f2] space-y-2 mt-4">
              <p className="text-xs font-bold text-[#071a51] uppercase tracking-wider">Have a specific question?</p>
              <p className="text-xs text-[#5e6a86] leading-relaxed">Our care team answers inquiries 24/7 across Uganda.</p>
              <div className="pt-1">
                <a
                  href="https://wa.me/256784040350?text=Hello%20MedRelief%2C%20I%20have%20a%20question%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0012fd] hover:text-[#0010c7] hover:underline"
                >
                  <span>Chat directly with a coordinator ↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx
              return (
                <div
                  key={faq.q}
                  className={`rounded-2xl transition-all duration-200 border ${
                    isOpen
                      ? "bg-[#f7f9ff] border-[#0012fd]/25 shadow-sm p-6"
                      : "bg-white border-slate-200/80 hover:border-slate-300 p-5 sm:p-6"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full text-left flex items-center justify-between gap-4 group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-[#071a51] group-hover:text-[#0012fd] text-base sm:text-[1.08rem] leading-snug transition-colors">
                      {faq.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? "bg-[#0012fd] text-white"
                          : "bg-slate-100 text-[#071a51] group-hover:bg-blue-50 group-hover:text-[#0012fd]"
                      }`}
                      aria-hidden="true"
                    >
                      <Plus className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-[#5e6a86] text-[15px] sm:text-base leading-relaxed pt-3 pr-4 sm:pr-8">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

