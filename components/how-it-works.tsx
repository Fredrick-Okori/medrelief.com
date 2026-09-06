"use client"

import { motion } from "framer-motion"
import { Phone, ClipboardCheck, UserCheck, HeartPulse, ArrowRight } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Call or WhatsApp",
      description: "Share the patient’s location, hospital ward or home setting, condition and immediate concern.",
      icon: Phone,
    },
    {
      number: "2",
      title: "Care assessment",
      description: "We clarify the required support, day/night shift preferences, timing and medical instructions.",
      icon: ClipboardCheck,
    },
    {
      number: "3",
      title: "Match & care plan",
      description: "We assign qualified nursing staff and agree on a clear, dependable, tailored care plan.",
      icon: UserCheck,
    },
    {
      number: "4",
      title: "Care begins",
      description: "The patient receives dedicated bedside care with ongoing observation and family briefings.",
      icon: HeartPulse,
    },
  ]

  return (
    <section className="py-20 md:py-24 bg-[#050e32] text-white relative overflow-hidden" id="how-it-works" aria-labelledby="process-title">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 -left-[200px] w-[500px] h-[500px] bg-[#0012fd]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-[100px] right-0 w-[450px] h-[450px] bg-[#45c9f5]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[0.88fr_1.12fr] gap-12 lg:gap-20 items-start">
          {/* Left: Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="space-y-4 max-w-[540px] lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#45c9f5] text-xs font-bold uppercase tracking-widest backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#45c9f5]" />
              Getting care started
            </div>
            <h2
              id="process-title"
              className="font-bold text-white text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.12]"
            >
              A clear plan, without a complicated process
            </h2>
            <p className="text-white/75 text-base sm:text-lg leading-relaxed pt-2 pb-4">
              Tell us what is happening. We will identify the support needed and organize a practical care plan for your loved one.
            </p>
            <div className="pt-2">
              <a
                href="tel:+256784040350"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-[#f1f4ff] text-[#071a51] hover:text-[#0012fd] font-bold text-[15px] sm:text-base shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200"
              >
                <Phone className="w-4 h-4 text-[#0012fd]" />
                <span>Speak to our team now</span>
              </a>
            </div>
          </motion.div>

          {/* Right: 4 Steps List */}
          <div className="space-y-4">
            {steps.map((step, idx) => {
              const StepIcon = step.icon
              return (
                <motion.div
                  key={step.number}
                  className="group relative bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 hover:border-[#45c9f5]/40 rounded-2xl p-6 sm:p-7 backdrop-blur-md transition-all duration-300 shadow-lg flex items-start gap-5"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0012fd] to-[#45c9f5] text-white flex items-center justify-center shrink-0 font-bold text-lg shadow-md shadow-blue-500/30 group-hover:scale-105 transition-transform duration-300">
                    <StepIcon className="w-5 h-5 text-white" />
                  </div>
                  <div className="pt-0.5 space-y-1.5 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#45c9f5] uppercase tracking-wider">
                        Step {step.number}
                      </span>
                    </div>
                    <h3 className="font-bold text-white text-xl sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}