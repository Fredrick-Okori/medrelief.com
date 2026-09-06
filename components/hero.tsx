"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { CheckCircle2, MessageCircle, Phone } from "lucide-react"

interface Slide {
  src: string
  alt: string
  label: string
}

const slides: Slide[] = [
  {
    src: "/images/hospital-bedside-care.webp",
    alt: "A MedRelief nurse supporting a patient and family in hospital bedside care",
    label: "Hospital bedside care",
  },
  {
    src: "/images/medrelief-home-nursing-hero.webp",
    alt: "A MedRelief nurse providing continued patient care at home",
    label: "Nursing care at home",
  },
  {
    src: "/images/medrelief-elderly-care-hero.webp",
    alt: "A MedRelief nurse checking an elderly patient's blood pressure at home",
    label: "Elderly home care",
  },
  {
    src: "/images/medrelief-physiotherapy-hero.webp",
    alt: "A physiotherapist helping a patient regain mobility",
    label: "Home physiotherapy",
  },
  {
    src: "/images/medrelief-child-care-hero.webp",
    alt: "A healthcare professional supporting a child with complex needs",
    label: "Care for children with complex needs",
  },
]

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % slides.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [isPaused, nextSlide])

  return (
    <section
      className="relative min-h-[660px] md:min-h-[700px] lg:min-h-[740px] flex items-center overflow-hidden bg-[#050e32]"
      id="top"
      aria-labelledby="hero-title"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <AnimatePresence initial={false}>
          {slides.map((slide, idx) =>
            idx === activeIndex ? (
              <motion.div
                key={slide.src}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={idx === 0}
                  className="object-cover object-[65%_center] lg:object-[center_right]"
                  sizes="100vw"
                  quality={90}
                />
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      {/* Hero Shade Gradient */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-t from-[#050e32]/95 via-[#071a51]/85 to-transparent sm:bg-gradient-to-r sm:from-[#050e32]/98 sm:via-[#071a51]/90 sm:to-[#0012fd]/20"
        aria-hidden="true"
      />

      {/* Decorative Glow */}
      <div
        className="absolute -left-[10%] -bottom-[260px] w-[650px] h-[430px] rounded-full bg-[#0012fd]/30 blur-[95px] pointer-events-none z-[1]"
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div className="relative z-[2] max-w-[1180px] w-full mx-auto px-4 sm:px-6 pt-24 pb-20 md:py-24">
        <div className="max-w-[640px] space-y-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 px-3.5 py-2 border border-white/30 rounded-full text-white bg-[#0012fd]/60 text-xs sm:text-sm font-extrabold uppercase tracking-widest backdrop-blur-md">
            <span className="w-7 h-[2px] bg-[#45c9f5]" />
            Hospital &amp; home patient care
          </div>

          {/* Heading */}
          <h1
            id="hero-title"
            className="font-bold text-white text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.08] tracking-[-0.035em]"
          >
            When you can’t always be at their bedside,{" "}
            <em className="text-[#9ce6ff] italic">we can.</em>
          </h1>

          {/* Subtitle */}
          <p className="text-white/90 text-base sm:text-lg md:text-[1.15rem] leading-relaxed max-w-[590px]">
            Professional nursing support for patients in hospital—and continued care at home when they are ready to leave.
          </p>

          {/* CTA Actions */}
          <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
            <a
              href="https://wa.me/256784040350?text=Hello%20MedRelief%2C%20I%20need%20help%20arranging%20patient%20care."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-[15px] sm:text-base shadow-[0_10px_25px_rgba(16,185,129,0.35)] hover:shadow-[0_14px_32px_rgba(16,185,129,0.5)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              Chat on WhatsApp <span aria-hidden="true">↗</span>
            </a>
            <a
              href="tel:+256784040350"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full border border-white/30 bg-white/[0.08] hover:bg-white/[0.18] hover:border-white/50 text-white font-bold text-[15px] sm:text-base backdrop-blur-md hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#45c9f5]" />
              Not sure? Call care team
            </a>
          </div>

          {/* Trust Badges */}
          <ul className="flex flex-wrap gap-2.5 pt-5 border-t border-white/15 text-white/95 font-semibold text-xs sm:text-sm list-none p-0 m-0">
            <li className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/15 backdrop-blur-md">
              <CheckCircle2 className="w-4 h-4 text-[#45c9f5]" />
              Flexible day &amp; night shifts
            </li>
            <li className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/15 backdrop-blur-md">
              <CheckCircle2 className="w-4 h-4 text-[#45c9f5]" />
              Hospital bedside + home recovery
            </li>
            <li className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/15 backdrop-blur-md">
              <CheckCircle2 className="w-4 h-4 text-[#45c9f5]" />
              Consistent family updates
            </li>
          </ul>

          {/* Hero Slider Dots & Active Preview */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3" aria-label="Hero image controls">
            <div className="flex items-center gap-2">
              {slides.map((slide, idx) => (
                <button
                  key={slide.label}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Show ${slide.label}`}
                  aria-current={idx === activeIndex ? "true" : undefined}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? "w-8 bg-[#45c9f5] shadow-[0_0_10px_rgba(69,201,245,0.7)]"
                      : "w-2 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            {/* Current Slide Label Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 border border-white/15 backdrop-blur-md text-white/80 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#45c9f5] animate-pulse" />
              <span>{slides[activeIndex].label}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}