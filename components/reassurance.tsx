"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle2, ShieldCheck, HeartHandshake } from "lucide-react"

export default function Reassurance() {
  const points = [
    {
      title: "One plan, two settings",
      description: "Support can continue smoothly from the hospital bedside right into the home.",
    },
    {
      title: "Family kept informed",
      description: "Clear, consistent updates help relatives stay involved and reassured throughout care.",
    },
    {
      title: "Care shaped around the need",
      description: "Timing, duration and support level are planned strictly around the patient’s clinical status.",
    },
  ]

  return (
    <section className="py-20 md:py-24 bg-[#f7f9ff]" aria-labelledby="reassurance-title">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo with Floating Trust Badges */}
          <motion.div
            className="relative min-h-[440px] sm:min-h-[520px] rounded-[24px] overflow-hidden shadow-[0_22px_60px_rgba(7,26,81,0.13)] border border-[#dbe2f2]"
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#050e32]/40 via-transparent to-transparent pointer-events-none" />

            {/* Floating Top-Right Badge */}
            <div className="absolute top-5 right-5 z-10 px-4 py-2.5 rounded-2xl bg-[#050e32]/85 border border-white/20 backdrop-blur-md text-white shadow-xl flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#45c9f5]/20 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-[#45c9f5]" />
              </div>
              <div>
                <p className="text-[11px] text-white/70 font-medium">Licensed Staff</p>
                <p className="text-xs font-bold text-white">Registered Nurses</p>
              </div>
            </div>

            {/* Floating Bottom-Left Badge */}
            <div className="absolute bottom-5 left-5 z-10 px-4 py-2.5 rounded-2xl bg-white/95 border border-slate-200/80 backdrop-blur-md text-[#071a51] shadow-xl flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#eef3ff] flex items-center justify-center">
                <HeartHandshake className="w-4 h-4 text-[#0012fd]" />
              </div>
              <div>
                <p className="text-[11px] text-[#5e6a86] font-medium">Family First</p>
                <p className="text-xs font-bold text-[#071a51]">Regular Clinical Briefings</p>
              </div>
            </div>
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0012fd]/10 text-[#0012fd] text-xs font-bold tracking-widest uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0012fd]" />
                Why families choose MedRelief
              </div>
              <h2
                id="reassurance-title"
                className="font-bold text-[#071a51] text-3xl sm:text-4xl md:text-[2.6rem] tracking-tight leading-[1.12]"
              >
                You remain family. We help carry the care.
              </h2>
            </div>

            <p className="text-[#5e6a86] text-base sm:text-lg leading-relaxed">
              Support does not mean abandoning your patient. It means choosing a dependable care partner when work, distance or a long illness makes constant presence difficult.
            </p>

            <div className="space-y-4 pt-2">
              {points.map((pt) => (
                <div key={pt.title} className="p-4 rounded-2xl bg-white border border-[#dbe2f2]/70 shadow-sm flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-[#eef3ff] text-[#0012fd] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#0012fd]" />
                  </div>
                  <div>
                    <h3 className="text-[#071a51] font-bold text-base sm:text-[1.05rem]">
                      {pt.title}
                    </h3>
                    <p className="text-[#5e6a86] text-sm sm:text-[15px] leading-relaxed mt-0.5">
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

