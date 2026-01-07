"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function CTA() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-gradient-to-br from-primary via-primary/95 to-primary/90 overflow-hidden border-t border-primary/30">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-56 h-56 bg-white/10 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            className="relative h-200 md:h-206 rounded-3xl overflow-hidden hidden md:block shadow-2xl"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/images/istockphoto-1392128457-612x612.jpg"
              alt="Dr. Namukwaya Josephine - Professional healthcare provider"
              width={600}
              height={900}
              className="object-cover object-top"
             
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
          </motion.div>

          {/* Right: Content */}
          <div className="space-y-8 text-white">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-white/80">Ready to Get Started?</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight drop-shadow-lg">
                Transform Your Health Journey Today
              </h2>
            </motion.div>

            <motion.p
              className="text-lg text-white/90 max-w-2xl leading-relaxed drop-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Let us walk with you every step of the way. Our compassionate team is ready to provide personalized care
              that meets your unique health needs.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.a
                href="#contact"
                className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us Now
              </motion.a>
              <motion.a
                href="#services"
                className="inline-block px-8 py-4 border-2 border-white/50 text-white rounded-lg font-semibold hover:border-white hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Services
              </motion.a>
            </motion.div>

            <motion.div
              className="pt-8 border-t border-white/20 space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <p className="text-white/90"><span className="font-semibold">24/7 Support</span> - Always here for you</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <p className="text-white/90"><span className="font-semibold">Expert Team</span> - Highly trained professionals</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <p className="text-white/90"><span className="font-semibold">Personalized Care</span> - Tailored to your needs</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
