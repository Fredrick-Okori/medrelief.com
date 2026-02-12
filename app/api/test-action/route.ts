import { submitContact } from "@/app/actions/submit-contact"
import { NextResponse } from "next/server"

export async function POST() {
  try {
    // Create a FormData object to test the server action
    const formData = new FormData()
    formData.append("firstName", "Action")
    formData.append("lastName", "Test")
    formData.append("email", "action@test.com")
    formData.append("phone", "+256700000002")
    formData.append("service", "chrono-care")
    formData.append("preferredDate", "2025-01-28")
    formData.append("preferredTime", "morning")
    formData.append("message", "Testing server action directly")

    const result = await submitContact(formData)

    return NextResponse.json(result)
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err.message,
      stack: err.stack
    }, { status: 500 })
  }
}

