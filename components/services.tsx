"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { SERVICES } from "@/lib/services-data"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
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

export default function Services() {
  return (
    <section id="services" className="w-full py-20 md:py-24 bg-white">
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
              Our Services
            </span>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Comprehensive Healthcare Solutions
            </h2>
            <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto"></div>
          </div>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our range of specialized services designed to meet your family's unique healthcare needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div key={service.id} variants={cardVariants}>
                <Link href={`/services/${service.id}`}>
                  <motion.div
                    className="group relative bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-blue-600 hover:shadow-2xl transition-all duration-300 cursor-pointer h-full flex flex-col"
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Image Container */}
                    <div className="relative w-full h-56 overflow-hidden bg-gray-100">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent" />
                      
                      {/* Icon Badge on Image */}
                      <div className="absolute top-4 left-4 w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-blue-600" />
                      </div>

                      {/* Number Badge */}
                      <div className="absolute top-4 right-4 w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm shadow-lg">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>

                    {/* Content Container */}
                    <div className="flex-1 p-6 flex flex-col space-y-4">
                      <div className="flex-1 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {service.title}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed line-clamp-3">
                          {service.description}
                        </p>
                      </div>

                      {/* Target Population Badge */}
                      <div className="pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-500">
                            {service.targetPopulation}
                          </span>
                          
                          {/* Learn More Arrow */}
                          <motion.div
                            className="flex items-center gap-2 text-blue-600 font-semibold text-sm"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <span className="hidden group-hover:inline">Learn more</span>
                            <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Hover Border Effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <p className="text-gray-600">
              Need help choosing the right service?
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Our Team
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}