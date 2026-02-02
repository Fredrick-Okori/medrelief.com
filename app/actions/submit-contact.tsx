"use server"

import { Resend } from "resend"
import { createClient } from "@/lib/supabase/server"
import { z } from "zod"

// Validation schema for appointment booking
const appointmentSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  service: z.string().min(1, "Please select a service"),
  preferredDate: z.string().min(1, "Preferred date is required"),
  preferredTime: z.string().min(1, "Preferred time is required"),
  message: z.string().min(10, "Please provide additional details (at least 10 characters)"),
})

const resend = new Resend(process.env.RESEND_API_KEY)

export interface SubmitContactResult {
  success: boolean
  message: string
  errors?: Record<string, string>
}

export async function submitContact(
  formData: FormData
): Promise<SubmitContactResult> {
  // Extract data from FormData
  const rawData = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    service: formData.get("service") as string,
    preferredDate: formData.get("preferredDate") as string,
    preferredTime: formData.get("preferredTime") as string,
    message: formData.get("message") as string,
    medicalReport: formData.get("medicalReport") as File,
  }

  // Validate the data
  const validationResult = appointmentSchema.safeParse(rawData)

  if (!validationResult.success) {
    const errors: Record<string, string> = {}
    validationResult.error.errors.forEach((error) => {
      errors[error.path[0]] = error.message
    })
    return {
      success: false,
      message: "Please fix the errors below",
      errors,
    }
  }

  const data = validationResult.data
  let medicalReportUrl: string | null = null

  // Map time slots to readable format
  const timeSlotMap: Record<string, string> = {
    morning: "Morning (8AM - 12PM)",
    afternoon: "Afternoon (12PM - 4PM)",
    evening: "Evening (4PM - 6PM)",
  }

  try {
    const supabase = await createClient()

    // Upload medical report if provided
    const medicalReportFile = rawData.medicalReport
    if (medicalReportFile && medicalReportFile.size > 0) {
      const fileName = `${Date.now()}-${medicalReportFile.name.replace(/[^a-zA-Z0-9.-]/g, "")}`
      
      // Convert File to ArrayBuffer
      const arrayBuffer = await medicalReportFile.arrayBuffer()
      const uint8Array = new Uint8Array(arrayBuffer)

      const { error: uploadError } = await supabase.storage
        .from("medical-reports")
        .upload(`patients/${fileName}`, uint8Array, {
          contentType: medicalReportFile.type,
        })

      if (uploadError) {
        console.error("[Supabase] Upload error:", uploadError)
        return {
          success: false,
          message: "Failed to upload medical report. Please try again.",
        }
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from("medical-reports")
        .getPublicUrl(`patients/${fileName}`)
      
      medicalReportUrl = urlData.publicUrl
    }

    // Insert appointment booking into database
    const { error: dbError } = await supabase.from("patients").insert({
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      phone: data.phone,
      service: data.service,
      message: `${data.message}\n\n📅 Preferred Date: ${data.preferredDate}\n🕐 Preferred Time: ${timeSlotMap[data.preferredTime] || data.preferredTime}`,
      medical_report_url: medicalReportUrl,
      status: "new",
    })

    if (dbError) {
      console.error("[Supabase] Database error:", dbError)
      return {
        success: false,
        message: "Failed to book your appointment. Please try again.",
      }
    }

    // Send email notification via Resend
    const serviceNames: Record<string, string> = {
      "home-care": "🏠 Pedicare – Complex Children",
      "geriatric": "👴 GeriCare – Elderly Homecare",
      "travel": "✈️ Travelshield Medicare",
      "physical-therapy": "💪 Home-based PhysioTherapy",
      "chrono-care": "🗓️ Chrono-care Navigation",
      "general-consultation": "👨‍⚕️ General TeleConsultation",
    }

    const emailResult = await resend.emails.send({
      from: "noreply@resend.dev",
      to: "fred.okori@gmail.com",
      replyTo: data.email,
      subject: `📅 New Appointment: ${data.firstName} ${data.lastName} - ${serviceNames[data.service] || data.service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #080cc0 0%, #0a1628 100%); padding: 30px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">📅 New Appointment Request</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 10px 0 0 0;">MedRelief Healthcare Services</p>
          </div>
          
          <div style="background-color: #f5f5f5; padding: 30px; border-radius: 0 0 8px 8px;">
            <div style="background-color: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
              <h2 style="color: #080cc0; margin-top: 0; margin-bottom: 20px; font-size: 18px;">Patient Information</h2>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #333; width: 140px;">Name:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333; font-weight: 500;">${data.firstName} ${data.lastName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #333;">Email:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;"><a href="mailto:${data.email}" style="color: #080cc0;">${data.email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #333;">Phone:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${data.phone}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #333;">Service:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${serviceNames[data.service] || data.service}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #333;">Preferred Date:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;"><strong>${new Date(data.preferredDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</strong></td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #333;">Preferred Time:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${timeSlotMap[data.preferredTime] || data.preferredTime}</td>
                </tr>
                ${medicalReportUrl ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #333;">Medical Report:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="${medicalReportUrl}" style="color: #080cc0; text-decoration: underline;">View Attached Report</a></td>
                </tr>
                ` : ""}
              </table>
            </div>
            
            <div style="background-color: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
              <h2 style="color: #080cc0; margin-top: 0; margin-bottom: 20px; font-size: 18px;">Additional Notes</h2>
              <div style="background-color: #f9f9f9; padding: 20px; border-radius: 6px; border-left: 4px solid #080cc0; line-height: 1.7; color: #333;">
                ${data.message.replace(/\n/g, "<br>")}
              </div>
            </div>
            
            <div style="margin-top: 20px; display: flex; gap: 10px; justify-content: center;">
              <a href="https://supabase.com/dashboard/project/your-project-id/table/patients" style="display: inline-block; padding: 12px 24px; background-color: #080cc0; color: white; text-decoration: none; border-radius: 6px; font-weight: 600;">View in Dashboard</a>
            </div>
            
            <p style="color: #999; font-size: 12px; text-align: center; margin-top: 30px;">
              This is an automated appointment request from MedRelief website.<br>
              Received at ${new Date().toLocaleString("en-US", { dateStyle: "full", timeStyle: "long" })}
            </p>
          </div>
        </div>
      `,
    })

    if (emailResult.error) {
      console.error("[Resend] Email error:", emailResult.error)
      // Don't fail the submission if email fails - data is saved in DB
    }

    return {
      success: true,
      message: "Appointment booked successfully! We'll confirm your appointment shortly.",
    }
  } catch (error) {
    console.error("[Appointment] Unexpected error:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    }
  }
}

