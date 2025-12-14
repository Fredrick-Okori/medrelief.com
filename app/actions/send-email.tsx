"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: {
  firstName: string
  lastName: string
  email: string
  phone: string
  service: string
  message: string
}) {
  try {
    // This requires verifying the recipient email in Resend dashboard
    const result = await resend.emails.send({
      from: "noreply@resend.dev",
      to: "fred.okori@gmail.com",
      replyTo: formData.email,
      subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #080cc0; margin-bottom: 20px;">New Contact Form Submission</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 8px 0;"><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> ${formData.email}</p>
            <p style="margin: 8px 0;"><strong>Phone:</strong> ${formData.phone}</p>
            <p style="margin: 8px 0;"><strong>Service Interest:</strong> ${formData.service}</p>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-left: 4px solid #080cc0; border-radius: 4px;">
            <h3 style="color: #080cc0; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #333;">${formData.message.replace(/\n/g, "<br>")}</p>
          </div>
          
          <p style="color: #999; font-size: 12px; margin-top: 20px;">This is an automated email from MedRelief contact form.</p>
        </div>
      `,
    })

    if (result.error) {
      console.error("[v0] Resend error:", result.error)
      return {
        success: false,
        message: "Failed to send email. Please try again later or contact us directly.",
      }
    }

    return {
      success: true,
      message: "Email sent successfully!",
    }
  } catch (error) {
    console.error("[v0] Email error:", error)
    return {
      success: false,
      message: "An error occurred while sending your message.",
    }
  }
}
