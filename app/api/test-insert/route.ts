import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function POST() {
  try {
    const supabase = await createClient()
    
    // Try inserting a test record
    const { data, error } = await supabase
      .from("patients")
      .insert({
        first_name: "Test",
        last_name: "User",
        email: "test@example.com",
        phone: "+256700000000",
        service: "general-consultation",
        message: "Test message",
        preferred_date: "2025-01-15",
        preferred_time: "morning",
        status: "new"
      })
      .select()
    
    if (error) {
      return NextResponse.json({
        success: false,
        error: error.message,
        code: error.code,
        details: error
      }, { status: 400 })
    }
    
    return NextResponse.json({
      success: true,
      message: "Insert successful",
      data: data
    })
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err.message
    }, { status: 500 })
  }
}

