"use client"

import { useEffect, useState } from "react"
import { 
  Users, Search, Filter, RefreshCw, Eye, CheckCircle, FileText,
  ChevronLeft, ChevronRight, Heart, Shield, Plane, Activity, CalendarClock, Stethoscope, XCircle, Download
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { createClient } from "@/lib/supabase/client"
import AdminLayout from "@/components/admin/admin-layout"

interface Patient {
  id: string
  created_at: string
  first_name: string
  last_name: string
  email: string
  phone: string
  service: string
  message: string
  medical_report_url: string | null
  payment_proof_url: string | null
  payment_reference: string | null
  preferred_date: string | null
  preferred_time: string | null
  status: string
}

interface PatientWithFormatted extends Patient {
  formatted_date: string
  formatted_time: string
}

const services: Record<string, { name: string; icon: React.ElementType }> = {
  "home-care": { name: "Pedicare – Complex Children", icon: Heart },
  "geriatric": { name: "GeriCare – Elderly Homecare", icon: Shield },
  "travel": { name: "Travelshield Medicare", icon: Plane },
  "physical-therapy": { name: "Home-based PhysioTherapy", icon: Activity },
  "chrono-care": { name: "Chrono-care Navigation", icon: CalendarClock },
  "general-consultation": { name: "General TeleConsultation", icon: Stethoscope },
}

const getServiceIcon = (serviceKey: string) => services[serviceKey]?.icon || Stethoscope
const getServiceName = (serviceKey: string) => services[serviceKey]?.name || serviceKey

const statusColors: Record<string, { bg: string; text: string }> = {
  new: { bg: "bg-blue-100", text: "text-blue-800" },
  contacted: { bg: "bg-green-100", text: "text-green-800" },
  archived: { bg: "bg-gray-100", text: "text-gray-800" },
}

export default function PatientsPage() {
  const supabase = createClient()
  
  const [patients, setPatients] = useState<PatientWithFormatted[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedPatient, setSelectedPatient] = useState<PatientWithFormatted | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 15

  useEffect(() => {
    fetchPatients()
  }, [])

  const fetchPatients = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from("patients")
        .select("*")
        .order("created_at", { ascending: false })

      if (error) {
        console.error("Error fetching patients:", error)
        return
      }

      const formattedData = (data || []).map((patient) => {
        const formattedDate = patient.preferred_date
          ? new Date(patient.preferred_date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
          : "-"
        const formattedTime = patient.preferred_time
          ? patient.preferred_time.charAt(0).toUpperCase() + patient.preferred_time.slice(1)
          : "-"

        return { ...patient, formatted_date: formattedDate, formatted_time: formattedTime }
      })

      setPatients(formattedData)
    } catch (err) {
      console.error("Unexpected error:", err)
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const { error } = await supabase.from("patients").update({ status: newStatus }).eq("id", id)
      if (error) {
        console.error("Error updating status:", error)
        return
      }
      setPatients((prev) => prev.map((p) => (p.id === id ? { ...p, status: newStatus } : p)))
      if (selectedPatient?.id === id) {
        setSelectedPatient((prev) => prev ? { ...prev, status: newStatus } : null)
      }
    } catch (err) {
      console.error("Error:", err)
    }
  }

  const filteredPatients = patients.filter((patient) => {
    const matchesSearch =
      patient.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.phone.includes(searchTerm)
    const matchesStatus = statusFilter === "all" || patient.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const totalPages = Math.ceil(filteredPatients.length / itemsPerPage)
  const paginatedPatients = filteredPatients.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <AdminLayout title="All Patients" subtitle="View and manage all patient records">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Patients</p>
                <p className="text-2xl font-bold text-gray-900">{patients.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Contacted</p>
                <p className="text-2xl font-bold text-green-600">
                  {patients.filter((p) => p.status === "contacted").length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Archived</p>
                <p className="text-2xl font-bold text-gray-600">
                  {patients.filter((p) => p.status === "archived").length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, email, or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Status</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="archived">Archived</option>
              </select>
              <button
                onClick={fetchPatients}
                className="p-2.5 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                title="Refresh"
              >
                <RefreshCw className={`w-5 h-5 text-gray-600 ${loading ? "animate-spin" : ""}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Patients Table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          {loading ? (
            <div className="p-12 text-center">
              <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-gray-500">Loading patients...</p>
            </div>
          ) : paginatedPatients.length === 0 ? (
            <div className="p-12 text-center">
              <Users className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No patients found</p>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Patient</th>
                      <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Contact</th>
                      <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Service</th>
                      <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Status</th>
                      <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {paginatedPatients.map((patient, index) => (
                      <motion.tr
                        key={patient.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.03 }}
                        className="hover:bg-gray-50 transition-colors cursor-pointer"
                        onClick={() => setSelectedPatient(patient)}
                      >
                        <td className="px-6 py-4">
                          <p className="font-medium text-gray-900">
                            {patient.first_name} {patient.last_name}
                          </p>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-sm text-gray-900">{patient.email}</p>
                          <p className="text-sm text-gray-500">{patient.phone}</p>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            {(() => {
                              const Icon = getServiceIcon(patient.service)
                              return (
                                <>
                                  <Icon className="w-5 h-5 text-blue-600" />
                                  <span className="text-sm text-gray-900">
                                    {getServiceName(patient.service)}
                                  </span>
                                </>
                              )
                            })()}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                            statusColors[patient.status]?.bg || "bg-gray-100"
                          } ${statusColors[patient.status]?.text || "text-gray-800"}`}>
                            {patient.status.charAt(0).toUpperCase() + patient.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <Eye className="w-4 h-4 text-blue-600" />
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                    {Math.min(currentPage * itemsPerPage, filteredPatients.length)} of{" "}
                    {filteredPatients.length} results
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-sm text-gray-600">
                      Page {currentPage} of {totalPages}
                    </span>
                    <button
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                      className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Patient Details Modal */}
      <AnimatePresence>
        {selectedPatient && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPatient(null)}
            />
            <motion.div
              className="fixed right-0 top-0 h-full w-full max-w-lg bg-white shadow-2xl z-50 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Patient Details</h2>
                  <button onClick={() => setSelectedPatient(null)} className="p-2 hover:bg-gray-100 rounded-lg">
                    <XCircle className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-gray-900 mb-4">Patient Information</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Name</span>
                        <span className="text-sm font-medium text-gray-900">
                          {selectedPatient.first_name} {selectedPatient.last_name}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Email</span>
                        <a href={`mailto:${selectedPatient.email}`} className="text-sm font-medium text-blue-600 hover:underline">
                          {selectedPatient.email}
                        </a>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Phone</span>
                        <a href={`tel:${selectedPatient.phone}`} className="text-sm font-medium text-blue-600 hover:underline">
                          {selectedPatient.phone}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-gray-900 mb-4">Appointment Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Service</span>
                        <span className="text-sm font-medium text-gray-900">
                          {getServiceName(selectedPatient.service)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Preferred Date</span>
                        <span className="text-sm font-medium text-gray-900">{selectedPatient.formatted_date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Preferred Time</span>
                        <span className="text-sm font-medium text-gray-900">{selectedPatient.formatted_time}</span>
                      </div>
                    </div>
                  </div>

                  {selectedPatient.medical_report_url && (
                    <div className="bg-gray-50 rounded-xl p-5">
                      <h3 className="font-semibold text-gray-900 mb-4">Medical Report</h3>
                      <a
                        href={selectedPatient.medical_report_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-white rounded-lg border hover:border-blue-300"
                      >
                        <FileText className="w-8 h-8 text-blue-600" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">View Medical Report</p>
                        </div>
                        <Download className="w-5 h-5 text-gray-400" />
                      </a>
                    </div>
                  )}

                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-gray-900 mb-4">Payment Details</h3>
                    {selectedPatient.payment_reference && (
                      <div className="flex justify-between mb-3">
                        <span className="text-sm text-gray-500">Reference</span>
                        <span className="text-sm font-mono font-medium text-gray-900">{selectedPatient.payment_reference}</span>
                      </div>
                    )}
                    {selectedPatient.payment_proof_url ? (
                      <div className="space-y-2">
                        <a
                          href={selectedPatient.payment_proof_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <img
                            src={selectedPatient.payment_proof_url}
                            alt="Payment screenshot"
                            className="w-full rounded-lg border border-gray-200 object-contain max-h-64 bg-white"
                          />
                        </a>
                        <a
                          href={selectedPatient.payment_proof_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-xs text-blue-600 hover:underline"
                        >
                          <Download className="w-3.5 h-3.5" />
                          Open full image
                        </a>
                      </div>
                    ) : (
                      <p className="text-sm text-gray-400 italic">No payment screenshot uploaded yet.</p>
                    )}
                  </div>

                  <div className="flex gap-3">
                    {selectedPatient.status === "new" && (
                      <button
                        onClick={() => updateStatus(selectedPatient.id, "contacted")}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
                      >
                        <CheckCircle className="w-5 h-5" />
                        Mark Contacted
                      </button>
                    )}
                    {selectedPatient.status !== "archived" && (
                      <button
                        onClick={() => updateStatus(selectedPatient.id, "archived")}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                      >
                        <FileText className="w-5 h-5" />
                        Archive
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </AdminLayout>
  )
}
