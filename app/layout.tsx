import type React from "react"
import type { Metadata, Viewport } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL('https://www.medreliefservices.com'),
  title: {
    default: "Hospital & Home Nursing Care in Uganda | MedRelief",
    template: "%s | MedRelief"
  },
  description:
    "Professional bedside nursing in hospitals and continued patient care at home in Uganda. MedRelief also provides physiotherapy, chronic care support, care for children with complex needs and elderly care.",
  keywords: [
    "Hospital bedside nursing Uganda",
    "Home nursing Uganda",
    "Bedside patient support Kampala",
    "Elderly care Uganda",
    "Home physiotherapy Kampala",
    "Children with complex needs",
    "Chronic care support Uganda",
    "MedRelief Services",
    "Patient care transition",
    "Post-discharge recovery nursing"
  ],
  authors: [{ name: "MedRelief Services" }],
  creator: "MedRelief Services",
  publisher: "MedRelief Services",
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
    locale: "en_UG",
    url: "https://www.medreliefservices.com/",
    siteName: "MedRelief",
    title: "Hospital & Home Nursing Care | MedRelief Uganda",
    description: "Reliable bedside support in hospital and professional continued care at home—planned around your patient's needs.",
    images: [
      {
        url: "/images/medrelief-og.jpg",
        width: 1200,
        height: 630,
        alt: "A MedRelief nurse supporting a patient and family in hospital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hospital & Home Nursing Care | MedRelief Uganda",
    description: "Professional patient care in hospital and at home, one dependable care plan.",
    creator: "@MedRelief",
    images: ["/images/medrelief-og.jpg"],
  },
  alternates: {
    canonical: "https://www.medreliefservices.com/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  other: {
    "geo.region": "UG-C",
    "geo.placename": "Kampala",
    "geo.position": "0.3476;32.5825",
    "ICBM": "0.3476, 32.5825",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0012fd",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-UG" className="scroll-smooth">
      <head>
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://www.medreliefservices.com/#website",
              name: "MedRelief Services",
              url: "https://www.medreliefservices.com/",
              inLanguage: "en-UG",
              description: "Hospital bedside nursing and continued home nursing care in Uganda."
            }),
          }}
        />

        {/* MedicalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "@id": "https://www.medreliefservices.com/#organization",
              name: "MedRelief Services",
              url: "https://www.medreliefservices.com/",
              logo: "https://www.medreliefservices.com/images/logo-white.png",
              image: "https://www.medreliefservices.com/images/medrelief-og.jpg",
              telephone: "+256784040350",
              email: "medrelief325@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kampala",
                addressRegion: "Central Region",
                addressCountry: "UG"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 0.3476,
                longitude: 32.5825
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                  ],
                  opens: "00:00",
                  closes: "23:59"
                }
              ],
              currenciesAccepted: "UGX, USD",
              paymentAccepted: "Cash, Mobile Money, Bank Transfer",
              priceRange: "$$",
              areaServed: { "@type": "Country", "name": "Uganda" },
              description: "Professional bedside nursing in hospitals and continued patient care at home, with physiotherapy and coordinated support for chronic, complex and elderly care needs across Uganda.",
              availableService: [
                { "@type": "MedicalService", "name": "Hospital bedside nursing care" },
                { "@type": "MedicalService", "name": "Home nursing and recovery support" },
                { "@type": "MedicalTherapy", "name": "Home-based physiotherapy" },
                { "@type": "MedicalService", "name": "Chronic care support" },
                { "@type": "MedicalService", "name": "Care for children with complex needs" },
                { "@type": "MedicalService", "name": "Elderly care" }
              ]
            }),
          }}
        />

        {/* FAQPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Can MedRelief support a patient who is still admitted in hospital?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. MedRelief arranges bedside support for patients in hospital, including day or night shifts depending on the patient's needs and the hospital's policies."
                  }
                },
                {
                  "@type": "Question",
                  name: "Can the same care continue after discharge?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. MedRelief can plan the transition from hospital to home and coordinate nursing, personal care, monitoring and rehabilitation as required."
                  }
                },
                {
                  "@type": "Question",
                  name: "How quickly can care be arranged?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Timing depends on the patient's needs, location and staff availability. Contact MedRelief as early as possible to confirm what can be arranged."
                  }
                },
                {
                  "@type": "Question",
                  name: "What should I tell you when I contact MedRelief?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Share the patient's exact location, whether they are in hospital or at home, the support they need and when you would like care to begin. MedRelief will ask any further questions needed to understand the situation."
                  }
                },
                {
                  "@type": "Question",
                  name: "Do you provide care everywhere in Uganda?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Care is arranged according to the patient's location, needs and staff availability. Share the exact location when you call or send a WhatsApp message so MedRelief can confirm coverage."
                  }
                },
                {
                  "@type": "Question",
                  name: "Is MedRelief an emergency ambulance service?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. If the patient has severe breathing difficulty, heavy bleeding, loss of consciousness or another medical emergency, contact the nearest emergency service or hospital immediately."
                  }
                }
              ]
            }),
          }}
        />
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;600;700;800&family=Google+Sans+Text:ital,wght@0,400;0,500;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased text-[#132044] bg-white">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
