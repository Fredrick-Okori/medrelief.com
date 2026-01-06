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
  metadataBase: new URL('https://medrelief.com'),
  title: {
    default: "MedRelief - Compassionate Healthcare Services | Home Care & Medical Support",
    template: "%s | MedRelief"
  },
  description:
    "Quality healthcare services including home care for complex children, geriatric care, and travel medicare. 24/7 support with professional medical staff.",
  keywords: [
    "home care",
    "geriatric healthcare",
    "travel medicare",
    "medical services",
    "patient care",
    "pediatric care",
    "elderly care",
    "telehealth",
    "Uganda healthcare",
    "Kampala medical services"
  ],
  authors: [{ name: "MedRelief" }],
  creator: "MedRelief Healthcare",
  publisher: "MedRelief",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
    images: ["/og-image.jpg"],
  },
  facebook: {
    appId: "123456789",
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
    shortcut: "/favicon.ico",
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
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "MedRelief",
              description: "Compassionate healthcare services provider offering home care, geriatric care, telehealth, and travel medicine services.",
              url: "https://medrelief.com",
              telephone: "+256 784 040 350",
              email: "medrelief325@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "",
                addressLocality: "Kampala",
                addressRegion: "Central Region",
                postalCode: "",
                addressCountry: "UG",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 0.3476,
                longitude: 32.5825,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59",
              },
              priceRange: "$$",
              paymentAccepted: "Cash, Credit Card, Mobile Money",
              currenciesAccepted: "UGX, USD",
              areaServed: {
                "@type": "Place",
                name: "Uganda, Kenya, Tanzania, South Sudan, Rwanda, Burundi",
              },
              sameAs: [
                "https://www.facebook.com/medrelief",
                "https://www.instagram.com/medrelief",
                "https://www.linkedin.com/company/medrelief"
              ],
              knowsAbout: [
                "Home Healthcare",
                "Geriatric Care",
                "Travel Medicine",
                "Pediatric Care",
                "Telehealth",
                "Physical Therapy",
                "Chronic Disease Management"
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Healthcare Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "PediCare – Complex Needs" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "GeriCare – Elderly Home Care" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "TravelShield Medicare" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "General Teleconsultation" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "ChronoCare Navigation" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Home-Based physiotherapy" } },
                ],
              },
            }),
          }}
        />
        
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "MedRelief",
              url: "https://medrelief.com",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://medrelief.com/services/{search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
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
