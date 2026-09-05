"use client"

import { motion } from "framer-motion"

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Call or WhatsApp",
      description: "Share the patient’s location, condition and immediate concern.",
    },
    {
      number: "2",
      title: "Care assessment",
      description: "We clarify the support required, timing and family preferences.",
    },
    {
      number: "3",
      title: "Match & care plan",
      description: "We arrange suitable personnel and agree on a practical care plan.",
    },
    {
      number: "4",
      title: "Care begins",
      description: "The patient receives support with ongoing communication to the family.",
    },
  ]

  return (
    <section className="py-20 md:py-24 bg-[#050e32] text-white" id="how-it-works" aria-labelledby="process-title">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[0.88fr_1.12fr] gap-12 lg:gap-20 items-start">
          {/* Left: Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="space-y-4 max-w-[540px]"
          >
            <span className="text-[#9ce6ff] text-xs sm:text-sm font-extrabold uppercase tracking-widest block">
              Getting care started
            </span>
            <h2
              id="process-title"
              className="font-serif font-semibold text-white text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.12]"
            >
              A clear plan, without a complicated process
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed pt-2 pb-4">
              Tell us what is happening. We will identify the support needed and organize a practical care plan.
            </p>
            <a
              href="tel:+256784040350"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white hover:bg-[#f1f4ff] text-[#0012fd] hover:text-[#0010c7] font-extrabold text-[15px] sm:text-base shadow-xl transition-all"
            >
              Speak to us now
            </a>
          </motion.div>

          {/* Right: 4 Steps List */}
          <ol className="m-0 p-0 list-none space-y-0 divide-y divide-white/15">
            {steps.map((step, idx) => (
              <motion.li
                key={step.number}
                className="py-6 first:pt-0 last:pb-0 flex items-start gap-5 sm:gap-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <div className="w-12 h-12 rounded-full bg-white text-[#0012fd] font-serif font-bold text-xl flex items-center justify-center shrink-0 shadow-md">
                  {step.number}
                </div>
                <div className="pt-0.5 space-y-1.5">
                  <h3 className="font-serif font-semibold text-white text-xl sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}