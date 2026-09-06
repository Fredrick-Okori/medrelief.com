"use client"

import { Phone } from "lucide-react"

export default function MobileContactBar() {
  const whatsappUrl =
    "https://wa.me/256784040350?text=Hello%20MedRelief%2C%20I%20need%20help%20arranging%20patient%20care."

  return (
    <>
      {/* Floating WhatsApp Button for Tablet / Desktop */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with MedRelief on WhatsApp"
        className="hidden sm:inline-flex items-center gap-2.5 fixed z-40 right-6 bottom-6 pl-3 pr-4 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-sm shadow-[0_10px_30px_rgba(16,185,129,0.4)] transition-all hover:scale-105 border border-white/20"
      >
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
          <svg viewBox="0 0 32 32" className="w-5 h-5 fill-current" aria-hidden="true">
            <path d="M16.05 3A12.7 12.7 0 0 0 5.1 22.1L3.4 29l7-1.8A12.8 12.8 0 1 0 16.05 3Zm0 23.3c-2 0-3.9-.5-5.5-1.5l-.4-.2-4.1 1.1 1.1-4-.3-.4a10.3 10.3 0 1 1 9.2 5Zm5.7-7.7c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1-1.8-.9-3-1.6-4.2-3.7-.3-.5.3-.5.9-1.7.1-.2 0-.5 0-.7l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.9 0 1.7 1.2 3.4 1.4 3.6.2.2 2.5 3.8 6 5.3.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.9-.8 2.2-1.5.3-.8.3-1.5.2-1.6-.1-.2-.3-.3-.6-.4Z" />
          </svg>
        </div>
        <span>Chat on WhatsApp</span>
      </a>

      {/* Sticky Bottom Contact Bar for Mobile Devices */}
      <nav
        className="sm:hidden fixed z-50 inset-x-0 bottom-0 grid grid-cols-2 gap-2.5 p-2.5 px-4 min-h-[68px] bg-white/95 backdrop-blur-xl border-t border-[#dbe2f2] shadow-[0_-10px_30px_rgba(7,26,81,0.12)]"
        aria-label="Contact MedRelief"
      >
        <a
          href="tel:+256784040350"
          className="flex items-center justify-center gap-2 min-h-[48px] rounded-full text-[#071a51] bg-[#eef3ff] hover:bg-[#dbe6ff] font-bold text-[14px] transition-colors"
        >
          <Phone className="w-4 h-4 text-[#0012fd]" />
          <span>Call Us</span>
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 min-h-[48px] rounded-full text-white bg-gradient-to-r from-emerald-500 to-teal-600 font-bold text-[14px] shadow-sm transition-transform"
        >
          <svg viewBox="0 0 32 32" className="w-4 h-4 fill-current" aria-hidden="true">
            <path d="M16.05 3A12.7 12.7 0 0 0 5.1 22.1L3.4 29l7-1.8A12.8 12.8 0 1 0 16.05 3Zm0 23.3c-2 0-3.9-.5-5.5-1.5l-.4-.2-4.1 1.1 1.1-4-.3-.4a10.3 10.3 0 1 1 9.2 5Zm5.7-7.7c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1-1.8-.9-3-1.6-4.2-3.7-.3-.5.3-.5.9-1.7.1-.2 0-.5 0-.7l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9 0 1.7 1.2 3.3 1.4 3.5.2.2 2.4 3.7 5.8 5.2.8.4 1.4.6 1.9.7.8.3 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.4Z" />
          </svg>
          <span>WhatsApp</span>
        </a>
      </nav>
    </>
  )
}

