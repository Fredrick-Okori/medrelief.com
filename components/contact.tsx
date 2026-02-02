"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Phone, Mail, MapPin, MessageCircle, Upload, X, FileText, CheckCircle2, Calendar, Clock, User, Heart, Shield, Plane, Activity, CalendarClock, Stethoscope } from "lucide-react"
import { motion } from "framer-motion"
import { submitContact, type SubmitContactResult } from "@/app/actions/submit-contact"

const contactInfoVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
}

const formVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
}

// Allowed file types for medical reports
const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]

const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  })

  const [medicalReport, setMedicalReport] = useState<File | null>(null)
  const [medicalReportError, setMedicalReportError] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    setMedicalReportError("")

    if (!file) {
      setMedicalReport(null)
      return
    }

    // Validate file type
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      setMedicalReportError("Invalid file type. Please upload PDF, JPEG, PNG, WebP, or Word document.")
      setMedicalReport(null)
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }
      return
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      setMedicalReportError("File is too large. Maximum size is 10MB.")
      setMedicalReport(null)
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }
      return
    }

    setMedicalReport(file)
  }

  const removeFile = () => {
    setMedicalReport(null)
    setMedicalReportError("")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + " B"
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB"
    return (bytes / (1024 * 1024)).toFixed(1) + " MB"
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setErrors({})

    // Create FormData for submission
    const formDataToSubmit = new FormData()
    formDataToSubmit.append("firstName", formData.firstName)
    formDataToSubmit.append("lastName", formData.lastName)
    formDataToSubmit.append("email", formData.email)
    formDataToSubmit.append("phone", formData.phone)
    formDataToSubmit.append("service", formData.service)
    formDataToSubmit.append("preferredDate", formData.preferredDate)
    formDataToSubmit.append("preferredTime", formData.preferredTime)
    formDataToSubmit.append("message", formData.message)
    if (medicalReport) {
      formDataToSubmit.append("medicalReport", medicalReport)
    }

    try {
      const result: SubmitContactResult = await submitContact(formDataToSubmit)

      if (result.success) {
        setSubmitted(true)
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          preferredDate: "",
          preferredTime: "",
          message: "",
        })
        removeFile()
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setError(result.message || "An error occurred")
        if (result.errors) {
          setErrors(result.errors)
        }
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  // Get today's date for min date attribute
  const today = new Date().toISOString().split('T')[0]

  return (
    <section id="contact" className="w-full py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            variants={contactInfoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-3">
              <motion.p
                className="text-sm font-semibold text-blue-600 uppercase tracking-widest"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Book an Appointment
              </motion.p>
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Schedule Your Healthcare Visit
              </motion.h2>
              <motion.p
                className="text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Book your appointment today and take the first step towards better health. Our team is ready to provide you with exceptional care.
              </motion.p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Phone, title: "Phone", content: "+256 784 040 350", href: "tel:+256784040350" },
                { icon: MessageCircle, title: "WhatsApp", content: "+256 784 040 350", href: "https://wa.me/256784040350" },
                { icon: Mail, title: "Email", content: "medrelief325@gmail.com", href: "mailto:medrelief325@gmail.com" },
                { icon: MapPin, title: "Available", content: "Serving nationwide • 24/7 Support" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </motion.div>
                  <div>
                    <p className="font-medium text-gray-900">{item.title}</p>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        target={item.href.startsWith('https://wa.me') ? '_blank' : undefined}
                        rel={item.href.startsWith('https://wa.me') ? 'noopener noreferrer' : undefined}
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-gray-600">{item.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Appointment Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 border border-gray-200 space-y-6"
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {submitted && (
              <motion.div
                className="p-4 bg-green-50 border border-green-200 rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="font-medium text-green-800">Appointment Request Received!</p>
                    <p className="text-sm text-green-600 mt-1">We'll confirm your appointment via email or phone shortly.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {error && (
              <motion.div
                className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 font-medium"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                {error}
              </motion.div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">First Name <span className="text-red-500">*</span></label>
                <motion.div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <motion.input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className={`w-full pl-10 pr-4 py-2 rounded-lg border bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:opacity-50 transition-all ${
                      errors.firstName ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-blue-500"
                    }`}
                    placeholder="John"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>
                {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Last Name <span className="text-red-500">*</span></label>
                <motion.div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <motion.input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className={`w-full pl-10 pr-4 py-2 rounded-lg border bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:opacity-50 transition-all ${
                      errors.lastName ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-blue-500"
                    }`}
                    placeholder="Doe"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>
                {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-900">Email <span className="text-red-500">*</span></label>
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={loading}
                className={`w-full px-4 py-2 rounded-lg border bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:opacity-50 transition-all ${
                  errors.email ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-blue-500"
                }`}
                placeholder="john@example.com"
                whileFocus={{ scale: 1.02 }}
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-900">Phone <span className="text-red-500">*</span></label>
              <motion.input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                disabled={loading}
                className={`w-full px-4 py-2 rounded-lg border bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:opacity-50 transition-all ${
                  errors.phone ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-blue-500"
                }`}
                placeholder="+256 700 000 000"
                whileFocus={{ scale: 1.02 }}
              />
              {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-900">Select Service <span className="text-red-500">*</span></label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                disabled={loading}
                className={`w-full px-4 py-2 rounded-lg border bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:opacity-50 transition-all ${
                  errors.service ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-blue-500"
                }`}
              >
                <option value="">Choose a service</option>
                <option value="home-care">Pedicare – Complex Children</option>
                <option value="geriatric">GeriCare – Elderly Homecare</option>
                <option value="travel">Travelshield Medicare</option>
                <option value="physical-therapy">Home-based PhysioTherapy</option>
                <option value="chrono-care">Chrono-care Navigation</option>
                <option value="general-consultation">General TeleConsultation</option>
              </select>
              {errors.service && <p className="text-sm text-red-500">{errors.service}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Preferred Date <span className="text-red-500">*</span></label>
                <motion.div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <motion.input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    required
                    min={today}
                    disabled={loading}
                    className={`w-full pl-10 pr-4 py-2 rounded-lg border bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:opacity-50 transition-all ${
                      errors.preferredDate ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-blue-500"
                    }`}
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>
                {errors.preferredDate && <p className="text-sm text-red-500">{errors.preferredDate}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Preferred Time <span className="text-red-500">*</span></label>
                <motion.div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className={`w-full pl-10 pr-4 py-2 rounded-lg border bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:opacity-50 transition-all appearance-none ${
                      errors.preferredTime ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-blue-500"
                    }`}
                  >
                    <option value="">Select time</option>
                    <option value="morning">Morning (8AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 4PM)</option>
                    <option value="evening">Evening (4PM - 6PM)</option>
                  </select>
                </motion.div>
                {errors.preferredTime && <p className="text-sm text-red-500">{errors.preferredTime}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-900">Medical Report <span className="text-gray-400">(Optional)</span></label>
              {!medicalReport ? (
                <div
                  className={`border-2 border-dashed rounded-lg p-6 text-center transition-all cursor-pointer ${
                    medicalReportError
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300 hover:border-blue-500 hover:bg-blue-50/50"
                  }`}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    onChange={handleFileChange}
                    accept={ALLOWED_FILE_TYPES.join(",")}
                    className="hidden"
                    disabled={loading}
                  />
                  <div className="flex flex-col items-center gap-2">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      medicalReportError ? "bg-red-100" : "bg-blue-100"
                    }`}>
                      <Upload className={`w-6 h-6 ${medicalReportError ? "text-red-500" : "text-blue-600"}`} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        Upload medical records
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        PDF, JPEG, PNG, WebP or Word (max 10MB)
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {medicalReport.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {formatFileSize(medicalReport.size)}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={removeFile}
                    disabled={loading}
                    className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </motion.div>
              )}
              {medicalReportError && (
                <p className="text-sm text-red-500 mt-1">{medicalReportError}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-900">Additional Notes <span className="text-red-500">*</span></label>
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                required
                disabled={loading}
                className={`w-full px-4 py-2 rounded-lg border bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none disabled:opacity-50 transition-all ${
                  errors.message ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-blue-500"
                }`}
                placeholder="Please describe your health concerns or reason for visit..."
                whileFocus={{ scale: 1.02 }}
              />
              {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Booking...
                </>
              ) : (
                <>
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </>
              )}
            </motion.button>
            
            <p className="text-xs text-gray-500 text-center">
              By booking, you agree to our{' '}
              <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>
              {' '}and consent to be contacted regarding your appointment.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

