# Contact → Book → Ref → Payment → Success Flow Implementation

## Progress: 6/8 ✅

### 1. [✅] Create TODO.md [COMPLETED]

### 2. [✅] DB Migration [FILE UPDATED - run new ALTER SQLs in Supabase dashboard]

### 3. [✅] Create app/actions/submit-contact.tsx [COMPLETED - fixed createClient import]

### 4. [✅] lib/services-data.ts confirmed

### 5. [✅] Edit components/contact.tsx [imports & handlers fixed]

### 6. [✅] Edit app/actions/submit-payment-upload.tsx [queries payment_reference]

### 7. [ ] Test Flow
   - pnpm dev
   - /contact → submit details → see auto-gen ref → upload proof → success
   - Verify DB inserts/updates, storage uploads

### 8. [ ] Supabase Deploy & Polish
   - Run migration SQL in dashboard
   - Add email notification to submit-contact (optional)
   - Update admin/patients to show new fields
