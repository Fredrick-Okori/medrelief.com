"use server"

import { createClient } from '@/lib/supabase/server'
import { z } from 'zod'

const bookingSchema = z.object({
  firstName: z.string().min(1, 'First name required'),
  lastName: z.string().min(1, 'Last name required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(10, 'Phone number too short'),
  service: z.string().min(1, 'Service required'),
  preferredDate: z.string().optional(),
  preferredTime: z.enum(['morning', 'afternoon', 'evening']).optional(),
  message: z.string().min(10, 'Message too short'),
  medicalReport: z.any().optional(),
})

export interface SubmitContactResult {
  success: boolean
  message: string
  reference?: string
}

export async function submitContact(formData: FormData): Promise<SubmitContactResult> {
  const data = Object.fromEntries(formData.entries())
  
  const validation = bookingSchema.safeParse({
    ...data,
    firstName: data.firstName as string,
    lastName: data.lastName as string,
    email: data.email as string,
    phone: data.phone as string,
    service: data.service as string,
    preferredDate: data.preferredDate as string || undefined,
    preferredTime: data.preferredTime as 'morning' | 'afternoon' | 'evening' || undefined,
    message: data.message as string,
  })

  if (!validation.success) {
    return {
      success: false,
      message: 'Please fix form errors: ' + validation.error.errors[0].message,
    }
  }

  const { firstName, lastName, email, phone, service, preferredDate, preferredTime, message } = validation.data
  const medicalReportFile = formData.get('medicalReport') as File | null

  let medicalReportUrl: string | null = null

  try {
    const supabase = await createClient()

    // Upload medical report if provided
    if (medicalReportFile && medicalReportFile.size > 0) {
      const fileExt = medicalReportFile.name.split('.').pop()
      const fileName = `reports/${Date.now()}-${Math.random().toString(36).slice(2, 9)}.${fileExt}`
      
      const arrayBuffer = await medicalReportFile.arrayBuffer()
      const uint8Array = new Uint8Array(arrayBuffer)

      const { error: uploadError } = await supabase.storage
        .from('medical-reports')
        .upload(fileName, uint8Array, {
          contentType: medicalReportFile.type,
          upsert: true,
        })

      if (uploadError) {
        return {
          success: false,
          message: `Report upload failed: ${uploadError.message}`,
        }
      }

      const { data: urlData } = supabase.storage
        .from('medical-reports')
        .getPublicUrl(fileName)
      
      medicalReportUrl = urlData.publicUrl
    }

    // Generate unique payment reference
    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '')
    const randomStr = Math.random().toString(36).slice(2, 7).toUpperCase()
    const paymentReference = `MR-${dateStr}-${randomStr}`

    // Insert booking
    const { error: insertError } = await supabase
      .from('patients')
      .insert({
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        service,
        message,
        medical_report_url: medicalReportUrl,
        payment_reference: paymentReference,
        preferred_date: preferredDate ? new Date(preferredDate) : null,
        preferred_time: preferredTime || null,
        status: 'new',
      })

    if (insertError) {
      return {
        success: false,
        message: `Booking failed: ${insertError.message}`,
      }
    }

    return {
      success: true,
      message: 'Booking created successfully!',
      reference: paymentReference,
    }

  } catch (error) {
    console.error('submitContact error:', error)
    return {
      success: false,
      message: 'Server error. Please try again.',
    }
  }
}
