"use client"

import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { 
  Calendar, LogOut, Users, LayoutDashboard, Settings, Bell, BarChart3, X,
  Home, FileText, Globe, MailOpen, Briefcase
} from "lucide-react"
import { createClient } from "@/lib/supabase/client"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  stats: {
    total: number
    new: number
    contacted: number
    archived: number
  }
}

export default function Sidebar({ isOpen, onClose, stats }: SidebarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/admin/login")
  }

  const menuItems = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "All Patients",
      href: "/admin/patients",
      icon: Users,
      badge: stats.total,
    },
    {
      name: "Analytics",
      href: "/admin/analytics",
      icon: BarChart3,
    },
    {
      name: "Notifications",
      href: "/admin/notifications",
      icon: Bell,
      showDot: stats.new > 0,
    },
  ]

  const mainSiteLinks = [
    {
      name: "Home",
      href: "/",
      icon: Home,
    },
    {
      name: "Services",
      href: "/services",
      icon: Briefcase,
    },
    {
      name: "About",
      href: "/about",
      icon: FileText,
    },
    {
      name: "Contact",
      href: "/contact",
      icon: MailOpen,
    },
    {
      name: "Blog",
      href: "/blog",
      icon: Globe,
    },
  ]

  return (
    <>
      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
            <Link href="/admin/dashboard" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Calendar className="w-4 h-4 text-white" />
              </div>
              <div>
                <h1 className="text-sm font-semibold text-gray-900">MedRelief</h1>
                <p className="text-xs text-gray-500">Admin Portal</p>
              </div>
            </Link>
            <button
              onClick={onClose}
              className="lg:hidden p-1 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {/* Admin Section */}
            <div className="mb-4">
              <p className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Admin</p>
              <div className="space-y-1">
                {menuItems.map((item) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href
                  
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => onClose()}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        isActive
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                      {item.badge !== undefined && item.badge > 0 && (
                        <span className="ml-auto bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-full">
                          {item.badge}
                        </span>
                      )}
                      {item.showDot && (
                        <span className="ml-auto w-2 h-2 bg-red-500 rounded-full"></span>
                      )}
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Website Section */}
            <div className="border-t border-gray-200 pt-4">
              <p className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Website</p>
              <div className="space-y-1">
                {mainSiteLinks.map((item) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href
                  
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => onClose()}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        isActive
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                      <span className="ml-auto text-gray-400">↗</span>
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-200">
              <Link
                href="/admin/settings"
                onClick={() => onClose()}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  pathname === "/admin/settings"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Settings className="w-5 h-5" />
                <span className="font-medium">Settings</span>
              </Link>
            </div>
          </nav>

          {/* User Profile / Logout */}
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Sign Out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
    </>
  )
}
