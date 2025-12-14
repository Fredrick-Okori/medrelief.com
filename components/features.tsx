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

        {/* Feature Highlight with Image */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 md:p-12 border border-white/20 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl hidden md:block">
            <Image
              src="/images/team-work-home-care-9.webp"
              alt="Healthcare team coordination"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
          </div>

          <div className="space-y-6">
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-3xl font-serif font-bold text-foreground">Integrated Care Platform</h3>
              <p className="text-lg text-foreground/70">
                Our advanced platform brings everything together—from appointments to health records, medications to test results—all in one secure, easy-to-access place.
              </p>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Secure Health Records</p>
                  <p className="text-sm text-foreground/60">HIPAA-compliant storage of all your medical information</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Real-time Notifications</p>
                  <p className="text-sm text-foreground/60">Instant alerts for appointments, test results, and updates</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Multi-device Access</p>
                  <p className="text-sm text-foreground/60">Access your health data anywhere, anytime on any device</p>
                </div>
              </div>
            </motion.div>

            <motion.a
              href="#contact"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-95 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
