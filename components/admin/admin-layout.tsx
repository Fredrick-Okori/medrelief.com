"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Menu, Bell } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import Sidebar from "./sidebar"

interface AdminLayoutProps {
  children: React.ReactNode
  title: string
  subtitle?: string
}

export default function AdminLayout({ children, title, subtitle }: AdminLayoutProps) {
  const router = useRouter()
  const supabase = createClient()
  
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [authChecking, setAuthChecking] = useState(true)
  const [stats, setStats] = useState({
    total: 0,
    new: 0,
    contacted: 0,
    archived: 0,
  })

  useEffect(() => {
    const isAdminUser = (user: any) => {
      return user?.app_metadata?.role === "admin" || user?.user_metadata?.role === "admin"
    }

    const ensureAuthenticated = async () => {
      const { data } = await supabase.auth.getSession()
      if (!data.session?.user || !isAdminUser(data.session.user)) {
        await supabase.auth.signOut()
        router.replace("/admin/login?error=unauthorized")
        return
      }

      setAuthChecking(false)
      fetchStats()
    }

    ensureAuthenticated()
  }, [router, supabase])

  const fetchStats = async () => {
    try {
      const { data, error } = await supabase
        .from("patients")
        .select("status")

      if (error) {
        return
      }

      const stats = {
        total: data?.length || 0,
        new: data?.filter((p) => p.status === "new").length || 0,
        contacted: data?.filter((p) => p.status === "contacted").length || 0,
        archived: data?.filter((p) => p.status === "archived").length || 0,
      }

      setStats(stats)
    } catch (err) {
    }
  }

  if (authChecking) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex items-center gap-3 text-gray-600">
          <div className="w-6 h-6 border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
          <span>Checking session...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} stats={stats} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Menu className="w-5 h-5 text-gray-600" />
              </button>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
                {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-gray-600" />
                {stats.new > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                )}
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
