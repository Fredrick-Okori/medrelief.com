"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MessageCircle, Check, Phone, Clock, Users, Star } from "lucide-react"
import { SERVICES } from "@/lib/services-data"
import { useParams } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { motion } from "framer-motion"

export default function ServiceDetail() {
  const params = useParams()
  const serviceId = params.id as string
  const service = SERVICES.find((s) => s.id === serviceId)

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center space-y-4 p-8">
          <h1 className="text-2xl font-bold text-gray-900">Service not found</h1>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>
      </div>
    )
  }

  const handleWhatsAppBooking = () => {
    const phoneNumber = "256784040350"
    const message = `Hi MedRelief! I'm interested in booking "${service.title}". Please provide more information and available appointment slots.`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
  }

  const handleCall = () => {
    window.location.href = "tel:+256784040350"
  }

  const Icon = service.icon

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "MedRelief",
      "url": "https://medrelief.com",
      "telephone": "+256784040350",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kampala",
        "addressCountry": "UG"
      }
    },
    "areaServed": {
      "@type": "Place",
      "name": service.targetPopulation
    },
    "availableLanguage": "English",
    "serviceType": service.title,
    "url": `https://medrelief.com/services/${service.id}`,
    "image": `https://medrelief.com${service.image}`,
    "benefit": service.benefits,
    "process": service.process.map((step, index) => ({
      "@type": "Thing",
      "name": `Step ${index + 1}`,
      "description": step
    }))
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://medrelief.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Services",
                  "item": "https://medrelief.com/#services"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": service.title,
                  "item": `https://medrelief.com/services/${service.id}`
                }
              ]
            })
          }}
        />

        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            {/* Back button */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm">
                <li>
                  <Link 
                    href="/" 
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li className="text-white/40">/</li>
                <li>
                  <Link 
                    href="/#services" 
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li className="text-white/40">/</li>
                <li className="text-white" aria-current="page">
                  {service.title}
                </li>
              </ol>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <Icon className="w-5 h-5 text-blue-300" aria-hidden="true" />
                  <span className="text-sm font-medium text-blue-100">{service.targetPopulation}</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {service.title}
                </h1>

                <p className="text-xl text-blue-100 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <motion.button
                    onClick={handleWhatsAppBooking}
                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label="Book via WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5" aria-hidden="true" />
                    Book via WhatsApp
                  </motion.button>
                  <motion.button
                    onClick={handleCall}
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-colors border border-white/20"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label="Call now"
                  >
                    <Phone className="w-5 h-5" aria-hidden="true" />
                    Call Now
                  </motion.button>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={`${service.title} - MedRelief healthcare service`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Overview */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full" aria-hidden="true"></div>
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                Service Overview
              </span>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {service.fullDetails}
              </p>
            </div>
          </motion.div>

          {/* Benefits and Process Grid */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-16">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="sticky top-24">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Benefits</h2>
                <div className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex gap-4 items-start bg-white rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                        <Check className="w-6 h-6 text-blue-600" />
                      </div>
                      <p className="text-gray-700 pt-1.5 leading-relaxed">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Process */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h2>
              <div className="space-y-6">
                {service.process.map((step, index) => (
                  <motion.div
                    key={index}
                    className="relative flex gap-4 items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    {/* Connecting line */}
                    {index < service.process.length - 1 && (
                      <div className="absolute left-5 top-12 w-0.5 h-full bg-gradient-to-b from-blue-600 to-blue-200" aria-hidden="true" />
                    )}
                    
                    <div className="relative w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold shadow-lg z-10">
                      {index + 1}
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-gray-700 leading-relaxed">{step}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <motion.div
            className="grid sm:grid-cols-3 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              { icon: Clock, label: "24/7 Available", value: "Round the clock" },
              { icon: Users, label: "Expert Care", value: "Licensed professionals" },
              { icon: Check, label: "Quality Service", value: "Patient satisfaction" },
            ].map((item, index) => {
              const ItemIcon = item.icon
              return (
                <motion.div
                  key={item.label}
                  className="bg-blue-50 rounded-xl p-6 text-center border border-blue-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                    <ItemIcon className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-gray-600 mb-1">{item.label}</p>
                  <p className="text-lg font-bold text-gray-900">{item.value}</p>
                </motion.div>
              )
            })}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold">Ready to Get Started?</h3>
              <p className="text-xl text-blue-100 leading-relaxed">
                Book your consultation today and take the first step towards better health. Our team is ready to support you.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              
                <motion.button
                  onClick={handleCall}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-colors border-2 border-white/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Contact via WhatsApp"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  Whatsapp: +256 784 040 350
                </motion.button>
              </div>

              <p className="text-sm text-blue-200 pt-4">
                Available 24/7 • Professional Staff • Compassionate Care
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
