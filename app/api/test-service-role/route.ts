import { createAdminClient } from "@/lib/supabase/admin"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    
    const supabase = await createAdminClient()
    
    const { data, error } = await supabase
      .from("patients")
      .insert({
        first_name: formData.get("firstName") as string,
        last_name: formData.get("lastName") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        service: formData.get("service") as string,
        preferred_date: formData.get("preferredDate") as string,
        preferred_time: formData.get("preferredTime") as string,
        message: formData.get("message") as string,
        status: "new"
      })
      .select()
    
    if (error) {
      return NextResponse.json({
        success: false,
        error: error.message,
        code: error.code
      }, { status: 400 })
    }
    
    return NextResponse.json({
      success: true,
      message: "Inserted with service role!",
      data: data
    })
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err.message
    }, { status: 500 })
  }
}

