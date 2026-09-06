"use client"

import Link from "next/link"
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
      detailHref: "/services/gericare",
    },
    {
      id: "physiotherapy",
      title: "Home physiotherapy",
      description:
        "Practical rehabilitation after surgery, stroke, injury or changes in mobility.",
      image: "/images/medrelief-physiotherapy-hero.webp",
      alt: "A physiotherapist helping a patient regain mobility",
      icon: Activity,
      detailHref: "/services/physiotherapy",
    },
    {
      id: "children-complex-needs",
      title: "Children with complex needs",
      description:
        "Family-centred support for children living with complex or long-term health needs.",
      image: "/images/medrelief-child-care-hero.webp",
      alt: "A clinician supporting a child with healthcare needs",
      icon: Smile,
      detailHref: "/services/pedicare",
    },
  ]

  return (
    <section className="py-20 md:py-24 bg-white" id="services" aria-labelledby="services-title">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        {/* Split Section Heading */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] items-end gap-6 sm:gap-10 mb-12 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0012fd]/10 text-[#0012fd] text-xs font-bold tracking-widest uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0012fd]" />
              Specialist support around the patient
            </div>
            <h2
              id="services-title"
              className="font-bold text-[#071a51] text-3xl sm:text-4xl md:text-5xl tracking-tight mt-1"
            >
              More than a bedside presence
            </h2>
          </div>
          <p className="text-[#5e6a86] text-base sm:text-lg leading-relaxed lg:mb-2">
            We bring the right support into one practical plan, so families do not have to coordinate every detail alone.
          </p>
        </div>

        {/* 3 Specialist Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {specialistServices.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.id}
                className="group bg-white border border-[#dbe2f2] rounded-[22px] overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(7,26,81,0.08)] hover:border-[#0012fd]/30 transition-all duration-300 flex flex-col"
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
                    className="object-cover object-[72%_center] group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  <div className="w-11 h-11 rounded-[12px] bg-[#eef3ff] text-[#0012fd] flex items-center justify-center mb-4 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-bold text-[#071a51] text-xl sm:text-2xl mb-2.5">
                    {service.title}
                  </h3>

                  <p className="text-[#5e6a86] text-sm sm:text-[15px] leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>

                  {/* Card Action Footer */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <Link
                      href={service.detailHref}
                      className="inline-flex items-center gap-1.5 text-[#0012fd] font-bold text-sm hover:text-[#0010c7] transition-colors group/link"
                    >
                      <span>View details</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                    <a
                      href={`https://wa.me/256784040350?text=${encodeURIComponent(`Hello MedRelief, I am inquiring about ${service.title}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-slate-500 hover:text-emerald-600 transition-colors"
                    >
                      WhatsApp ↗
                    </a>
                  </div>
                </div>
              </motion.article>
            )
          })}

          {/* Full-width Chronic Care Card */}
          <motion.article
            className="md:col-span-2 lg:col-span-3 rounded-[24px] bg-gradient-to-r from-[#071a51] via-[#050e32] to-[#0012fd] text-white p-7 sm:p-9 shadow-xl border border-white/10 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#45c9f5]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-14 h-14 rounded-[16px] bg-white/15 backdrop-blur-md text-white flex items-center justify-center shrink-0 border border-white/20 shadow-md">
                  <CalendarDays className="w-7 h-7 text-[#45c9f5]" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/10 text-[#45c9f5] text-xs font-bold uppercase tracking-wider mb-1.5">
                    Dedicated Navigation
                  </div>
                  <h3 className="font-bold text-2xl sm:text-3xl text-white">
                    Chronic care support
                  </h3>
                  <p className="text-white/80 text-[15px] sm:text-base mt-1 max-w-xl">
                    Ongoing clinical follow-up, medicine administration, appointment coordination, and care navigation.
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/256784040350?text=Hello%20MedRelief%2C%20I%20would%20like%20to%20ask%20about%20chronic%20care%20support."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-[#071a51] hover:bg-[#f1f4ff] font-bold text-[15px] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 shrink-0 group/cta"
              >
                <span>Ask about chronic care</span>
                <ArrowRight className="w-4 h-4 text-[#0012fd] transition-transform group-cta:translate-x-1" />
              </a>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}