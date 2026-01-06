import { Metadata } from 'next'
import { SERVICES } from '@/lib/services-data'

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    id: service.id,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const resolvedParams = await params
  const service = SERVICES.find((s) => s.id === resolvedParams.id)

  if (!service) {
    return {
      title: 'Service Not Found | MedRelief',
      description: 'The requested service could not be found.',
    }
  }

  const baseUrl = 'https://medrelief.com'

  return {
    title: `${service.title} | MedRelief Healthcare Services`,
    description: service.description,
    keywords: [
      service.title,
      'healthcare services',
      'home care',
      'medical support',
      ...service.benefits.slice(0, 5),
    ],
    authors: [{ name: 'MedRelief' }],
    creator: 'MedRelief Healthcare',
    publisher: 'MedRelief',
    robots: 'index, follow',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: `${baseUrl}/services/${service.id}`,
      siteName: 'MedRelief',
      title: `${service.title} | MedRelief`,
      description: service.description,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: `${service.title} - MedRelief Healthcare`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | MedRelief`,
      description: service.description,
      images: [service.image],
    },
    alternates: {
      canonical: `${baseUrl}/services/${service.id}`,
    },
  }
}

