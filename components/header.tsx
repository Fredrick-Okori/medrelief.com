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
    <header className="sticky top-0 z-50 w-full bg-[#071a51]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgba(5,14,50,0.3)] transition-all">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 flex items-center justify-between h-[74px]">
        {/* Brand Logo */}
        <Link href="/" className="inline-flex items-center group" aria-label="MedRelief home">
          <div className="relative w-[165px] h-[40px] transition-transform duration-200 group-hover:scale-[1.02]">
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
        <nav className="hidden lg:flex items-center gap-1.5 bg-white/[0.06] p-1.5 rounded-full border border-white/10 backdrop-blur-md" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-4 py-1.5 rounded-full text-white/85 hover:text-white hover:bg-white/10 text-[14px] font-semibold tracking-tight transition-all duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Header Right Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* 24/7 Live Availability Badge */}
          <div className="hidden xl:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/25 text-emerald-300 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
            24/7 in Uganda
          </div>

          <a
            href="tel:+256784040350"
            className="inline-flex items-center gap-2 px-4 py-2 border border-white/25 rounded-full text-white bg-white/10 hover:bg-white/20 hover:border-white/40 text-sm font-bold transition-all duration-200 shadow-sm hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]"
            aria-label="Call MedRelief on +256 784 040 350"
          >
            <Phone className="w-3.5 h-3.5 text-[#45c9f5]" />
            +256 784 040 350
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2.5 rounded-xl border border-white/20 text-white bg-white/5 hover:bg-white/15 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="lg:hidden bg-[#071a51]/98 backdrop-blur-2xl border-t border-white/10 px-5 py-5 shadow-2xl space-y-2 text-white"
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
                className="block px-3.5 py-2.5 rounded-xl text-white/90 hover:text-white hover:bg-white/10 font-semibold text-[15px] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <a
                href="tel:+256784040350"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white text-[#071a51] font-bold text-[15px] shadow-lg"
              >
                <Phone className="w-4 h-4 text-[#0012fd]" />
                Call +256 784 040 350
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
