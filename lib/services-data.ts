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
    id: "hospital-bedside",
    icon: Heart,
    title: "Hospital Bedside Nursing Care",
    description: "Dependable bedside nursing support during admission, recovery or a long hospital stay.",
    targetPopulation: "Admitted hospital patients requiring day or night dedicated support",
    fullDetails:
      "When you can’t always be at their bedside, we can. MedRelief arranges professional, compassionate bedside support for patients admitted in hospital. We provide shift-based observation, assist with hygiene and nutrition, monitor vital signs, and keep the family consistently updated in coordination with the hospital team.",
    benefits: [
      "Day and night dedicated bedside shifts",
      "Regular vital signs and clinical observation",
      "Hygiene, feeding, mobility and comfort support",
      "Consistent communication and family status updates",
      "Coordination with hospital ward staff and doctors",
      "Transition planning for home discharge",
    ],
    process: [
      "Initial call or WhatsApp to share patient location and hospital ward",
      "Rapid care assessment and shift requirements planning",
      "Matching with qualified, compassionate bedside nurse",
      "Bedside care begins with regular family briefings",
    ],
    image: "/images/hospital-bedside-care.webp",
  },
  {
    id: "home-nursing",
    icon: Users,
    title: "Continued Home Nursing & Recovery Care",
    description: "Skilled nursing and recovery support after discharge, based on the care plan.",
    targetPopulation: "Patients recovering at home after discharge or managing post-operative care",
    fullDetails:
      "MedRelief provides continuous post-discharge nursing right in the comfort of home. We follow your doctor's care plan, ensure medications are administered safely and accurately, monitor clinical recovery parameters, and guide family caregivers.",
    benefits: [
      "Smooth transition from hospital bed to home",
      "Prescribed medication administration and management",
      "Vital signs and recovery metric monitoring",
      "Wound dressing, catheter and device care",
      "Caregiver coaching for family members",
      "Ongoing clinical documentation",
    ],
    process: [
      "Review of discharge summary and doctor instructions",
      "Home environment and patient assessment",
      "Deployment of experienced home nursing staff",
      "Structured daily care and progress tracking",
    ],
    image: "/images/medrelief-home-nursing-hero.webp",
  },
  {
    id: "gericare",
    icon: Heart,
    title: "Elderly Care",
    description: "Respectful daily support for older adults living with frailty, reduced mobility or chronic illness.",
    targetPopulation: "Older adults living with frailty, reduced mobility or chronic illness",
    fullDetails:
      "Respectful, dignified daily support designed for aging loved ones. Our geriatric care assistants and nurses help older adults maintain safety, independence, and well-being at home, offering support with daily routines, mobility, nutrition, and companionship.",
    benefits: [
      "Personal care, hygiene and grooming assistance",
      "Fall prevention and safe mobility assistance",
      "Medication reminders and adherence support",
      "Nutritious meal preparation and feeding assistance",
      "Companionship and mental stimulation",
      "Regular updates to family living near or abroad",
    ],
    process: [
      "Comprehensive needs and mobility assessment",
      "Personalized daily routine care plan development",
      "Matching with respectful, vetted elder caregivers",
      "Continuous wellness reviews and family check-ins",
    ],
    image: "/images/medrelief-elderly-care-hero.webp",
  },
  {
    id: "physiotherapy",
    icon: Activity,
    title: "Home Physiotherapy",
    description: "Practical rehabilitation after surgery, stroke, injury or changes in mobility.",
    targetPopulation: "Patients recovering from surgery, stroke, injury or mobility loss",
    fullDetails:
      "Licensed physical therapists bring evidence-based rehabilitation directly to your living room. Whether rebuilding strength after orthopedic surgery, restoring motor function post-stroke, or preventing falls, we help patients regain functional independence safely.",
    benefits: [
      "Post-operative orthopedic rehabilitation",
      "Neurological rehabilitation after stroke or spinal injury",
      "Mobility, balance and gait re-education",
      "Pain management and therapeutic exercise",
      "Ergonomic and home accessibility recommendations",
      "Caregiver transfer and exercise training",
    ],
    process: [
      "In-depth physical assessment and movement evaluation",
      "Custom goal-oriented treatment plan",
      "Scheduled in-home therapy sessions",
      "Objective progress evaluation and exercise adjustment",
    ],
    image: "/images/medrelief-physiotherapy-hero.webp",
  },
  {
    id: "pedicare",
    icon: Baby,
    title: "Care for Children with Complex Needs",
    description: "Family-centred support for children living with complex or long-term health needs.",
    targetPopulation: "Children living with complex or long-term health needs",
    fullDetails:
      "Compassionate, specialized pediatric nursing care designed around the unique needs of the child and family. Our nurses work patiently with developmental conditions, feeding tubes, breathing support, and complex daily regimens to ensure children thrive in a nurturing home environment.",
    benefits: [
      "Pediatric nursing by trained healthcare professionals",
      "Support with specialized medical equipment and feeds",
      "Developmental encouragement and sensory stimulation",
      "Respite and peace of mind for parents and guardians",
      "Emergency readiness and safe escalation plans",
      "Flexible care hours adapted to school and family life",
    ],
    process: [
      "Gentle consultation with parents and primary pediatricians",
      "Detailed care plan matching the child’s medical and comfort needs",
      "Compassionate caregiver matching and family orientation",
      "Consistent, loving care with continuous communication",
    ],
    image: "/images/medrelief-child-care-hero.webp",
  },
  {
    id: "chronocare",
    icon: Users,
    title: "Chronic Care Support",
    description: "Ongoing follow-up, appointment coordination and care navigation for chronic conditions.",
    targetPopulation: "Patients managing long-term conditions (hypertension, diabetes, cardiac, respiratory)",
    fullDetails:
      "Navigating long-term medical conditions can be overwhelming. MedRelief coordinates chronic care by organizing specialist appointments, monitoring regular blood pressures and blood sugars, tracking medication refills, and helping families understand test results and treatment plans.",
    benefits: [
      "Regular at-home monitoring (blood pressure, blood glucose, vitals)",
      "Medication schedule tracking and refill management",
      "Coordination of doctor visits and laboratory tests",
      "Dietary and lifestyle counseling",
      "Prevention of preventable hospital admissions",
      "Centralized record of health trends for family review",
    ],
    process: [
      "Health history intake and medical records organization",
      "Formulation of a chronic monitoring schedule",
      "Regular home check-ins and vital sign tracking",
      "Proactive physician collaboration and escalation when needed",
    ],
    image: "/images/medrelief-home-nursing-hero.webp",
  },
  {
    id: "travelshield",
    icon: Plane,
    title: "TravelShield Medicare",
    description: "Complete medical support for tourists, expatriates, and mobile professionals in Uganda.",
    targetPopulation: "Tourists, expatriates, and mobile professionals",
    fullDetails:
      "Reliable healthcare support for travelers and expats in Uganda. From pre-travel medical advice and local clinic referrals to medical escort and bedside nursing during sudden illnesses while in Uganda.",
    benefits: [
      "Local healthcare provider network coordination",
      "Bedside nurse support during hotel or hospital stay",
      "Emergency medical guidance and travel clinic coordination",
      "Prescription access and medical escort support",
    ],
    process: [
      "Direct WhatsApp contact with travel itinerary and health need",
      "Immediate assistance or clinic coordination",
      "Continuous support during stay in Uganda",
    ],
    image: "/images/c02fcf_3951dd06c1b0442199694ebc3ed4aeaa~mv2.avif",
  },
  {
    id: "teleconsult",
    icon: Stethoscope,
    title: "General Teleconsultation",
    description: "Virtual consultations with general practitioners and specialists.",
    targetPopulation: "Individuals and families seeking medical guidance remotely",
    fullDetails:
      "Connect with doctors and health navigators by phone or video call for initial triage, prescription clarification, and care recommendations before or after hospital admission.",
    benefits: [
      "Direct consultation with medical professionals",
      "Triage and guidance for appropriate level of care",
      "No clinic waiting room delays",
      "Follow-up discussions for hospital discharge plans",
    ],
    process: [
      "Request a consultation via phone or WhatsApp",
      "Connect with healthcare provider",
      "Receive actionable care recommendations",
    ],
    image: "/images/african-american-female-doctor-giving-video-call-consultation-looking-camera-13339-320446.webp",
  },
]
