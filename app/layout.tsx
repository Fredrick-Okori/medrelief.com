import type React from "react"
import type { Metadata, Viewport } from "next"
import { Urbanist } from "next/font/google"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-urbanist",
  display: "swap",
})

export const metadata: Metadata = {
  title: "MedRelief - Compassionate Healthcare Services | Home Care & Medical Support",
  description:
    "Quality healthcare services including home care for complex children, geriatric care, and travel medicare. 24/7 support with professional medical staff.",
  keywords: "home care, geriatric healthcare, travel medicare, medical services, patient care",
  authors: [{ name: "MedRelief" }],
  creator: "MedRelief Healthcare",
  publisher: "MedRelief",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://medrelief.com",
    siteName: "MedRelief",
    title: "MedRelief - Compassionate Healthcare Services",
    description: "Professional medical care and support services for families and individuals",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MedRelief Healthcare Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MedRelief - Healthcare Services",
    description: "Professional medical care and support",
    creator: "@MedRelief",
  },
  alternates: {
    canonical: "https://medrelief.com",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1628" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "MedRelief",
              description: "Compassionate healthcare services provider",
              url: "https://medrelief.com",
              telephone: "+256 784 040 350",
              address: {
                "@type": "PostalAddress",
                streetAddress: "",
                addressLocality: "Kampala",
                addressRegion: "Central Region",
                postalCode: "",
                addressCountry: "UG",
              },
              sameAs: ["https://www.facebook.com/medrelief", "https://www.instagram.com/medrelief"],
              knowsAbout: ["Home Healthcare", "Geriatric Care", "Travel Medicine"],
            }),
          }}
        />
      </head>
      <body className={`${urbanist.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}