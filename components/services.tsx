"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Heart, Activity, Smile, CalendarDays } from "lucide-react"

export default function Services() {
  const specialistServices = [
    {
      id: "elderly-care",
      title: "Elderly care",
      description:
        "Respectful daily support for older adults living with frailty, reduced mobility or chronic illness.",
      image: "/images/medrelief-elderly-care-hero.webp",
      alt: "A nurse caring for an elderly patient at home",
      icon: Heart,
    },
    {
      id: "physiotherapy",
      title: "Home physiotherapy",
      description:
        "Practical rehabilitation after surgery, stroke, injury or changes in mobility.",
      image: "/images/medrelief-physiotherapy-hero.webp",
      alt: "A physiotherapist helping a patient regain mobility",
      icon: Activity,
    },
    {
      id: "children-complex-needs",
      title: "Children with complex needs",
      description:
        "Family-centred support for children living with complex or long-term health needs.",
      image: "/images/medrelief-child-care-hero.webp",
      alt: "A clinician supporting a child with healthcare needs",
      icon: Smile,
    },
  ]

  return (
    <section className="py-20 md:py-24 bg-white" id="services" aria-labelledby="services-title">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        {/* Split Section Heading */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] items-end gap-6 sm:gap-10 mb-12 sm:mb-14">
          <div>
            <span className="text-[#0012fd] text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-2">
              Specialist support around the patient
            </span>
            <h2
              id="services-title"
              className="font-serif font-semibold text-[#071a51] text-3xl sm:text-4xl md:text-5xl tracking-tight mt-2"
            >
              More than a bedside presence
            </h2>
          </div>
          <p className="text-[#5e6a86] text-base sm:text-lg leading-relaxed lg:mb-2">
            We bring the right support into one practical plan, so families do not have to coordinate every detail alone.
          </p>
        </div>

        {/* 3 Specialist Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialistServices.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.id}
                className="bg-white border border-[#dbe2f2] rounded-[22px] overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(7,26,81,0.1)] transition-all duration-300 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                {/* Photo */}
                <div className="relative aspect-[1.45] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover object-[72%_center]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Body */}
                <div className="p-7 flex-1 flex flex-col">
                  <div className="w-10 h-10 rounded-[11px] bg-[#eef3ff] text-[#0012fd] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-serif font-semibold text-[#071a51] text-xl sm:text-2xl mb-2.5">
                    {service.title}
                  </h3>

                  <p className="text-[#5e6a86] text-sm sm:text-[15px] leading-relaxed flex-1">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            )
          })}

          {/* Full-width Chronic Care Card */}
          <motion.article
            className="md:col-span-2 lg:col-span-3 rounded-[22px] bg-gradient-to-r from-[#071a51] via-[#050e32] to-[#0012fd] text-white p-7 sm:p-9 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-12 h-12 rounded-[14px] bg-white/15 backdrop-blur-sm text-white flex items-center justify-center shrink-0">
                  <CalendarDays className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-2xl sm:text-3xl text-white">
                    Chronic care support
                  </h3>
                  <p className="text-white/80 text-[15px] sm:text-base mt-1 max-w-xl">
                    Ongoing follow-up, appointment coordination and care navigation for chronic conditions.
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/256784040350?text=Hello%20MedRelief%2C%20I%20would%20like%20to%20ask%20about%20chronic%20care%20support."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-extrabold text-[15px] sm:text-base underline underline-offset-4 hover:text-[#9ce6ff] transition-colors shrink-0"
              >
                <span>Ask about chronic care</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}