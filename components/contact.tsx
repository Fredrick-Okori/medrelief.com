"use client"

import React, { useState } from "react"
import Link from "next/link"
import {
  Phone, MessageCircle, Mail, MapPin,
  User, Clock, Upload, FileText,
  ArrowLeft, ArrowRight, CheckCircle, Loader2, CreditCard,
  Sparkles, Shield, CalendarDays,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useToast } from "@/components/ui/use-toast"
import { SERVICES, type Service } from "@/lib/services-data"
import { submitContact } from "@/app/actions/submit-contact"
import { submitPaymentUpload } from "@/app/actions/submit-payment-upload"
import { z } from "zod"

// ─── Schema ──────────────────────────────────────────────────────────────────

const bookingSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  service: z.string().min(1, "Please select a service"),
  preferredDate: z.string().min(1, "Preferred date is required"),
  preferredTime: z.string().min(1, "Preferred time is required"),
  message: z.string().min(10, "Please provide at least 10 characters"),
  medicalReport: z.any().optional(),
})

type BookingData = z.infer<typeof bookingSchema>

// ─── Step indicator ──────────────────────────────────────────────────────────

function StepIndicator({ current }: { current: number }) {
  const steps = [
    { label: "Details", icon: User },
    { label: "Payment", icon: CreditCard },
    { label: "Confirmed", icon: CheckCircle },
  ]
  return (
    <div className="flex items-center justify-between mb-8 px-2">
      {steps.map((s, i) => {
        const done = i < current
        const active = i === current
        const Icon = s.icon
        return (
          <React.Fragment key={s.label}>
            <div className="flex items-center gap-2.5">
              <motion.div
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 ${
                  done
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                    : active
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                      : "bg-gray-100 text-gray-400"
                }`}
                animate={active ? { scale: [1, 1.08, 1] } : {}}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                {done ? <CheckCircle className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
              </motion.div>
              <span
                className={`text-sm font-medium hidden sm:block transition-colors duration-300 ${
                  done ? "text-emerald-600" : active ? "text-blue-600" : "text-gray-400"
                }`}
              >
                {s.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className="flex-1 mx-3 sm:mx-4">
                <div className="h-[2px] rounded-full bg-gray-100 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: i < current ? "100%" : "0%" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                </div>
              </div>
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Contact() {
  const { toast } = useToast()
  const [step, setStep] = useState(0)
  const [bookingData, setBookingData] = useState<BookingData | null>(null)
  const [paymentReference, setPaymentReference] = useState("")
  const [paymentProof, setPaymentProof] = useState<File | null>(null)
  const [paymentLoading, setPaymentLoading] = useState(false)
  const [paymentError, setPaymentError] = useState("")
  const [submittingBooking, setSubmittingBooking] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<BookingData>({ resolver: zodResolver(bookingSchema) })

  // ── Step 0 → 1
  const handleBookingSubmit = async (data: BookingData) => {
    setSubmittingBooking(true)
    try {
      const formData = new FormData()
      Object.entries(data).forEach(([k, v]) => {
        if (v !== undefined && v !== null) formData.append(k, v as string)
      })
      const result = await submitContact(formData)
      if (result && result.success === false) {
        toast({ variant: "destructive", title: "Submission Failed", description: result.message })
        return
      }
      setBookingData(data)
      if (result?.reference) setPaymentReference(result.reference)
      setStep(1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    } catch (err) {
      console.error(err)
      setBookingData(data)
      setStep(1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    } finally {
      setSubmittingBooking(false)
    }
  }

  // ── Step 1 → 2
  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!paymentProof || !paymentReference) {
      setPaymentError("Please provide both a reference number and a payment screenshot.")
      return
    }
    setPaymentLoading(true)
    setPaymentError("")
    const formData = new FormData()
    formData.append("paymentReference", paymentReference)
    formData.append("paymentProof", paymentProof)
    try {
      const result = await submitPaymentUpload(formData)
      if (result.success) {
        setStep(2)
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else {
        setPaymentError(result.message || "Upload failed. Please try again.")
      }
    } catch {
      setPaymentError("Upload failed. Please try again.")
    } finally {
      setPaymentLoading(false)
    }
  }

  // ─── Input styles
  const inp =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-all duration-200 hover:border-gray-300"
  const iconInp =
    "w-full rounded-xl border border-gray-200 bg-white pl-10 pr-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-all duration-200 hover:border-gray-300"

  const contactItems = [
    { icon: Phone, label: "Phone", value: "+256 784 040 350", href: "tel:+256784040350" },
    { icon: MessageCircle, label: "WhatsApp", value: "+256 784 040 350", href: "https://wa.me/256784040350" },
    { icon: Mail, label: "Email", value: "medrelief325@gmail.com", href: "mailto:medrelief325@gmail.com" },
    { icon: MapPin, label: "Available", value: "Nationwide · 24/7 Support" },
  ]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/40 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-100/50 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-50/60 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-[minmax(320px,420px)_1fr] gap-12 lg:gap-20 items-start">

          {/* ══════════════ LEFT COLUMN ══════════════ */}
          <motion.div
            className="lg:sticky lg:top-28"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              <span className="text-xs font-semibold text-blue-600 tracking-wide uppercase">
                Book an Appointment
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-gray-900 leading-[1.15] mb-4 tracking-tight">
              Schedule Your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                Healthcare Visit
              </span>
            </h1>

            <p className="text-gray-500 text-[15px] leading-relaxed mb-10 max-w-sm">
              Book your appointment today and take the first step towards better health.
              Our team is ready to provide you with exceptional care.
            </p>

            {/* Contact cards */}
            <div className="space-y-3">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <motion.div
                  key={label}
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300 group cursor-default"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/60 flex items-center justify-center shrink-0 group-hover:from-blue-100 group-hover:to-blue-50 transition-colors duration-300">
                    <Icon className="w-[18px] h-[18px] text-blue-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <Link
                        href={href}
                        className="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors truncate block"
                      >
                        {value}
                      </Link>
                    ) : (
                      <p className="text-sm font-medium text-gray-800 truncate">{value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex items-center gap-6">
              <div className="flex items-center gap-2 text-gray-400">
                <Shield className="w-4 h-4" />
                <span className="text-xs font-medium">SSL Encrypted</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <CalendarDays className="w-4 h-4" />
                <span className="text-xs font-medium">Instant Booking</span>
              </div>
            </div>
          </motion.div>

          {/* ══════════════ RIGHT COLUMN ══════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40 p-6 sm:p-8 lg:p-10">
              {step > 0 && <StepIndicator current={step} />}

              <AnimatePresence mode="wait">

                {/* ══ STEP 0: Booking Form ══ */}
                {step === 0 && (
                  <motion.div
                    key="step0"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <div className="mb-7">
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1.5">
                        Book Your Appointment
                      </h2>
                      <p className="text-sm text-gray-400">
                        Fill in your details below and we&apos;ll get you scheduled.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit(handleBookingSubmit)} className="space-y-5" noValidate>

                      {/* First / Last Name */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                            First Name <span className="text-red-400">*</span>
                          </label>
                          <div className="relative">
                            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                            <input placeholder="John" className={iconInp} {...register("firstName")} />
                          </div>
                          {errors.firstName && (
                            <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                              <span className="w-1 h-1 rounded-full bg-red-500 inline-block" />
                              {errors.firstName.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                            Last Name <span className="text-red-400">*</span>
                          </label>
                          <div className="relative">
                            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                            <input placeholder="Doe" className={iconInp} {...register("lastName")} />
                          </div>
                          {errors.lastName && (
                            <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                              <span className="w-1 h-1 rounded-full bg-red-500 inline-block" />
                              {errors.lastName.message}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                          Email <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                          <input type="email" placeholder="john@example.com" className={iconInp} {...register("email")} />
                        </div>
                        {errors.email && (
                          <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-red-500 inline-block" />
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                          Phone <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                          <input placeholder="+256 700 000 000" className={iconInp} {...register("phone")} />
                        </div>
                        {errors.phone && (
                          <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-red-500 inline-block" />
                            {errors.phone.message}
                          </p>
                        )}
                      </div>

                      {/* Select Service */}
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                          Select Service <span className="text-red-400">*</span>
                        </label>
                        <select
                          className={`${inp} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20width%3d%2212%22%20height%3d%2212%22%20viewBox%3d%220%200%2024%2024%22%20fill%3d%22none%22%20stroke%3d%22%239ca3af%22%20stroke-width%3d%222%22%3e%3cpolyline%20points%3d%226%209%2012%2015%2018%209%22%2f%3e%3c%2fsvg%3e')] bg-[length:14px] bg-[right_12px_center] bg-no-repeat pr-10`}
                          defaultValue=""
                          {...register("service")}
                        >
                          <option value="" disabled>Choose a service</option>
                          {SERVICES.map((s: Service) => (
                            <option key={s.id} value={s.id}>{s.title}</option>
                          ))}
                        </select>
                        {errors.service && (
                          <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-red-500 inline-block" />
                            {errors.service.message}
                          </p>
                        )}
                      </div>

                      {/* Preferred Date + Time */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                            Preferred Date <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="date"
                            className={inp}
                            min={new Date().toISOString().split("T")[0]}
                            {...register("preferredDate")}
                          />
                          {errors.preferredDate && (
                            <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                              <span className="w-1 h-1 rounded-full bg-red-500 inline-block" />
                              {errors.preferredDate.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                            Preferred Time <span className="text-red-400">*</span>
                          </label>
                          <select
                            className={`${inp} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20width%3d%2212%22%20height%3d%2212%22%20viewBox%3d%220%200%2024%2024%22%20fill%3d%22none%22%20stroke%3d%22%239ca3af%22%20stroke-width%3d%222%22%3e%3cpolyline%20points%3d%226%209%2012%2015%2018%209%22%2f%3e%3c%2fsvg%3e')] bg-[length:14px] bg-[right_12px_center] bg-no-repeat pr-10`}
                            defaultValue=""
                            {...register("preferredTime")}
                          >
                            <option value="" disabled>Select time</option>
                            <option value="morning">Morning · 8 AM – 12 PM</option>
                            <option value="afternoon">Afternoon · 12 – 4 PM</option>
                            <option value="evening">Evening · 4 – 6 PM</option>
                          </select>
                          {errors.preferredTime && (
                            <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                              <span className="w-1 h-1 rounded-full bg-red-500 inline-block" />
                              {errors.preferredTime.message}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Medical Report upload */}
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                          Medical Report{" "}
                          <span className="text-gray-400 font-normal">(Optional)</span>
                        </label>
                        <label className="group flex flex-col items-center justify-center gap-2.5 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/50 hover:border-blue-300 hover:bg-blue-50/30 transition-all duration-300 cursor-pointer py-8 px-4">
                          <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center group-hover:shadow-md group-hover:border-blue-100 transition-all duration-300">
                            <Upload className="w-5 h-5 text-blue-500" />
                          </div>
                          <div className="text-center">
                            <span className="text-sm font-medium text-gray-700 block">
                              Upload medical records
                            </span>
                            <span className="text-xs text-gray-400 mt-0.5 block">
                              PDF, JPEG, PNG, WebP or Word (max 10 MB)
                            </span>
                          </div>
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.webp"
                            className="hidden"
                            onChange={(e) => setValue("medicalReport", e.target.files?.[0])}
                          />
                        </label>
                        {watch("medicalReport") && (
                          <div className="flex items-center gap-2 mt-2 px-3 py-2 rounded-lg bg-blue-50 border border-blue-100 text-sm text-blue-700">
                            <FileText className="w-4 h-4 shrink-0 text-blue-500" />
                            <span className="truncate font-medium">{(watch("medicalReport") as File)?.name}</span>
                            <span className="ml-auto shrink-0 text-xs text-blue-400">
                              {((watch("medicalReport") as File)?.size / 1024 / 1024).toFixed(2)} MB
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Additional Notes */}
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                          Additional Notes <span className="text-red-400">*</span>
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Describe your symptoms, medical history, current medications, or any specific requirements…"
                          className={`${inp} resize-none`}
                          {...register("message")}
                        />
                        {errors.message && (
                          <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-red-500 inline-block" />
                            {errors.message.message}
                          </p>
                        )}
                      </div>

                      <motion.button
                        type="submit"
                        disabled={submittingBooking}
                        className="w-full h-12 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30"
                        whileTap={{ scale: 0.985 }}
                      >
                        {submittingBooking ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" /> Saving…
                          </>
                        ) : (
                          <>
                            Continue to Payment <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </motion.button>
                    </form>
                  </motion.div>
                )}

                {/* ══ STEP 1: Payment upload ══ */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    {/* Booking summary */}
                    {bookingData && (
                      <div className="mb-8 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/80 to-white p-5">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center">
                            <FileText className="w-3.5 h-3.5 text-blue-600" />
                          </div>
                          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                            Booking Summary
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
                          {[
                            ["Patient", `${bookingData.firstName} ${bookingData.lastName}`],
                            ["Service", bookingData.service],
                            ["Date", bookingData.preferredDate],
                            ["Time", bookingData.preferredTime.charAt(0).toUpperCase() + bookingData.preferredTime.slice(1)],
                          ].map(([label, value]) => (
                            <div key={label}>
                              <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-0.5">
                                {label}
                              </p>
                              <p className="font-semibold text-gray-800">{value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mb-7">
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1.5">
                        Upload Payment Proof
                      </h2>
                      <p className="text-sm text-gray-400">
                        Submit your mobile money or bank transfer confirmation.
                      </p>
                    </div>

                    <form onSubmit={handlePaymentSubmit} className="space-y-5">

                      {/* Reference number */}
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                          Payment Reference Number <span className="text-red-400">*</span>
                        </label>
                        <input
                          value={paymentReference}
                          onChange={(e) => setPaymentReference(e.target.value)}
                          placeholder="e.g. TXN-20240321-XXXX"
                          required
                          className={`${inp} font-mono tracking-wider`}
                        />
                        <p className="text-xs text-gray-400 mt-1.5">
                          Transaction ID from your mobile money or bank transfer confirmation.
                        </p>
                      </div>

                      {/* Screenshot upload */}
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                          Payment Screenshot <span className="text-red-400">*</span>
                        </label>
                        <label className="group flex flex-col items-center justify-center gap-2.5 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/50 hover:border-blue-300 hover:bg-blue-50/30 transition-all duration-300 cursor-pointer py-8 px-4">
                          <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center group-hover:shadow-md group-hover:border-blue-100 transition-all duration-300">
                            <Upload className="w-5 h-5 text-blue-500" />
                          </div>
                          {paymentProof ? (
                            <div className="text-center">
                              <span className="text-sm font-medium text-gray-800 block">
                                {paymentProof.name}
                              </span>
                              <span className="text-xs text-gray-400 mt-0.5 block">Click to change file</span>
                            </div>
                          ) : (
                            <div className="text-center">
                              <span className="text-sm font-medium text-gray-700 block">
                                Upload payment screenshot
                              </span>
                              <span className="text-xs text-gray-400 mt-0.5 block">
                                JPG, PNG or PDF — reference number must be visible
                              </span>
                            </div>
                          )}
                          <input
                            type="file"
                            accept="image/*,.pdf"
                            className="hidden"
                            onChange={(e) => setPaymentProof(e.target.files?.[0] || null)}
                          />
                        </label>
                      </div>

                      {/* Error */}
                      <AnimatePresence>
                        {paymentError && (
                          <motion.p
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3"
                          >
                            {paymentError}
                          </motion.p>
                        )}
                      </AnimatePresence>

                      <div className="flex gap-3 pt-1">
                        <motion.button
                          type="button"
                          onClick={() => setStep(0)}
                          className="flex-1 h-12 rounded-xl border border-gray-200 bg-white text-gray-600 text-sm font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 flex items-center justify-center gap-2"
                          whileTap={{ scale: 0.985 }}
                        >
                          <ArrowLeft className="w-4 h-4" /> Back
                        </motion.button>
                        <motion.button
                          type="submit"
                          disabled={paymentLoading}
                          className="flex-[2] h-12 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 disabled:opacity-60 text-white text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
                          whileTap={{ scale: 0.985 }}
                        >
                          {paymentLoading ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" /> Uploading…
                            </>
                          ) : (
                            <>
                              <Upload className="w-4 h-4" /> Upload & Confirm
                            </>
                          )}
                        </motion.button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {/* ══ STEP 2: Success ══ */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="py-8 sm:py-12 text-center"
                  >
                    <motion.div
                      className="w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200/60 flex items-center justify-center mx-auto mb-6"
                      initial={{ scale: 0, rotate: -10 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.15 }}
                    >
                      <CheckCircle className="w-9 h-9 text-emerald-500" />
                    </motion.div>

                    <motion.h2
                      className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                    >
                      Booking Confirmed!
                    </motion.h2>
                    <motion.p
                      className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto mb-8"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 }}
                    >
                      Your payment proof has been received. We&apos;ll verify and send a confirmation to your email shortly.
                    </motion.p>

                    {bookingData && (
                      <motion.div
                        className="rounded-2xl border border-gray-200 text-left mb-8 overflow-hidden"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
                          <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                            Appointment Details
                          </span>
                        </div>
                        <div className="divide-y divide-gray-100">
                          {[
                            ["Name", `${bookingData.firstName} ${bookingData.lastName}`],
                            ["Service", bookingData.service],
                            ["Date", bookingData.preferredDate],
                            ["Time", bookingData.preferredTime.charAt(0).toUpperCase() + bookingData.preferredTime.slice(1)],
                            ...(paymentReference ? [["Reference", paymentReference]] : []),
                          ].map(([label, value]) => (
                            <div key={label} className="flex justify-between items-center px-5 py-3.5 text-sm">
                              <span className="text-gray-500">{label}</span>
                              <span
                                className={`font-semibold ${
                                  label === "Reference"
                                    ? "font-mono text-blue-600 text-xs tracking-wider bg-blue-50 px-2.5 py-1 rounded-lg"
                                    : "text-gray-900"
                                }`}
                              >
                                {value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <p className="text-xs text-gray-400">
                        Questions?{" "}
                        <Link
                          href="tel:+256784040350"
                          className="text-blue-600 hover:underline font-medium"
                        >
                          Call +256 784 040 350
                        </Link>
                      </p>
                    </motion.div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}