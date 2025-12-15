"use client"

import { motion } from "framer-motion"
import { Activity, Shield, Zap, Brain, BarChart3, Users2 } from "lucide-react"
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export default function Features() {
  const features = [
    {
      title: "Holistic Care",
      description: "Comprehensive healthcare addressing physical, mental, and emotional wellbeing",
      icon: Activity,
      color: "from-blue-800 to-blue-800",
    },
    {
      title: "Preventive Medicine",
      description: "Proactive health management to prevent complications before they arise",
      icon: Shield,
      color: "from-blue-800 to-blue-800",
    },
    {
      title: "Fast Response Times",
      description: "Quick access to healthcare professionals when you need us most",
      icon: Zap,
      color: "from-blue-700 to-blue-700",
    },
    {
      title: "Evidence-Based Care",
      description: "Latest medical practices grounded in scientific research and best practices",
      icon: Brain,
      color: "from-blue-700 to-blue-700",
    },
    {
      title: "Health Tracking",
      description: "Monitor your progress with detailed health metrics and insights",
      icon: BarChart3,
      color: "from-blue-700 to-blue-700",
    },
    {
      title: "Family Coordination",
      description: "Manage care for multiple family members in one convenient platform",
      icon: Users2,
      color: "from-blue-800 to-blue-800",
    },
  ]

  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-b from-white/5 to-transparent border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20 space-y-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">Our Capabilities</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Advanced Healthcare Features</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto mt-4">
            Everything you need for comprehensive, modern healthcare management
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                className={`group bg-gradient-to-br ${feature.color} rounded-2xl p-8 border border-white/20 hover:border-primary/60 transition-all duration-300 backdrop-blur-sm hover:shadow-xl hover:translate-y-[-8px]`}
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <motion.div
                  className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 12 }}
                >
                  <Icon className="w-7 h-7 text-primary" />
                </motion.div>

                <h3 className="text-lg font-serif font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        
      </div>
    </section>
  )
}
