"use client"

import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#050e32] text-white/70 pt-16 pb-8 border-t border-white/10" role="contentinfo">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 lg:gap-14 pb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative w-[177px] h-[40px]">
                <Image
                  src="/images/logo-white.png"
                  alt="MedRelief"
                  fill
                  className="object-contain object-left"
                  sizes="177px"
                />
              </div>
            </Link>
            <p className="text-white/75 text-sm sm:text-[15px] leading-relaxed max-w-[290px]">
              Walking the health journey with you—in hospital and at home.
            </p>
          </div>

          {/* Care */}
          <div className="space-y-3">
            <h2 className="font-bold text-white text-xs uppercase tracking-widest">Care &amp; Services</h2>
            <ul className="space-y-2 text-sm sm:text-[15px] list-none p-0 m-0">
              <li>
                <Link href="/services/hospital-bedside" className="hover:text-white transition-colors">
                  Hospital bedside care
                </Link>
              </li>
              <li>
                <Link href="/services/home-nursing" className="hover:text-white transition-colors">
                  Home nursing &amp; recovery
                </Link>
              </li>
              <li>
                <Link href="/services/gericare" className="hover:text-white transition-colors">
                  Elderly care
                </Link>
              </li>
              <li>
                <Link href="/services/physiotherapy" className="hover:text-white transition-colors">
                  Home physiotherapy
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#45c9f5] hover:underline transition-colors font-medium">
                  View all services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h2 className="font-bold text-white text-xs uppercase tracking-widest">Company</h2>
            <ul className="space-y-2 text-sm sm:text-[15px] list-none p-0 m-0">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About MedRelief
                </Link>
              </li>
              <li>
                <Link href="/why-us" className="hover:text-white transition-colors">
                  Why choose us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact &amp; consultations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h2 className="font-bold text-white text-xs uppercase tracking-widest">24/7 Helpline</h2>
            <ul className="space-y-2 text-sm sm:text-[15px] list-none p-0 m-0">
              <li>
                <a href="tel:+256784040350" className="text-white font-bold hover:text-[#45c9f5] transition-colors">
                  +256 784 040 350
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/256784040350?text=Hello%20MedRelief%2C%20I%20need%20help%20arranging%20patient%20care."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>WhatsApp Chat</span>
                </a>
              </li>
              <li>
                <a href="mailto:medrelief325@gmail.com" className="hover:text-white transition-colors break-all text-xs">
                  medrelief325@gmail.com
                </a>
              </li>
              <li className="pt-1 text-xs text-white/50">
                Kampala, Central Region, Uganda
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p className="m-0">© 2026 MedRelief Services. All rights reserved.</p>
          <p className="m-0 text-center sm:text-right">
            Professional support does not replace emergency medical services.
          </p>
        </div>
      </div>
    </footer>
  )
}