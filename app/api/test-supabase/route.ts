import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function POST() {
  try {
    const supabase = await createClient()
    
    // Test connection by listing patients
    const { data, error } = await supabase
      .from("patients")
      .select("count", { count: "exact", head: true })
    
    if (error) {
      return NextResponse.json({
        success: false,
        error: error.message,
        details: error
      }, { status: 400 })
    }
    
    return NextResponse.json({
      success: true,
      message: "Supabase connection successful",
      count: data
    })
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err.message
    }, { status: 500 })
  }
}

