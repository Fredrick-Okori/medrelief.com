"use client"

import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Professional Staff",
      description: "Highly trained medical professionals dedicated to your care",
    },
    {
      title: "24/7 Availability",
      description: "Round-the-clock support whenever you need us",
    },
    {
      title: "Family-Centered",
      description: "We treat your family as our own",
    },
    {
      title: "Customized Care",
      description: "Personalized healthcare solutions for unique needs",
    },
    {
      title: "Compassionate Approach",
      description: "Healthcare with heart and empathy",
    },
    {
      title: "Proven Experience",
      description: "Years of excellence in patient care",
    },
  ]

  return (
    <section id="why-us" className="w-full py-20 md:py-32 bg-gradient-to-b from-white/5 to-white/10 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 space-y-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">What Sets Us Apart</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto mt-4">Discover why families trust MedRelief for their healthcare needs</p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 hover:border-primary/60 transition-all duration-300 backdrop-blur-sm hover:shadow-xl"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              {/* Accent gradient */}
              <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-transparent rounded-t-2xl w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300\" />
              
              <motion.div
                className="w-14 h-14 bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:from-primary/50 group-hover:to-primary/20 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.1 }}
              >
                <CheckCircle2 className="w-7 h-7 text-primary\" />
              </motion.div>

              <h3 className="font-serif font-bold text-foreground text-lg mb-3">{reason.title}</h3>
              <p className="text-foreground/60 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>

       
      </div>
    </section>
  )
}
