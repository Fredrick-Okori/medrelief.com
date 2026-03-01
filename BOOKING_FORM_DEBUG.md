# Booking Form Troubleshooting Guide

## Issue Found: Invalid Resend API Key

Your `.env` file has:
```
RESEND_API_KEY=re_test_key_placeholder
```

This is a placeholder value and **NOT a real Resend API key**. This is preventing email notifications from being sent.

---

## How to Fix

### Step 1: Get Your Real Resend API Key
1. Go to https://resend.com
2. Sign up or log in
3. Navigate to **Settings** → **API Keys**
4. Create a new API key or copy an existing one
5. It will look like: `re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

### Step 2: Update Your .env File
Replace the placeholder in `/Users/apple17/medrelief.com/.env`:

**Before:**
```
RESEND_API_KEY=re_test_key_placeholder
```

**After:**
```
RESEND_API_KEY=re_your_real_api_key_here
```

### Step 3: Restart Your Development Server
```bash
# Kill the current server (Ctrl+C)
# Then restart it
npm run dev
```

---

## Testing the Form

### Test 1: Check Browser Console
1. Open your booking form
2. Open Developer Tools (F12)
3. Go to **Console** tab
4. Try submitting the form
5. Check for any error messages

### Test 2: Check Network Tab
1. Go to **Network** tab in Developer Tools
2. Submit the form
3. Look for requests to check status codes
4. Look for any errors in the response

### Test 3: Try the Form
1. Fill in all required fields
2. Select a service and date/time
3. Click "Book Appointment"
4. You should see a success message

---

## Form Submission Flow

```
User fills form
       ↓
Click "Book Appointment"
       ↓
Validate form data (in components/contact.tsx)
       ↓
Call submitContact() server action
       ↓
Validate data with Zod schema
       ↓
Upload medical report to Supabase Storage (if provided)
       ↓
Insert appointment record into patients table
       ↓
Send email via Resend
       ↓
Return success message
```

---

## Common Issues & Solutions

### 1. "Appointment booked successfully" appears but no email
**Cause:** Invalid Resend API key
**Solution:** Update your API key in `.env`

### 2. Form validation errors appear
**Possible issues:**
- First name is blank
- Last name is blank
- Email is invalid format
- Phone is blank
- Service not selected
- Preferred date not selected
- Preferred time not selected
- Message less than 10 characters

**Solution:** Ensure all fields are filled correctly

### 3. "Failed to book appointment" error
**Possible causes:**
- Supabase connection issue
- Missing SUPABASE_SERVICE_ROLE_KEY
- RLS policies blocking inserts

**Solution:** Check your Supabase credentials in `.env`

### 4. Medical report upload fails
**Possible causes:**
- File type not allowed (only PDF, JPEG, PNG, WebP, Word)
- File size exceeds 10MB
- Storage bucket doesn't exist

**Solution:** Check file type and size; ensure "medical-reports" bucket exists in Supabase

---

## Environment Variables Checklist

Your `.env` file should have ALL of these:

- ✅ `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- ✅ `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key
- ✅ `SUPABASE_SERVICE_ROLE_KEY` - Supabase service role key
- ⚠️ `RESEND_API_KEY` - **Currently invalid, needs real API key**

---

## Debugging Steps

### Enable Detailed Logging
Add this to the top of `app/actions/submit-contact.tsx` to see detailed logs:

```typescript
console.log("=== Form Submission Started ===")
console.log("Form data:", rawData)
console.log("Medical report:", medicalReportFile ? "Yes" : "No")
```

Check your **server console** output for detailed information.

### Check Supabase Database
1. Go to Supabase Dashboard
2. Select your project
3. Go to **Database** → **patients** table
4. Look for new records when you submit the form

### Check Supabase Storage
1. Go to Supabase Dashboard
2. Go to **Storage**
3. Open the **medical-reports** bucket
4. Look for newly uploaded files

---

## Quick Reference: Form Requirements

```
First Name: Required (min 1 character)
Last Name: Required (min 1 character)
Email: Required (valid email format)
Phone: Required (min 1 character)
Service: Required (must select from dropdown)
Preferred Date: Required (today or later)
Preferred Time: Required (Morning/Afternoon/Evening)
Additional Notes: Required (min 10 characters)
Medical Report: Optional (PDF/JPEG/PNG/WebP/Word, max 10MB)
```

---

## Success Indicators

✅ Form shows "Appointment Request Received!" message
✅ New record appears in Supabase patients table
✅ Email sent to admin email (fred.okori@gmail.com)
✅ No errors in browser console
✅ No errors in server console

---

## Next Steps

1. **Get a real Resend API key** from https://resend.com
2. **Update your .env file** with the real key
3. **Restart your development server**
4. **Test the form again**

Let me know if you need help with any of these steps!
