"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function CareOptions() {
  const options = [
    {
      number: "01",
      label: "In hospital",
      title: "Bedside patient support",
      description: "Dependable nursing support during admission, recovery or a long hospital stay.",
      image: "/images/hospital-bedside-care.webp",
      features: [
        "Day or night bedside shifts",
        "Vital signs & observation",
        "Hygiene, feeding & comfort",
        "Family updates",
      ],
      ctaText: "Arrange hospital care",
      ctaHref:
        "https://wa.me/256784040350?text=Hello%20MedRelief%2C%20I%20need%20hospital%20bedside%20care.",
    },
    {
      number: "02",
      label: "At home",
      title: "Continued nursing & recovery care",
      description: "Skilled nursing and recovery support after discharge, based on the care plan.",
      image: "/images/medrelief-home-nursing-hero.webp",
      features: [
        "Post-discharge nursing",
        "Medicines as prescribed",
        "Vital signs & device monitoring",
        "Mobility & caregiver guidance",
      ],
      ctaText: "Arrange home care",
      ctaHref:
        "https://wa.me/256784040350?text=Hello%20MedRelief%2C%20I%20need%20continued%20care%20at%20home.",
    },
  ]

  return (
    <section className="py-20 md:py-24 bg-[#f7f9ff]" id="care-options" aria-labelledby="care-title">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-[720px] mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0012fd]/10 text-[#0012fd] text-xs font-bold tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0012fd]" />
            Two settings. One continuous care plan.
          </div>
          <h2
            id="care-title"
            className="font-bold text-[#071a51] text-3xl sm:text-4xl md:text-5xl tracking-tight mt-1"
          >
            Care that follows the patient
          </h2>
          <p className="text-[#5e6a86] text-base sm:text-lg mt-3 max-w-[640px] mx-auto leading-relaxed">
            Start where the need is greatest. We help the family plan the next safe step.
          </p>
        </div>

        {/* Care Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {options.map((option, idx) => (
            <motion.article
              key={option.number}
              className="group relative min-h-[540px] sm:min-h-[560px] rounded-[24px] overflow-hidden flex flex-col justify-end p-7 sm:p-9 shadow-[0_20px_50px_rgba(7,26,81,0.12)] border border-[#dbe2f2]/60 hover:shadow-[0_25px_60px_rgba(7,26,81,0.2)] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src={option.image}
                  alt={option.title}
                  fill
                  className="object-cover object-[68%_center] group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050e32]/98 via-[#071a51]/80 to-[#0012fd]/10" />
              </div>

              {/* Number Badge */}
              <div className="absolute top-6 left-6 z-10 w-12 h-12 rounded-full border border-white/30 bg-[#050e32]/50 backdrop-blur-md text-white font-extrabold text-base flex items-center justify-center shadow-lg">
                {option.number}
              </div>

              {/* Card Copy */}
              <div className="relative z-10 text-white space-y-4">
                <span className="inline-block px-3 py-1 rounded-full border border-white/30 bg-[#0012fd]/70 backdrop-blur-sm text-xs font-extrabold uppercase tracking-wider">
                  {option.label}
                </span>

                <h3 className="font-bold text-2xl sm:text-3xl md:text-[2.2rem] leading-tight text-white">
                  {option.title}
                </h3>

                <p className="text-white/85 text-[15px] sm:text-base leading-relaxed">
                  {option.description}
                </p>

                {/* Features list */}
                <ul className="grid sm:grid-cols-2 gap-2.5 pt-2 pb-2 list-none p-0">
                  {option.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm sm:text-[15px] text-white/95 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#45c9f5] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Direct Action Button */}
                <div className="pt-2">
                  <a
                    href={option.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between gap-3 w-full sm:w-auto px-6 py-3.5 rounded-full bg-white text-[#071a51] hover:bg-[#f1f4ff] font-bold text-sm sm:text-[15px] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 group/btn"
                  >
                    <span>{option.ctaText}</span>
                    <ArrowRight className="w-4 h-4 text-[#0012fd] transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

