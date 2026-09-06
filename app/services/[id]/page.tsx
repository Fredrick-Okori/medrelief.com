import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SERVICES } from "@/lib/services-data"
import ServiceDetailView from "@/components/service-detail-view"

interface Props {
  params: Promise<{ id: string }>
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    id: service.id,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const service = SERVICES.find((s) => s.id === id)

  if (!service) {
    return {
      title: "Service Not Found",
    }
  }

  const title = `${service.title} in Uganda | MedRelief`
  const description = `${service.description} MedRelief provides compassionate, professional healthcare and nursing across Uganda.`
  const url = `https://www.medreliefservices.com/services/${service.id}`
  const imageUrl = service.image.startsWith("http")
    ? service.image
    : `https://www.medreliefservices.com${service.image}`

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { id } = await params
  const service = SERVICES.find((s) => s.id === id)

  if (!service) {
    notFound()
  }

  const canonicalUrl = `https://www.medreliefservices.com/services/${service.id}`
  const imageUrl = service.image.startsWith("http")
    ? service.image
    : `https://www.medreliefservices.com${service.image}`

  const medicalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    "@id": `${canonicalUrl}#service`,
    name: service.title,
    description: service.description,
    serviceType: service.title,
    url: canonicalUrl,
    image: imageUrl,
    availableLanguage: "English",
    areaServed: {
      "@type": "Country",
      name: "Uganda",
    },
    provider: {
      "@type": "MedicalBusiness",
      "@id": "https://www.medreliefservices.com/#organization",
      name: "MedRelief Services",
      url: "https://www.medreliefservices.com/",
      telephone: "+256784040350",
      email: "medrelief325@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kampala",
        addressRegion: "Central Region",
        addressCountry: "UG",
      },
    },
    audience: {
      "@type": "Audience",
      audienceType: service.targetPopulation,
    },
    benefit: service.benefits,
    process: service.process.map((step, index) => ({
      "@type": "HowToStep",
      name: `Step ${index + 1}`,
      text: step,
      position: index + 1,
    })),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.medreliefservices.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.medreliefservices.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: canonicalUrl,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServiceDetailView serviceId={service.id} />
    </>
  )
}
