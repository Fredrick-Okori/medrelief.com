"use client"

import { motion } from "framer-motion"

export default function CTA() {
  return (
    <section className="py-16 md:py-20 text-white bg-gradient-to-r from-[#071a51] via-[#050e32] to-[#0b2a7d]" aria-labelledby="final-title">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-center">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            <span className="text-[#9ce6ff] text-xs sm:text-sm font-extrabold uppercase tracking-widest block">
              Care can start with one conversation
            </span>
            <h2
              id="final-title"
              className="font-serif font-semibold text-white text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.1]"
            >
              Tell us what your patient needs.
            </h2>
            <p className="text-white/80 text-base sm:text-lg max-w-[670px] leading-relaxed pt-1">
              We’ll help you understand the next practical step—whether they are in hospital, preparing for discharge or already at home.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[245px]"
          >
            <a
              href="https://wa.me/256784040350?text=Hello%20MedRelief%2C%20I%20need%20help%20arranging%20patient%20care."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white hover:bg-[#f1f4ff] text-[#0012fd] hover:text-[#0010c7] font-extrabold text-[15px] sm:text-base shadow-xl transition-all text-center"
            >
              WhatsApp MedRelief
            </a>
            <a
              href="tel:+256784040350"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-white/50 hover:bg-white/10 text-white font-extrabold text-[15px] sm:text-base transition-all text-center"
            >
              Call +256 784 040 350
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
