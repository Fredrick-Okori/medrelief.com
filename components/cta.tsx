"use client"

import { motion } from "framer-motion"
import { MessageCircle, Phone, ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-16 md:py-20 bg-white" aria-labelledby="final-title">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="relative rounded-[28px] bg-gradient-to-br from-[#071a51] via-[#050e32] to-[#0012fd] text-white p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl border border-white/10">
          {/* Ambient lighting */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#45c9f5]/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0012fd]/25 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-center">
            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#45c9f5] text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#45c9f5]" />
                Care can start with one conversation
              </div>
              <h2
                id="final-title"
                className="font-bold text-white text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.1]"
              >
                Tell us what your patient needs.
              </h2>
              <p className="text-white/80 text-base sm:text-lg max-w-[640px] leading-relaxed">
                We’ll help you understand the next practical step—whether they are admitted in hospital, preparing for discharge or recovering at home.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="flex flex-col sm:flex-row lg:flex-col gap-3.5 min-w-[260px]"
            >
              <a
                href="https://wa.me/256784040350?text=Hello%20MedRelief%2C%20I%20need%20help%20arranging%20patient%20care."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-[15px] sm:text-base shadow-[0_10px_25px_rgba(16,185,129,0.35)] hover:shadow-[0_14px_32px_rgba(16,185,129,0.5)] hover:-translate-y-0.5 transition-all duration-200 text-center"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>WhatsApp MedRelief</span>
              </a>
              <a
                href="tel:+256784040350"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 text-white font-bold text-[15px] sm:text-base backdrop-blur-md hover:-translate-y-0.5 transition-all duration-200 text-center shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#45c9f5]" />
                <span>Call +256 784 040 350</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
