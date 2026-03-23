module.exports = [
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
            setAll (cookiesToSet) {
                try {
                    cookiesToSet.forEach(({ name, value, options })=>cookieStore.set(name, value, options));
                } catch  {
                // Ignore if called from Server Component
                }
            }
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
"[project]/medrelief.com/.next-internal/server/app/contact/page/actions.js { ACTIONS_MODULE0 => \"[project]/medrelief.com/app/actions/submit-payment-upload.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$app$2f$actions$2f$submit$2d$payment$2d$upload$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/app/actions/submit-payment-upload.tsx [app-rsc] (ecmascript)");
;
}),
"[project]/medrelief.com/.next-internal/server/app/contact/page/actions.js { ACTIONS_MODULE0 => \"[project]/medrelief.com/app/actions/submit-payment-upload.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "4015302314ea06936549596b40d3c65c5106fff8fa",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$app$2f$actions$2f$submit$2d$payment$2d$upload$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submitPaymentUpload"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f2e$next$2d$internal$2f$server$2f$app$2f$contact$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$medrelief$2e$com$2f$app$2f$actions$2f$submit$2d$payment$2d$upload$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/medrelief.com/.next-internal/server/app/contact/page/actions.js { ACTIONS_MODULE0 => "[project]/medrelief.com/app/actions/submit-payment-upload.tsx [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$app$2f$actions$2f$submit$2d$payment$2d$upload$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/app/actions/submit-payment-upload.tsx [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=medrelief_com_e061c8db._.js.map