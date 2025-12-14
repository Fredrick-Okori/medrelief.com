"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Clock, Users, Heart, ArrowRight } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Schedule Your Consultation",
      description: "Book a time that works for you. Our team is available 24/7 to discuss your health needs.",
      icon: Clock,
    },
    {
      number: "02",
      title: "Meet Our Expert Team",
      description: "Connect with experienced healthcare professionals who understand your unique situation.",
      icon: Users,
    },
    {
      number: "03",
      title: "Personalized Care Plan",
      description: "Receive a customized healthcare strategy tailored specifically to your family's needs.",
      icon: Heart,
    },
    {
      number: "04",
      title: "Ongoing Support",
      description: "Enjoy continuous care, follow-ups, and 24/7 support throughout your health journey.",
      icon: CheckCircle2,
    },
  ]

  return (
    <section className="w-full py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              Our Process
            </span>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              How It Works
            </h2>
            <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto"></div>
          </div>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Simple, straightforward healthcare in just 4 steps
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Progress Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gray-200">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-600 to-blue-400"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  className="group relative"
                  variants={itemVariants}
                >
                  <div className="relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-blue-600 transition-all duration-300 h-full hover:shadow-xl group-hover:-translate-y-2">
                    {/* Step Number Badge */}
                    <motion.div
                      className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 text-white font-bold text-xl flex items-center justify-center shadow-lg z-10"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {step.number}
                    </motion.div>

                    {/* Icon Container */}
                    <div className="flex justify-center mb-6 mt-8">
                      <motion.div
                        className="w-20 h-20 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors"
                        whileHover={{ scale: 1.05, rotate: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className="w-10 h-10 text-blue-600" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="text-center space-y-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
                  </div>

                  {/* Arrow Connector - Desktop */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="hidden lg:flex absolute top-24 -right-4 z-20 w-8 h-8 items-center justify-center"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + index * 0.2 }}
                    >
                      <div className="w-8 h-8 bg-white rounded-full border-2 border-blue-600 flex items-center justify-center shadow-md">
                        <ArrowRight className="w-4 h-4 text-blue-600" />
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 bg-blue-900 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-blue-100">
              Join thousands of families who trust MedRelief for their healthcare needs. 
              Schedule your free consultation today and experience personalized care.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="tel:+1234567890"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Clock className="w-5 h-5" />
                Call 24/7: +1 (234) 567-890
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {[
            { value: "98%", label: "Satisfaction Rate" },
            { value: "24/7", label: "Available Support" },
            { value: "5000+", label: "Happy Families" },
            { value: "10+", label: "Years Experience" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="space-y-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}