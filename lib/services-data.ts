import type React from "react"
import { Heart, Users, Plane, Baby, Stethoscope, Activity } from "lucide-react"

export interface Service {
  id: string
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  targetPopulation: string
  fullDetails: string
  benefits: string[]
  process: string[]
  image: string
}

export const SERVICES: Service[] = [
  {
    id: "pedicare",
    icon: Baby,
    title: "PediCare – Complex Needs",
    description: "Specialized home-based care for children with disabilities or chronic conditions.",
    targetPopulation: "Children with disabilities or chronic conditions",
    fullDetails:
      "PediCare provides comprehensive home-based care designed specifically for children dealing with disabilities or chronic health conditions. Our specialized team of pediatric nurses, therapists, and caregivers work closely with families to create personalized care plans that support development, independence, and quality of life.",
    benefits: [
      "In-home nursing care by pediatric specialists",
      "Personalized caregiver training for family members",
      "Medical equipment and therapy support",
      "Developmental monitoring and coaching",
      "24/7 emergency support access",
      "Flexible scheduling around school and family needs",
    ],
    process: [
      "Initial consultation to understand your child's needs",
      "Assessment and personalized care plan development",
      "Caregiver assignment and training",
      "Ongoing monitoring and care adjustments",
      "Regular family check-ins and progress updates",
    ],
    image: "/images/team-work-home-care-39.webp",
  },
  {
    id: "gericare",
    icon: Heart,
    title: "GeriCare – Elderly Home Care",
    description: "Comprehensive in-home care for older adults with mobility or chronic health issues.",
    targetPopulation: "Older adults with mobility or chronic health issues",
    fullDetails:
      "GeriCare delivers compassionate, comprehensive in-home care for seniors who want to maintain their independence while receiving the support they need. From daily living assistance to complex medical management, our trained geriatric care team provides dignified, person-centered care.",
    benefits: [
      "Professional nursing and health monitoring",
      "Medication management and adherence support",
      "Physiotherapy and mobility assistance",
      "Daily living support and personal care",
      "Nutritional guidance and meal support",
      "Companionship and emotional support",
    ],
    process: [
      "Comprehensive health and needs assessment",
      "Care plan customization based on preferences",
      "Caregiver matching and training",
      "Regular wellness monitoring",
      "Family involvement and communication",
    ],
    image: "/images/team-work-home-care-49-1024x682.webp",
  },
  {
    id: "travelshield",
    icon: Plane,
    title: "TravelShield Medicare",
    description: "Complete medical support for tourists, expatriates, and mobile professionals.",
    targetPopulation: "Tourists, expatriates, mobile professionals",
    fullDetails:
      "TravelShield Medicare ensures you have reliable medical support wherever your travels take you. Whether you're on vacation, relocating, or working abroad, we provide comprehensive pre-travel preparation, real-time medical assistance, and local healthcare coordination.",
    benefits: [
      "Pre-travel medical consultations and risk assessment",
      "Travel vaccination and immunization planning",
      "24/7 emergency medical hotline",
      "Local healthcare provider network access",
      "Destination-specific health information",
      "Travel insurance coordination",
    ],
    process: [
      "Book pre-travel consultation",
      "Complete health questionnaire",
      "Receive personalized travel health plan",
      "Access emergency support during travel",
      "Post-travel follow-up and wellness check",
    ],
    image: "/images/dr.jpg",
  },
  {
    id: "teleconsult",
    icon: Stethoscope,
    title: "General Teleconsultation",
    description: "On-demand or scheduled virtual consultations with general practitioners and specialists.",
    targetPopulation: "All registered clients",
    fullDetails:
      "General Teleconsultation brings professional healthcare directly to your home through secure video consultations with experienced doctors and specialists. Available on-demand or scheduled, our telemedicine platform makes quality healthcare accessible anytime, anywhere.",
    benefits: [
      "Convenient video consultations with licensed doctors",
      "Specialist access without long waiting times",
      "Digital prescriptions and medical records",
      "Quick turnaround for consultations",
      "Reduced healthcare costs and travel time",
      "Privacy and convenience from home",
    ],
    process: [
      "Book consultation slot via app or phone",
      "Complete health questionnaire",
      "Join secure video call with doctor",
      "Receive digital prescription if needed",
      "Follow-up support and care coordination",
    ],
    image: "/images/african-american-female-doctor-giving-video-call-consultation-looking-camera-13339-320446.webp",
  },
  {
    id: "chronocare",
    icon: Users,
    title: "ChronoCare Navigation",
    description: "Comprehensive care coordination for patients with chronic diseases.",
    targetPopulation: "Patients with chronic diseases",
    fullDetails:
      "ChronoCare Navigation simplifies managing chronic conditions through coordinated care, expert guidance, and continuous monitoring. Our holistic approach combines medical management with lifestyle coaching to help you achieve better health outcomes and improved quality of life.",
    benefits: [
      "Dedicated care coordinator assigned to you",
      "Personalized lifestyle coaching programs",
      "Medication management and adherence tracking",
      "Regular health metrics monitoring",
      "Specialist coordination and access",
      "Reduced hospital readmissions",
    ],
    process: [
      "Initial comprehensive health assessment",
      "Development of personalized care plan",
      "Regular monitoring and check-ins",
      "Lifestyle and nutrition coaching",
      "Medication optimization",
      "Quarterly progress reviews",
    ],
    image: "/images/team-work-home-care-9.webp",
  },
  {
    id: "physiotherapy",
    icon: Activity,
    title: "Home-Based physical therapy",
    description: "In-home physical therapy sessions for post-surgical, neurological, or mobility needs.",
    targetPopulation: "Clients with post-surgical, neurological, or mobility needs",
    fullDetails:
      "Home-Based physical therapy brings specialized rehabilitation directly to your home. Whether recovering from surgery, managing neurological conditions, or improving mobility, our licensed physiotherapists provide personalized treatment in the comfort of your own space.",
    benefits: [
      "Professional physical therapy in familiar environment",
      "Post-operative rehabilitation and recovery",
      "Neurological condition management",
      "Mobility and strength improvement programs",
      "In-home equipment and aids assessment",
      "Remote coaching and progress tracking",
    ],
    process: [
      "Initial assessment and consultation",
      "Personalized treatment plan creation",
      "Regular in-home sessions",
      "Home exercise program guidance",
      "Progress monitoring and adjustments",
      "Ongoing telehealth support",
    ],
    image: "/images/image-6.webp",
  },
]
