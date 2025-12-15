"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const slides = [
  {
    src: "/images/8eece8e7-banner-image-11.webp",
    alt: "Smiling doctor with stethoscope",
    title: "Walking the Health Journey",
    subtitle: "Compassionate care for every generation",
  },
  {
    src: "/images/african-american-female-doctor-giving-video-call-consultation-looking-camera-13339-320446.webp",
    alt: "Doctor on telehealth video call",
    title: "Accessible Telehealth",
    subtitle: "Care that meets you where you are",
  },
  {
    src: "/images/chrono-care.webp",
    alt: "Home care team providing support",
    title: "Family-Centered Support",
    subtitle: "Personalized plans for lasting wellbeing",
  },
]

const quickActions = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Call us Now",
    href: "tel:+256784040350"
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    label: "Request an Home Visit",
    href: "#contact"
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: "Request a Cost",
    href: "#contact"
  },
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    if (isPaused) return
    intervalRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 5000)
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current)
    }
  }, [isPaused])

  function goNext() {
    setIndex((i) => (i + 1) % slides.length)
  }

  function goPrev() {
    setIndex((i) => (i - 1 + slides.length) % slides.length)
  }

  return (
    <>
      <section
        className="relative w-full overflow-hidden h-[85vh] md:h-screen flex items-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute inset-0 -z-10 bg-slate-900">
          <AnimatePresence initial={false}>
            {slides.map((s, i) =>
              i === index ? (
                <motion.div
                  key={s.src}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority={i === 0}
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-transparent" />
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  {slides[index].title}
                </h1>

                <p className="text-xl md:text-2xl text-white/90 font-light">
                  {slides[index].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

            <p className="text-base md:text-lg text-white/80 leading-relaxed mt-6 max-w-2xl">
              Compassionate healthcare services tailored to your family's needs. From pediatric care to geriatric
              support, we're here every step of your health journey.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#contact"
                className="inline-block px-8 py-3.5 bg-white text-blue-900 rounded-md font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-lg"
              >
                Get Started
              </a>
              <a
                href="#services"
                className="inline-block px-8 py-3.5 border-2 border-white text-white rounded-md font-semibold hover:bg-white/10 transition-colors duration-200"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-10 pt-6 border-t border-white/20">
              <p className="text-sm text-white/80">
                <span className="font-semibold">24/7 Support</span> • Professional Staff • Family-Centered Care
              </p>
            </div>
          </div>
        </div>

 
      </section>

      {/* Quick Actions - C-Care Style */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-2">
        {quickActions.map((action, i) => (
          <a
            key={i}
            href={action.href}
            className="group flex items-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 transition-all duration-300 shadow-lg"
            style={{ borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px' }}
          >
            <span className="mr-3">{action.icon}</span>
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-sm font-medium">
              {action.label}
            </span>
          </a>
        ))}
      </div>
    </>
  )
}