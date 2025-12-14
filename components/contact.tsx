"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { sendContactEmail } from "@/app/actions/send-email"

const contactInfoVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
}

const formVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
}

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const result = await sendContactEmail(formData)

      if (result.success) {
        setSubmitted(true)
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setError(result.message)
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="w-full py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            variants={contactInfoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-3">
              <motion.p
                className="text-sm font-semibold text-blue-600 uppercase tracking-widest"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Get In Touch
              </motion.p>
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Ready to Start Your Health Journey?
              </motion.h2>
              <motion.p
                className="text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Contact us today and let us know how we can support your healthcare needs.
              </motion.p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Phone, title: "Phone", content: "+256 784 040 350", href: "tel:+256784040350" },
                { icon: MessageCircle, title: "WhatsApp", content: "+256 759 659 044", href: "https://wa.me/256759659044" },
                { icon: Mail, title: "Email", content: "medrelief325@gmail.com", href: "mailto:medrelief325@gmail.com" },
                { icon: MapPin, title: "Available", content: "Serving nationwide • 24/7 Support" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </motion.div>
                  <div>
                    <p className="font-medium text-gray-900">{item.title}</p>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        target={item.href.startsWith('https://wa.me') ? '_blank' : undefined}
                        rel={item.href.startsWith('https://wa.me') ? 'noopener noreferrer' : undefined}
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-gray-600">{item.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 border border-gray-200 space-y-6"
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {submitted && (
              <motion.div
                className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-blue-700 font-medium"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                Thank you! We'll be in touch soon.
              </motion.div>
            )}

            {error && (
              <motion.div
                className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 font-medium"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                {error}
              </motion.div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">First Name</label>
                <motion.input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 disabled:opacity-50 transition-all"
                  placeholder="John"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Last Name</label>
                <motion.input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 disabled:opacity-50 transition-all"
                  placeholder="Doe"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-900">Email</label>
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={loading}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 disabled:opacity-50 transition-all"
                placeholder="john@example.com"
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-900">Phone</label>
              <motion.input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={loading}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 disabled:opacity-50 transition-all"
                placeholder="+1 (555) 000-0000"
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-900">Service Interest</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                disabled={loading}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 disabled:opacity-50 transition-all"
              >
                <option value="">Select a service</option>
                <option value="home-care">Home-Medicare for Complex Children</option>
                <option value="geriatric">Geriatric Medicare</option>
                <option value="travel">Travel Medicare</option>
                <option value="physical-therapy">Physical Therapy</option>
                <option value="chrono-care">Chrono-care</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-900">Message</label>
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                disabled={loading}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none disabled:opacity-50 transition-all"
                placeholder="Tell us about your healthcare needs..."
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}