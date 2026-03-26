module.exports = [
"[project]/medrelief.com/lib/supabase/server.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/@supabase/ssr/dist/module/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/next/headers.js [app-rsc] (ecmascript)");
;
;
async function createClient() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerClient"])(("TURBOPACK compile-time value", "https://qukbllfpjuanmkcrztkz.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1a2JsbGZwanVhbm1rY3J6dGt6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkyODIxMDcsImV4cCI6MjA4NDg1ODEwN30.UOIEWd3pSe0uQ9suMkFugQ_dQQiVufrNiHCl7NtCqVQ"), {
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
"[project]/medrelief.com/app/actions/submit-contact.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40f91bee0bfb4f07246740a340c3719af344c628f5":"submitContact"},"",""] */ __turbopack_context__.s([
    "submitContact",
    ()=>submitContact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
const bookingSchema = __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    firstName: __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'First name required'),
    lastName: __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Last name required'),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email('Invalid email'),
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10, 'Phone number too short'),
    service: __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Service required'),
    preferredDate: __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    preferredTime: __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'morning',
        'afternoon',
        'evening'
    ]).optional(),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10, 'Message too short'),
    medicalReport: __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any().optional()
});
async function submitContact(formData) {
    const data = Object.fromEntries(formData.entries());
    const validation = bookingSchema.safeParse({
        ...data,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        service: data.service,
        preferredDate: data.preferredDate || undefined,
        preferredTime: data.preferredTime || undefined,
        message: data.message
    });
    if (!validation.success) {
        return {
            success: false,
            message: 'Please fix form errors: ' + validation.error.errors[0].message
        };
    }
    const { firstName, lastName, email, phone, service, preferredDate, preferredTime, message } = validation.data;
    const medicalReportFile = formData.get('medicalReport');
    let medicalReportUrl = null;
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
        // Upload medical report if provided
        if (medicalReportFile && medicalReportFile.size > 0) {
            const fileExt = medicalReportFile.name.split('.').pop();
            const fileName = `reports/${Date.now()}-${Math.random().toString(36).slice(2, 9)}.${fileExt}`;
            const arrayBuffer = await medicalReportFile.arrayBuffer();
            const uint8Array = new Uint8Array(arrayBuffer);
            const { error: uploadError } = await supabase.storage.from('medical-reports').upload(fileName, uint8Array, {
                contentType: medicalReportFile.type,
                upsert: true
            });
            if (uploadError) {
                return {
                    success: false,
                    message: `Report upload failed: ${uploadError.message}`
                };
            }
            const { data: urlData } = supabase.storage.from('medical-reports').getPublicUrl(fileName);
            medicalReportUrl = urlData.publicUrl;
        }
        // Generate unique payment reference
        const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
        const randomStr = Math.random().toString(36).slice(2, 7).toUpperCase();
        const paymentReference = `MR-${dateStr}-${randomStr}`;
        // Insert booking
        const { error: insertError } = await supabase.from('patients').insert({
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
            status: 'new'
        });
        if (insertError) {
            return {
                success: false,
                message: `Booking failed: ${insertError.message}`
            };
        }
        return {
            success: true,
            message: 'Booking created successfully!',
            reference: paymentReference
        };
    } catch (error) {
        console.error('submitContact error:', error);
        return {
            success: false,
            message: 'Server error. Please try again.'
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    submitContact
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(submitContact, "40f91bee0bfb4f07246740a340c3719af344c628f5", null);
}),
"[project]/medrelief.com/lib/supabase/admin.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAdminClient",
    ()=>createAdminClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/@supabase/ssr/dist/module/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/next/headers.js [app-rsc] (ecmascript)");
