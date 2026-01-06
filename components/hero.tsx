"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const slides = [
  {
    src: "/images/11062b_bc1fa5955b4d457892efb751a0588eb0~mv2.avif",
    alt: "Smiling doctor with stethoscope providing compassionate healthcare",
    title: "Walking the Health Journey with you",
    subtitle: "Compassionate care for every generation",
  },
  {
    src: "/images/african-american-female-doctor-giving-video-call-consultation-looking-camera-13339-320446.webp",
    alt: "Doctor on telehealth video call providing remote healthcare",
    title: "Accessible Telehealth",
    subtitle: "Care that meets you where you are",
  },
  {
    src: "/images/chrono-care.webp",
    alt: "Home care team providing support to patients",
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
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  ),
  label: "Send WhatsApp",
  href: "https://wa.me/+256759659044"
},
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    label: "Request Home Visit",
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
              Compassionate healthcare services tailored to your family needs. From pediatric care to geriatric
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