module.exports = [
"[project]/medrelief.com/app/actions/submit-contact.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40f91bee0bfb4f07246740a340c3719af344c628f5":"submitContact"},"",""] */ __turbopack_context__.s([
    "submitContact",
    ()=>submitContact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
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
        const supabase = await createServerClient();
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
"[project]/medrelief.com/.next-internal/server/app/contact/page/actions.js { ACTIONS_MODULE0 => \"[project]/medrelief.com/app/actions/submit-contact.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$app$2f$actions$2f$submit$2d$contact$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/app/actions/submit-contact.tsx [app-rsc] (ecmascript)");
;
}),
"[project]/medrelief.com/.next-internal/server/app/contact/page/actions.js { ACTIONS_MODULE0 => \"[project]/medrelief.com/app/actions/submit-contact.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40f91bee0bfb4f07246740a340c3719af344c628f5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$app$2f$actions$2f$submit$2d$contact$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submitContact"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f2e$next$2d$internal$2f$server$2f$app$2f$contact$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$medrelief$2e$com$2f$app$2f$actions$2f$submit$2d$contact$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/medrelief.com/.next-internal/server/app/contact/page/actions.js { ACTIONS_MODULE0 => "[project]/medrelief.com/app/actions/submit-contact.tsx [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$app$2f$actions$2f$submit$2d$contact$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/app/actions/submit-contact.tsx [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=medrelief_com_334ac697._.js.map