module.exports = [
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/medrelief.com/app/actions/send-email.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"400a6c558539c4352193bfc4f04380cbec69b10129":"sendContactEmail"},"",""] */ __turbopack_context__.s([
    "sendContactEmail",
    ()=>sendContactEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/resend/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
const resend = new __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resend"](process.env.RESEND_API_KEY);
async function sendContactEmail(formData) {
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
      `
        });
        if (result.error) {
            console.error("[v0] Resend error:", result.error);
            return {
                success: false,
                message: "Failed to send email. Please try again later or contact us directly."
            };
        }
        return {
            success: true,
            message: "Email sent successfully!"
        };
    } catch (error) {
        console.error("[v0] Email error:", error);
        return {
            success: false,
            message: "An error occurred while sending your message."
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    sendContactEmail
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(sendContactEmail, "400a6c558539c4352193bfc4f04380cbec69b10129", null);
}),
"[project]/medrelief.com/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/medrelief.com/app/actions/send-email.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$app$2f$actions$2f$send$2d$email$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/app/actions/send-email.tsx [app-rsc] (ecmascript)");
;
}),
"[project]/medrelief.com/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/medrelief.com/app/actions/send-email.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "400a6c558539c4352193bfc4f04380cbec69b10129",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$app$2f$actions$2f$send$2d$email$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendContactEmail"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$medrelief$2e$com$2f$app$2f$actions$2f$send$2d$email$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/medrelief.com/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/medrelief.com/app/actions/send-email.tsx [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$medrelief$2e$com$2f$app$2f$actions$2f$send$2d$email$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/medrelief.com/app/actions/send-email.tsx [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__03589d6e._.js.map