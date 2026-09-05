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
          <div className="lg:sticky lg:top-28 space-y-3">
            <span className="text-[#0012fd] text-xs sm:text-sm font-extrabold uppercase tracking-widest block">
              Frequently asked questions
            </span>
            <h2
              id="faq-title"
              className="font-serif font-semibold text-[#071a51] text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.12]"
            >
              Before you arrange care
            </h2>
            <p className="text-[#5e6a86] text-base sm:text-lg leading-relaxed pt-2">
              For a recommendation specific to your patient, call or send us a WhatsApp message.
            </p>
          </div>

          {/* Right Accordion */}
          <div className="divide-y divide-[#dbe2f2] border-y border-[#dbe2f2]">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx
              return (
                <div key={faq.q} className="py-5 sm:py-6">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full text-left flex items-center justify-between gap-4 group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-[#071a51] group-hover:text-[#0012fd] text-base sm:text-lg leading-snug transition-colors">
                      {faq.q}
                    </span>
                    <span
                      className={`text-[#071a51] group-hover:text-[#0012fd] text-2xl transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-45 text-[#0012fd]" : ""
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
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
                        <p className="text-[#5e6a86] text-[15px] sm:text-base leading-relaxed pt-3 pr-6 sm:pr-10">
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

