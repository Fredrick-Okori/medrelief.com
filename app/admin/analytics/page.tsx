"use client"

import { useEffect, useState } from "react"
import { BarChart3, TrendingUp, Users, Calendar, Activity } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import AdminLayout from "@/components/admin/admin-layout"

export default function AnalyticsPage() {
  const supabase = createClient()
  const [stats, setStats] = useState({
    totalPatients: 0,
    newThisMonth: 0,
    contactedThisMonth: 0,
    byService: {} as Record<string, number>,
  })

  useEffect(() => {
    fetchAnalytics()
  }, [])

  const fetchAnalytics = async () => {
    try {
      const { data, error } = await supabase.from("patients").select("*")

      if (error) {
        console.error("Error fetching analytics:", error)
        return
      }

      const now = new Date()
      const thisMonthStart = new Date(now.getFullYear(), now.getMonth(), 1)

      const totalPatients = data?.length || 0
      const newThisMonth = data?.filter(
        (p) => new Date(p.created_at) >= thisMonthStart && p.status === "new"
      ).length || 0
      const contactedThisMonth = data?.filter(
        (p) => new Date(p.created_at) >= thisMonthStart && p.status === "contacted"
      ).length || 0

      const byService: Record<string, number> = {}
      data?.forEach((p) => {
        byService[p.service] = (byService[p.service] || 0) + 1
      })

      setStats({ totalPatients, newThisMonth, contactedThisMonth, byService })
    } catch (err) {
      console.error("Error:", err)
    }
  }

  const serviceNames: Record<string, string> = {
    "home-care": "Pedicare – Complex Children",
    "geriatric": "GeriCare – Elderly Homecare",
    "travel": "Travelshield Medicare",
    "physical-therapy": "Home-based PhysioTherapy",
    "chrono-care": "Chrono-care Navigation",
    "general-consultation": "General TeleConsultation",
  }

  return (
    <AdminLayout title="Analytics & Reports" subtitle="Track performance and patient insights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Patients</p>
                <p className="text-3xl font-bold text-gray-900">{stats.totalPatients}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">New This Month</p>
                <p className="text-3xl font-bold text-green-600">{stats.newThisMonth}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Contacted This Month</p>
                <p className="text-3xl font-bold text-purple-600">{stats.contactedThisMonth}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Breakdown */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="w-6 h-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Appointments by Service</h3>
          </div>
          <div className="space-y-4">
            {Object.entries(stats.byService)
              .sort((a, b) => b[1] - a[1])
              .map(([service, count]) => {
                const percentage = stats.totalPatients > 0 
                  ? Math.round((count / stats.totalPatients) * 100) 
                  : 0
                return (
                  <div key={service}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        {serviceNames[service] || service}
                      </span>
                      <span className="text-sm text-gray-500">
                        {count} ({percentage}%)
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                )
              })}
          </div>
        </div>

        {/* Coming Soon */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200 p-12 text-center">
          <Calendar className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">More Analytics Coming Soon</h3>
          <p className="text-gray-600">
            Advanced charts, patient trends, and detailed reports will be available here.
          </p>
        </div>
      </div>
    </AdminLayout>
  )
}
