"use client"

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ArrowLeft, Calendar, Clock, Phone, CheckCircle, CreditCard, UploadCloud } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SERVICES } from '@/lib/services-data'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useState } from 'react'
import { submitContact } from '@/app/actions/submit-contact'
import { submitPaymentUpload } from '@/app/actions/submit-payment-upload'
import type { SubmitContactResult } from '@/app/actions/submit-contact'
import type { PaymentUploadResult } from '@/app/actions/submit-payment-upload'

// Schemas matching server
const step1Schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  preferredDate: z.string().min(1, "Preferred date is required"),
  preferredTime: z.string().min(1, "Preferred time is required"),
  message: z.string().min(10, "Please provide additional details (at least 10 characters)"),
  medicalReport: z.any().optional(),
})

const step2Schema = z.object({
  paymentProof: z.any().optional(),
})

type Step1Data = z.infer<typeof step1Schema>
type Step2Data = z.infer<typeof step2Schema>

export default function BookingPage() {
  const params = useParams()
  const serviceId = params.id as string
  const service = SERVICES.find(s => s.id === serviceId)

  if (!service) {
    return <div>Service not found</div>
  }

  const [currentStep, setCurrentStep] = useState<'step1' | 'step2' | 'success'>('step1')
  // FIX: single declaration of paymentRef
  const [paymentRef, setPaymentRef] = useState('')
  const [serverMessage, setServerMessage] = useState('')
  const [loading, setLoading] = useState(false)

  // Step 1 form
  const step1Form = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      preferredDate: '',
      preferredTime: '',
      message: '',
      medicalReport: undefined,
    },
  })

  // FIX: step2 schema no longer includes paymentReference (it's read-only state,
  // not a user-editable field). We pass paymentRef directly to the FormData.
  const step2Form = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      paymentProof: undefined,
    },
  })

  const onStep1Submit = async (data: Step1Data) => {
    setLoading(true)
    setServerMessage('')

    const fd = new FormData()
    fd.append('firstName', data.firstName)
    fd.append('lastName', data.lastName)
    fd.append('email', data.email)
    fd.append('phone', data.phone)
    fd.append('service', serviceId)
    fd.append('preferredDate', data.preferredDate)
    fd.append('preferredTime', data.preferredTime)
    fd.append('message', data.message)
    if (data.medicalReport && (data.medicalReport as FileList)[0]) {
      fd.append('medicalReport', (data.medicalReport as FileList)[0])
    }

    const result = await submitContact(fd) as SubmitContactResult

    if (result.success) {
      setCurrentStep('step2')
    } else {
      setServerMessage(result.message || 'Booking failed')
    }
    setLoading(false)
  }

  const onStep2Submit = async (data: Step2Data) => {
    setLoading(true)
    setServerMessage('')

    const fd = new FormData()
    // FIX: use paymentRef from state directly — not from form field
    fd.append('paymentReference', paymentRef)
    if (data.paymentProof && (data.paymentProof as FileList)[0]) {
      fd.append('paymentProof', (data.paymentProof as FileList)[0])
    }

    const result = await submitPaymentUpload(fd) as PaymentUploadResult

    if (result.success) {
      setCurrentStep('success')
    } else {
      setServerMessage(result.message || 'Upload failed')
    }
    setLoading(false)
  }

  const handleBack = () => {
    if (currentStep === 'step2') {
      setCurrentStep('step1')
      step2Form.reset()
      setServerMessage('')
    }
  }

  const encodedMessage = encodeURIComponent(
    `Hi MedRelief! I'm interested in booking "${service.title}". Please provide more information and available appointment slots.`
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <Link href={`/services/${serviceId}`} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="w-5 h-5" />
          Back to Service
        </Link>

        <Card className="border-0 shadow-2xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8">
            <CardTitle className="text-2xl">
              {currentStep === 'step1' && `Book ${service.title}`}
              {currentStep === 'step2' && (
                <>
                  <CreditCard className="w-6 h-6 inline -ml-1 mr-2" />
                  Upload Payment Proof
                </>
              )}
              {currentStep === 'success' && 'Booking Complete!'}
            </CardTitle>
            <CardDescription className="text-blue-100">
              {currentStep === 'step1' && 'Complete your details to book appointment'}
              {currentStep === 'step2' && 'Upload your payment screenshot to complete'}
              {currentStep === 'success' && 'Payment proof received. Awaiting verification.'}
            </CardDescription>
          </CardHeader>

          <CardContent className="p-8">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center mb-2">
                <div className="flex gap-2 text-sm font-medium">
                  <span className={currentStep === 'step1' ? 'text-blue-600 font-semibold' : 'text-gray-500'}>
                    Step 1: Details
                  </span>
                  <span className="text-gray-400">/</span>
                  <span className={currentStep === 'step2' ? 'text-blue-600 font-semibold' : 'text-gray-500'}>
                    Step 2: Payment
                  </span>
                </div>
              </div>
              <div className="flex items-center w-full bg-gray-200 rounded-full h-3">
                <div
                  className="h-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-500 ease-in-out shadow-md"
                  style={{ width: currentStep === 'step1' ? '50%' : '100%' }}
                />
              </div>
            </div>

            {serverMessage && !loading && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm mb-6"
              >
                {serverMessage}
              </motion.div>
            )}

            {/* ── STEP 1 ── */}
            {currentStep === 'step1' && (
              <form onSubmit={step1Form.handleSubmit(onStep1Submit)} className="space-y-6">
                <input type="hidden" name="service" value={serviceId} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" {...step1Form.register('firstName')} />
                    {step1Form.formState.errors.firstName && (
                      <p className="text-sm text-red-600">{step1Form.formState.errors.firstName.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" {...step1Form.register('lastName')} />
                    {step1Form.formState.errors.lastName && (
                      <p className="text-sm text-red-600">{step1Form.formState.errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" {...step1Form.register('email')} />
                    {step1Form.formState.errors.email && (
                      <p className="text-sm text-red-600">{step1Form.formState.errors.email.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input id="phone" {...step1Form.register('phone')} />
                    {step1Form.formState.errors.phone && (
                      <p className="text-sm text-red-600">{step1Form.formState.errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="preferredDate">
                      Preferred Date <Calendar className="w-4 h-4 inline ml-1" />
                    </Label>
                    <Input id="preferredDate" type="date" {...step1Form.register('preferredDate')} />
                    {step1Form.formState.errors.preferredDate && (
                      <p className="text-sm text-red-600">{step1Form.formState.errors.preferredDate.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preferredTime">
                      Preferred Time <Clock className="w-4 h-4 inline ml-1" />
                    </Label>
                    <Controller
                      control={step1Form.control}
                      name="preferredTime"
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger id="preferredTime">
                            <SelectValue placeholder="Select time slot" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (12PM - 4PM)</SelectItem>
                            <SelectItem value="evening">Evening (4PM - 6PM)</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {step1Form.formState.errors.preferredTime && (
                      <p className="text-sm text-red-600">{step1Form.formState.errors.preferredTime.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Information *</Label>
                  <Textarea
                    id="message"
                    {...step1Form.register('message')}
                    rows={4}
                    placeholder="Tell us about your needs..."
                  />
                  {step1Form.formState.errors.message && (
                    <p className="text-sm text-red-600">{step1Form.formState.errors.message.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="medicalReport">Medical Report (Optional)</Label>
                  <Input
                    id="medicalReport"
                    type="file"
                    accept="image/*,.pdf"
                    {...step1Form.register('medicalReport')}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg h-12"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Clock className="w-5 h-5 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5 mr-2" />
                      Next: Book Appointment
                    </>
                  )}
                </Button>
              </form>
            )}

            {/* ── STEP 2 ── */}
            {currentStep === 'step2' && paymentRef && (
              <form onSubmit={step2Form.handleSubmit(onStep2Submit)} className="space-y-6">
                {/* Reference display — read-only, driven by state not form field */}
                <div className="space-y-2">
                  <Label>Payment Reference</Label>
                  <div className="font-mono text-xl font-bold tracking-wider bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-emerald-200 rounded-md px-4 py-3 select-all">
                    {paymentRef}
                  </div>
                  <p className="text-xs text-gray-500">Use this reference when making your payment</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="paymentProof">Payment Screenshot * (JPG, PNG, PDF)</Label>
                  <Input
                    id="paymentProof"
                    type="file"
                    accept="image/*,.pdf"
                    {...step2Form.register('paymentProof')}
                  />
                  <p className="text-xs text-gray-500">Make sure reference number is clearly visible in the screenshot</p>
                  {step2Form.formState.errors.paymentProof && (
                    <p className="text-sm text-red-600">{String(step2Form.formState.errors.paymentProof.message)}</p>
                  )}
                </div>

                <div className="flex gap-3">
                  <Button type="button" variant="outline" onClick={handleBack} className="flex-1">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Details
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <UploadCloud className="w-5 h-5 mr-2 animate-spin" />
                        Uploading...
                      </>
                    ) : (
                      <>
                        <UploadCloud className="w-5 h-5 mr-2" />
                        Submit Payment Proof
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}

            {/* ── SUCCESS ── */}
            {currentStep === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-24 h-24 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-8 p-6">
                  <CheckCircle className="w-12 h-12 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Booking Complete!</h3>
                <p className="text-lg text-gray-600 mb-8">Your payment proof has been uploaded successfully.</p>
                <p className="text-gray-600 mb-8 bg-emerald-50 p-4 rounded-lg font-mono text-xl">
                  Reference: <strong>{paymentRef}</strong>
                </p>
                <p className="text-sm text-gray-500 mb-8">You'll receive confirmation via email/SMS soon.</p>
                <div className="space-y-3">
                  <Button asChild size="lg" className="w-full">
                    <Link href="/admin/login">View Status in Dashboard</Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full">
                    <Link href={`/services/${serviceId}`}>Book Another Service</Link>
                  </Button>
                </div>
              </motion.div>
            )}
          </CardContent>

          <div className="px-8 pb-6 text-center">
            <p className="text-sm text-gray-500">
              <Link
                href={`https://wa.me/256784040350?text=${encodedMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium gap-1 inline-flex items-center"
              >
                <Phone className="w-4 h-4" />
                WhatsApp +256 784 040 350
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}