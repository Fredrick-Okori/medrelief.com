"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: "Hospital & home care", href: "/#care-options" },
    { label: "Services", href: "/#services" },
    { label: "How it works", href: "/#how-it-works" },
    { label: "Questions", href: "/#questions" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0012fd] shadow-[0_8px_24px_rgba(0,18,253,0.13)]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 flex items-center justify-between h-[76px]">
        {/* Brand Logo */}
        <Link href="/" className="inline-flex items-center" aria-label="MedRelief home">
          <div className="relative w-[165px] h-[40px]">
            <Image
              src="/images/logo-white.png"
              alt="MedRelief"
              fill
              priority
              className="object-contain object-left"
              sizes="165px"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative text-white/90 hover:text-white text-[15px] font-bold tracking-tight transition-colors py-1 group"
            >
              <span>{item.label}</span>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#45c9f5] group-hover:w-full transition-all duration-200" />
            </Link>
          ))}
        </nav>

        {/* Nav Call Button */}
        <div className="hidden sm:flex items-center">
          <a
            href="tel:+256784040350"
            className="inline-flex items-center gap-2.5 px-4 py-2 border border-white/40 rounded-full text-white bg-white/10 hover:bg-white/20 text-sm font-extrabold transition-all duration-200 shadow-sm"
            aria-label="Call MedRelief on +256 784 040 350"
          >
            <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_0_4px_rgba(255,255,255,0.2)] animate-pulse" />
            +256 784 040 350
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 rounded-xl border border-white/25 text-white hover:bg-white/10 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="lg:hidden bg-white border-t border-gray-100 px-5 py-4 shadow-xl space-y-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-[#071a51] hover:bg-[#eef3ff] font-bold text-[15px] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-gray-100">
              <a
                href="tel:+256784040350"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2.5 text-[#0012fd] font-extrabold text-[15px]"
              >
                <Phone className="w-4 h-4" />
                Call +256 784 040 350
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
