import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    
    const supabase = await createClient()
    
    // Get form values
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const service = formData.get("service") as string
    const preferredDate = formData.get("preferredDate") as string
    const preferredTime = formData.get("preferredTime") as string
    const message = formData.get("message") as string
    
    // Log values for debugging
    console.log("Form values:", { firstName, lastName, email, phone, service, preferredDate, preferredTime, message })
    
    // Try to insert
    const { data, error } = await supabase
      .from("patients")
      .insert({
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
        service: service,
        preferred_date: preferredDate,
        preferred_time: preferredTime,
        message: message,
        status: "new"
      })
      .select()
    
    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json({
        success: false,
        error: error.message,
        code: error.code,
        hint: error.hint,
        details: error.details
      }, { status: 400 })
    }
    
    return NextResponse.json({
      success: true,
      message: "Form submitted successfully!",
      data: data
    })
  } catch (err: any) {
    console.error("Catch error:", err)
    return NextResponse.json({
      success: false,
      error: err.message,
      stack: err.stack
    }, { status: 500 })
  }
}

