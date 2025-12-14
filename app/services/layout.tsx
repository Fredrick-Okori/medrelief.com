import type React from "react"
export const metadata = {
  title: "Service Details | MedRelief",
  description: "Detailed information about MedRelief healthcare services",
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
