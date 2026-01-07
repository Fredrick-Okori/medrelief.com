"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, Heart, Clock, Users } from "lucide-react"

export default function About() {
  const stats = [
    { value: "10+", label: "Years Experience", icon: Award },
    { value: "5000+", label: "Families Served", icon: Users },
    { value: "24/7", label: "Support Available", icon: Clock },
    { value: "7+", label: "Services Offered", icon: Heart },
  ]

  return (
    <section id="about" className="w-full py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full" aria-hidden="true"></div>
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                  About MedRelief
                </span>
              </motion.div>

              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Welcome to MedRelief
              </motion.h2>

              <motion.div
                className="w-20 h-1 bg-blue-600 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              />
            </div>

            <motion.div
              className="space-y-4 text-base md:text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <p>
                Our mission is to empower families and individuals to lead healthy lives by providing seamless
                healthcare support and continuity, fostering hope, and bringing joy – especially to children with complex needs and
                their families.
              </p>
              <p>
                With a deep understanding of chronic illnesses, aging populations, and travelers, we offer reliable,
                convenient, and cost-effective services backed by 24/7 availability.
              </p>
              <p className="font-medium text-gray-700">
                At MedRelief, we&apos;re committed to walking alongside you on your health journey, ensuring you receive the
                care and support you deserve.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center px-8 py-3.5 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors shadow-md"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.a>
              <motion.a
                href="#services"
                className="inline-flex items-center px-8 py-3.5 border-2 border-gray-300 text-gray-700 rounded-md font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Our Services
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/images/1-intensivebpt.jpg"
                  alt="MedRelief healthcare team - professional African medical staff members working together to provide compassionate care"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
              </motion.div>
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 hidden md:block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">100%</p>
                  <p className="text-sm text-gray-600">Patient Satisfaction</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
                    <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Mission Statement Card */}
        <motion.div
          className="mt-16 bg-blue-900 rounded-2xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">Our Commitment to You</h3>
            <p className="text-lg text-blue-100 leading-relaxed">
              We understand that healthcare is more than just medical treatment - it&apos;s about dignity, and
              personalized care. Every member of our team is dedicated to providing you and your loved ones with the
              highest quality healthcare services in the comfort of your own environment.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full" aria-hidden="true"></div>
                <span className="text-sm text-blue-100">Licensed Professionals</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full" aria-hidden="true"></div>
                <span className="text-sm text-blue-100">Personalized Care Plans</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full" aria-hidden="true"></div>
                <span className="text-sm text-blue-100">Compassionate Support</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

