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
            <h2 className="font-bold text-white text-xs uppercase tracking-widest">Care</h2>
            <ul className="space-y-2.5 text-sm sm:text-[15px] list-none p-0 m-0">
              <li>
                <Link href="/#care-options" className="hover:text-white transition-colors">
                  Hospital bedside care
                </Link>
              </li>
              <li>
                <Link href="/#care-options" className="hover:text-white transition-colors">
                  Home nursing care
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Specialist services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h2 className="font-bold text-white text-xs uppercase tracking-widest">Contact</h2>
            <ul className="space-y-2.5 text-sm sm:text-[15px] list-none p-0 m-0">
              <li>
                <a href="tel:+256784040350" className="hover:text-white transition-colors">
                  +256 784 040 350
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/256784040350?text=Hello%20MedRelief%2C%20I%20need%20help%20arranging%20patient%20care."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:medrelief325@gmail.com" className="hover:text-white transition-colors break-all">
                  medrelief325@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div className="space-y-3">
            <h2 className="font-bold text-white text-xs uppercase tracking-widest">Location</h2>
            <p className="text-white font-semibold text-sm sm:text-[15px] m-0">Uganda</p>
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed m-0">
              Care arranged according to location and availability.
            </p>
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