"use client"

import { useState } from "react"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Youtube, Twitter, Send } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const currentYear = new Date().getFullYear()

  const countries = ["UGANDA", "KENYA", "TANZANIA", "SOUTH SUDAN", "RWANDA", "BURUNDI"]

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-[#0077B5]" },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:bg-[#FF0000]" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-[#1DA1F2]" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-[#E4405F]" },
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-[#1877F2]" },
  ]

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setTimeout(() => {
        setIsSubscribed(false)
        setEmail("")
      }, 3000)
    }
  }

  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left Column - Brand & Contact */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Brand */}
            <div>
              <Link href="/" className="inline-block mb-4">
                <motion.div
                  className="flex items-center gap-3"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
                    <span className="text-white font-serif font-bold text-2xl">M</span>
                  </div>
                  <div>
                    <span className="font-bold text-2xl text-gray-900 block leading-tight">MedRelief</span>
                  </div>
                </motion.div>
              </Link>
            </div>

            {/* Countries Served */}
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                Countries We Serve
              </p>
              <div className="flex flex-wrap gap-2">
                {countries.map((country, index) => (
                  <motion.span
                    key={country}
                    className="text-sm font-medium text-gray-600"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {country}
                    {index < countries.length - 1 && <span className="ml-2 text-blue-600">•</span>}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-3">
              <motion.div
                className="flex flex-col space-y-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-semibold text-gray-700 min-w-[100px]">Phone:</span>
                  <a
                    href="tel:+256784040350"
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    +256 784 040 350
                  </a>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-semibold text-gray-700 min-w-[100px]">WhatsApp:</span>
                  <a
                    href="https://wa.me/256759659044"
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    +256 759 659 044
                  </a>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-semibold text-gray-700 min-w-[100px]">Email:</span>
                  <a
                    href="mailto:medrelief325@gmail.com"
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors break-all"
                  >
                    medrelief325@gmail.com
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                Follow Us
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map(({ icon: Icon, href, label, color }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    className={`w-10 h-10 rounded-lg bg-gray-100 ${color} flex items-center justify-center transition-all duration-300 group`}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Newsletter */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Subscribe to our Bulletin
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Stay updated with health tips, news, and exclusive offers from MedRelief.
              </p>

              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                  />
                  <motion.button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send className="w-5 h-5" />
                  </motion.button>
                </div>

                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-xs text-gray-600">
                    Yes, subscribe me to your newsletter.
                  </span>
                </label>

                {isSubscribed && (
                  <motion.div
                    className="text-sm text-green-600 font-medium"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ✓ Successfully subscribed!
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-200 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-sm text-gray-600">
              © {currentYear} by MedRelief. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <a href="#" className="hover:text-blue-600 transition-colors">
                Privacy Policy
              </a>
              <span className="w-1 h-1 rounded-full bg-gray-400"></span>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}