;
;
async function createAdminClient() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerClient"])(("TURBOPACK compile-time value", "https://qukbllfpjuanmkcrztkz.supabase.co"), process.env.SUPABASE_SERVICE_ROLE_KEY, {
        cookies: {
            getAll () {
                return cookieStore.getAll();
            },
            setAll () {}
        }
    });
}
}),
"[project]/medrelief.com/app/actions/submit-payment-upload.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4015302314ea06936549596b40d3c65c5106fff8fa":"submitPaymentUpload"},"",""] */ __turbopack_context__.s([
    "submitPaymentUpload",
    ()=>submitPaymentUpload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$lib$2f$supabase$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/lib/supabase/admin.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
const uploadSchema = __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    paymentReference: __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Payment reference is required")
});
async function submitPaymentUpload(formData) {
    const rawData = {
        paymentReference: formData.get("paymentReference"),
        paymentProof: formData.get("paymentProof")
    };
    const validation = uploadSchema.safeParse(rawData);
    if (!validation.success) {
        return {
            success: false,
            message: "Invalid payment reference"
        };
    }
    const { paymentReference } = validation.data;
    const paymentProofFile = rawData.paymentProof;
    if (!paymentProofFile || paymentProofFile.size === 0) {
        return {
            success: false,
            message: "Please select a payment proof image"
        };
    }
    try {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$lib$2f$supabase$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAdminClient"])();
        // Upload payment proof
        const fileExt = paymentProofFile.name.split('.').pop();
        const fileName = `${paymentReference}.${fileExt}`;
        const arrayBuffer = await paymentProofFile.arrayBuffer();
        const uint8Array = new Uint8Array(arrayBuffer);
        const { error: uploadError } = await supabase.storage.from('payment-proofs').upload(`payments/${fileName}`, uint8Array, {
            contentType: paymentProofFile.type,
            upsert: true
        });
        if (uploadError) {
            return {
                success: false,
                message: `Storage upload failed: ${uploadError.message}`
            };
        }
        // Get public URL
        const { data: urlData } = supabase.storage.from('payment-proofs').getPublicUrl(`payments/${fileName}`);
        const paymentProofUrl = urlData.publicUrl;
        // Update patient record
        const { error: updateError } = await supabase.from('patients').update({
            payment_proof_url: paymentProofUrl,
            status: 'payment_verified'
        }).eq('payment_reference', paymentReference);
        if (updateError) {
            return {
                success: false,
                message: `Database update failed: ${updateError.message}`
            };
        }
        return {
            success: true,
            message: "Payment proof uploaded successfully! Awaiting admin verification.",
            paymentProofUrl
        };
    } catch (error) {
        return {
            success: false,
            message: "An unexpected error occurred. Please try again."
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    submitPaymentUpload
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(submitPaymentUpload, "4015302314ea06936549596b40d3c65c5106fff8fa", null);
}),
"[project]/medrelief.com/.next-internal/server/app/contact/page/actions.js { ACTIONS_MODULE0 => \"[project]/medrelief.com/app/actions/submit-contact.tsx [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/medrelief.com/app/actions/submit-payment-upload.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$app$2f$actions$2f$submit$2d$contact$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/app/actions/submit-contact.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$app$2f$actions$2f$submit$2d$payment$2d$upload$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/app/actions/submit-payment-upload.tsx [app-rsc] (ecmascript)");
;
;
}),
"[project]/medrelief.com/.next-internal/server/app/contact/page/actions.js { ACTIONS_MODULE0 => \"[project]/medrelief.com/app/actions/submit-contact.tsx [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/medrelief.com/app/actions/submit-payment-upload.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "4015302314ea06936549596b40d3c65c5106fff8fa",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$app$2f$actions$2f$submit$2d$payment$2d$upload$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submitPaymentUpload"],
    "40f91bee0bfb4f07246740a340c3719af344c628f5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$app$2f$actions$2f$submit$2d$contact$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submitContact"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f2e$next$2d$internal$2f$server$2f$app$2f$contact$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$medrelief$2e$com$2f$app$2f$actions$2f$submit$2d$contact$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$medrelief$2e$com$2f$app$2f$actions$2f$submit$2d$payment$2d$upload$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/medrelief.com/.next-internal/server/app/contact/page/actions.js { ACTIONS_MODULE0 => "[project]/medrelief.com/app/actions/submit-contact.tsx [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/medrelief.com/app/actions/submit-payment-upload.tsx [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$app$2f$actions$2f$submit$2d$contact$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/app/actions/submit-contact.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$app$2f$actions$2f$submit$2d$payment$2d$upload$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/app/actions/submit-payment-upload.tsx [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=medrelief_com_10ea66f3._.js.map