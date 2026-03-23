"use client"

import { useEffect, useState } from 'react'
import { useSearchParams, useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, Upload, CreditCard, Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

type State = {
  message: string
  success: boolean
}

export default function PaymentUploadPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const serviceId = params.id as string
  const referenceFromUrl = searchParams.get('ref') || ''
  
  const [state, setState] = useState<State>({ message: '', success: false })
  const [fetchLoading, setFetchLoading] = useState(true)
  const [patientData, setPatientData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [paymentReference, setPaymentReference] = useState(referenceFromUrl)
  const [paymentProof, setPaymentProof] = useState<File | null>(null)

  useEffect(() => {
    if (referenceFromUrl) {
      fetchPatientData(referenceFromUrl)
    } else {
      setFetchLoading(false)
    }
  }, [referenceFromUrl])

  const fetchPatientData = async (ref: string) => {
    try {
      // Fetch patient data using ref
      setFetchLoading(false)
    } catch (error) {
      setFetchLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!paymentProof || !paymentReference) return

    setLoading(true)
    setState({ message: '', success: false })

    const formData = new FormData()
    formData.append('paymentReference', paymentReference)
    formData.append('paymentProof', paymentProof)

    try {
      const response = await fetch('/actions/submit-payment-upload', {
        method: 'POST',
        body: formData
      })
      const result = await response.json()
      
      if (result.success) {
        setState({ message: result.message, success: true })
      } else {
        setState({ message: result.message || 'Upload failed', success: false })
      }
    } catch (error) {
      setState({ message: 'Network error. Please try again.', success: false })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 py-12">
      <div className="max-w-md mx-auto px-4">
        <Link href={`/services/${serviceId}`} className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-8">
          <ArrowLeft className="w-5 h-5" />
          Back to Service
        </Link>
        <Card className="border-0 shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-t-xl">
            <CardTitle className="text-xl flex items-center gap-2">
              <CreditCard className="w-6 h-6" />
              Upload Payment Proof
            </CardTitle>
            <CardDescription>Complete your booking by uploading payment screenshot</CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            {fetchLoading ? (
              <div className="text-center py-12">
                <Loader2 className="w-8 h-8 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-gray-500">Loading booking summary...</p>
              </div>
            ) : (
              <>
                {patientData && (
                  <div className="mb-8 p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-400">
                    <h3 className="text-xl font-bold mb-4 text-blue-900">Booking Summary</h3>
                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div>
                        <span className="font-medium text-gray-700 block">Patient:</span>
                        <span className="font-semibold">{patientData.first_name} {patientData.last_name}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700 block">Service:</span>
                        <span className="font-semibold">{patientData.service}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700 block">Date:</span>
                        <span>{patientData.preferred_date}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700 block">Time:</span>
                        <span>{patientData.preferred_time}</span>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border shadow-sm">
                      <p className="font-mono text-2xl font-black text-emerald-700 mb-1 tracking-wider">{paymentReference}</p>
                      <p className="text-xs uppercase text-gray-500 tracking-wide font-medium">Payment Reference</p>
                    </div>
                  </div>
                )}
                {state.success ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-24 h-24 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 p-6">
                      <CheckCircle className="w-12 h-12 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Payment Proof Uploaded!</h3>
                    <p className="text-lg text-gray-600 mb-8">Your appointment is now pending admin verification.</p>
                    <p className="text-sm text-gray-500 mb-6">You'll receive confirmation soon.</p>
                    <Button asChild size="lg" className="w-full">
                      <Link href="/admin/login">View Status in Dashboard</Link>
                    </Button>
                  </motion.div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                      <Label htmlFor="paymentReference">Payment Reference *</Label>
                      <Input 
                        id="paymentReference" 
                        value={paymentReference}
                        onChange={(e) => setPaymentReference(e.target.value)}
                        required 
                        className="font-mono text-lg tracking-wider bg-gradient-to-r from-gray-50 to-gray-100"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="paymentProof">Payment Screenshot * (JPG, PNG, PDF)</Label>
                      <Input 
                        id="paymentProof" 
                        type="file" 
                        accept="image/*,.pdf"
                        onChange={(e) => setPaymentProof(e.target.files?.[0] || null)}
                        required 
                      />
                      <p className="text-xs text-gray-500">Make sure reference number is clearly visible</p>
                    </div>
                    {state.message && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm"
                      >
                        {state.message}
                      </motion.div>
                    )}
                    <Button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-lg h-12 flex items-center gap-2">
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin mr-2" />
                          Uploading...
                        </>
                      ) : (
                        <>
                          <Upload className="w-5 h-5" />
                          Upload Payment Proof
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </>
            )}
          </CardContent>
          {!state.success && (
            <CardFooter className="pt-0 pb-6 px-8 border-t">
              <p className="text-xs text-gray-500 text-center">
                Having trouble? <Link href="tel:+256784040350" className="text-emerald-600 hover:underline font-medium">Call +256 784 040 350</Link>
              </p>
            </CardFooter>
          )}
        </Card>
      </div>
    </div>
  )
}

