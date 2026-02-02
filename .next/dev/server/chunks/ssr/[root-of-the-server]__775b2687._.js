module.exports = [
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/Desktop/MedRelief/medrelief.com/lib/supabase/server.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/@supabase/ssr/dist/module/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/next/headers.js [app-rsc] (ecmascript)");
;
;
async function createClient() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerClient"])(("TURBOPACK compile-time value", "https://qukbllfpjuanmkcrztkz.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1a2JsbGZwanVhbm1rY3J6dGt6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkyODIxMDcsImV4cCI6MjA4NDg1ODEwN30.UOIEWd3pSe0uQ9suMkFugQ_dQQiVufrNiHCl7NtCqVQ"), {
        cookies: {
            getAll () {
                return cookieStore.getAll();
            },
            setAll (cookiesToSet) {
                try {
                    cookiesToSet.forEach(({ name, value, options })=>cookieStore.set(name, value, options));
                } catch  {
                // The `setAll` method was called from a Server Component.
                // This can be ignored if you have middleware refreshing
                // user sessions.
                }
            }
        }
    });
}
}),
"[project]/Desktop/MedRelief/medrelief.com/app/actions/submit-contact.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4074015bb89940c92eccc9681f699ff7ffcd7f4705":"submitContact"},"",""] */ __turbopack_context__.s([
    "submitContact",
    ()=>submitContact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/resend/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
// Validation schema for appointment booking
const appointmentSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    firstName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "First name is required"),
    lastName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Last name is required"),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email("Invalid email address"),
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Phone number is required"),
    service: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Please select a service"),
    preferredDate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Preferred date is required"),
    preferredTime: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Preferred time is required"),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10, "Please provide additional details (at least 10 characters)")
});
const resend = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resend"](process.env.RESEND_API_KEY);
async function submitContact(formData) {
    // Extract data from FormData
    const rawData = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        service: formData.get("service"),
        preferredDate: formData.get("preferredDate"),
        preferredTime: formData.get("preferredTime"),
        message: formData.get("message"),
        medicalReport: formData.get("medicalReport")
    };
    // Validate the data
    const validationResult = appointmentSchema.safeParse(rawData);
    if (!validationResult.success) {
        const errors = {};
        validationResult.error.errors.forEach((error)=>{
            errors[error.path[0]] = error.message;
        });
        return {
            success: false,
            message: "Please fix the errors below",
            errors
        };
    }
    const data = validationResult.data;
    let medicalReportUrl = null;
    // Map time slots to readable format
    const timeSlotMap = {
        morning: "Morning (8AM - 12PM)",
        afternoon: "Afternoon (12PM - 4PM)",
        evening: "Evening (4PM - 6PM)"
    };
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        // Upload medical report if provided
        const medicalReportFile = rawData.medicalReport;
        if (medicalReportFile && medicalReportFile.size > 0) {
            const fileName = `${Date.now()}-${medicalReportFile.name.replace(/[^a-zA-Z0-9.-]/g, "")}`;
            // Convert File to ArrayBuffer
            const arrayBuffer = await medicalReportFile.arrayBuffer();
            const uint8Array = new Uint8Array(arrayBuffer);
            const { error: uploadError } = await supabase.storage.from("medical-reports").upload(`patients/${fileName}`, uint8Array, {
                contentType: medicalReportFile.type
            });
            if (uploadError) {
                console.error("[Supabase] Upload error:", uploadError);
                return {
                    success: false,
                    message: "Failed to upload medical report. Please try again."
                };
            }
            // Get public URL
            const { data: urlData } = supabase.storage.from("medical-reports").getPublicUrl(`patients/${fileName}`);
            medicalReportUrl = urlData.publicUrl;
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
            status: "new"
        });
        if (dbError) {
            console.error("[Supabase] Database error:", dbError);
            return {
                success: false,
                message: "Failed to book your appointment. Please try again."
            };
        }
        // Send email notification via Resend
        const serviceNames = {
            "home-care": "🏠 Pedicare – Complex Children",
            "geriatric": "👴 GeriCare – Elderly Homecare",
            "travel": "✈️ Travelshield Medicare",
            "physical-therapy": "💪 Home-based PhysioTherapy",
            "chrono-care": "🗓️ Chrono-care Navigation",
            "general-consultation": "👨‍⚕️ General TeleConsultation"
        };
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
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;"><strong>${new Date(data.preferredDate).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })}</strong></td>
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
              Received at ${new Date().toLocaleString("en-US", {
                dateStyle: "full",
                timeStyle: "long"
            })}
            </p>
          </div>
        </div>
      `
        });
        if (emailResult.error) {
            console.error("[Resend] Email error:", emailResult.error);
        // Don't fail the submission if email fails - data is saved in DB
        }
        return {
            success: true,
            message: "Appointment booked successfully! We'll confirm your appointment shortly."
        };
    } catch (error) {
        console.error("[Appointment] Unexpected error:", error);
        return {
            success: false,
            message: "An unexpected error occurred. Please try again later."
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    submitContact
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(submitContact, "4074015bb89940c92eccc9681f699ff7ffcd7f4705", null);
}),
"[project]/Desktop/MedRelief/medrelief.com/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/Desktop/MedRelief/medrelief.com/app/actions/submit-contact.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$app$2f$actions$2f$submit$2d$contact$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/app/actions/submit-contact.tsx [app-rsc] (ecmascript)");
;
}),
"[project]/Desktop/MedRelief/medrelief.com/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/Desktop/MedRelief/medrelief.com/app/actions/submit-contact.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "4074015bb89940c92eccc9681f699ff7ffcd7f4705",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$app$2f$actions$2f$submit$2d$contact$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submitContact"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$app$2f$actions$2f$submit$2d$contact$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Desktop/MedRelief/medrelief.com/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/Desktop/MedRelief/medrelief.com/app/actions/submit-contact.tsx [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedRelief$2f$medrelief$2e$com$2f$app$2f$actions$2f$submit$2d$contact$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedRelief/medrelief.com/app/actions/submit-contact.tsx [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__775b2687._.js.map