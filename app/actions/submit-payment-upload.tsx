"use server"

import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { z } from "zod"

import { createAdminClient } from '@/lib/supabase/admin'

const uploadSchema = z.object({
  paymentReference: z.string().min(1, "Payment reference is required"),
})

export interface PaymentUploadResult {
  success: boolean
  message: string
  paymentProofUrl?: string
}

export interface PaymentUploadResult {
  success: boolean
  message: string
  paymentProofUrl?: string
}

export async function submitPaymentUpload(formData: FormData): Promise<PaymentUploadResult> {
  const rawData = {
    paymentReference: formData.get("paymentReference") as string,
    paymentProof: formData.get("paymentProof") as File | null,
  }

  const validation = uploadSchema.safeParse(rawData)
  if (!validation.success) {
    return {
      success: false,
      message: "Invalid payment reference",
    }
  }

  const { paymentReference } = validation.data
  const paymentProofFile = rawData.paymentProof

  if (!paymentProofFile || paymentProofFile.size === 0) {
    return {
      success: false,
      message: "Please select a payment proof image",
    }
  }

  try {
    const supabase = await createAdminClient()

    // Upload payment proof
    const fileExt = paymentProofFile.name.split('.').pop()
    const fileName = `${paymentReference}.${fileExt}`
    
    const arrayBuffer = await paymentProofFile.arrayBuffer()
    const uint8Array = new Uint8Array(arrayBuffer)

    const { error: uploadError } = await supabase.storage
      .from('payment-proofs')
      .upload(`payments/${fileName}`, uint8Array, {
        contentType: paymentProofFile.type,
        upsert: true,
      })

    if (uploadError) {
      return {
        success: false,
        message: `Storage upload failed: ${uploadError.message}`,
      }
    }

    // Get public URL
    const { data: urlData } = supabase.storage
      .from('payment-proofs')
      .getPublicUrl(`payments/${fileName}`)

    const paymentProofUrl = urlData.publicUrl

    // Update patient record
    const { error: updateError } = await supabase
      .from('patients')
      .update({ 
        payment_proof_url: paymentProofUrl,
        status: 'payment_verified'
      })
      .eq('payment_reference', paymentReference)

    if (updateError) {
      return {
        success: false,
        message: `Database update failed: ${updateError.message}`,
      }
    }

    return {
      success: true,
      message: "Payment proof uploaded successfully! Awaiting admin verification.",
      paymentProofUrl,
    }

  } catch (error) {
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    }
  }
}
