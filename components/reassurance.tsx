"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Reassurance() {
  const points = [
    {
      title: "One plan, two settings",
      description: "Support can continue from the hospital bedside into the home.",
    },
    {
      title: "Family kept informed",
      description: "Clear updates help relatives stay involved in the patient’s care.",
    },
    {
      title: "Care shaped around the need",
      description: "Timing and support are planned around the patient’s situation.",
    },
  ]

  return (
    <section className="py-20 md:py-24 bg-[#f7f9ff]" aria-labelledby="reassurance-title">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <motion.div
            className="relative min-h-[420px] sm:min-h-[500px] rounded-[22px] overflow-hidden shadow-[0_22px_60px_rgba(7,26,81,0.13)] border border-[#dbe2f2]"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/medrelief-home-nursing-hero.webp"
              alt="A MedRelief nurse checking an elderly patient's blood pressure at home"
              fill
              className="object-cover object-[72%_center]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Copy */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className="text-[#0012fd] text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-2">
                Why families choose MedRelief
              </span>
              <h2
                id="reassurance-title"
                className="font-serif font-semibold text-[#071a51] text-3xl sm:text-4xl md:text-[2.6rem] tracking-tight leading-[1.12]"
              >
                You remain family. We help carry the care.
              </h2>
            </div>

            <p className="text-[#5e6a86] text-base sm:text-lg leading-relaxed">
              Support does not mean abandoning your patient. It means choosing a dependable care partner when work, distance or a long illness makes constant presence difficult.
            </p>

            <div className="space-y-5 pt-2">
              {points.map((pt, idx) => (
                <div key={pt.title} className="flex items-start gap-4">
                  <span
                    className="w-9 h-9 rounded-full bg-[#eef3ff] text-[#0012fd] font-extrabold flex items-center justify-center shrink-0 mt-0.5 text-base"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <div>
                    <h3 className="text-[#071a51] font-bold text-base sm:text-[1.08rem]">
                      {pt.title}
                    </h3>
                    <p className="text-[#5e6a86] text-sm sm:text-base leading-relaxed mt-0.5">
                      {pt.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

