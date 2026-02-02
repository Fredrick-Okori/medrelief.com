# MedRelief Admin & Appointment System

## Files Created

### Supabase Configuration
- `lib/supabase/client.ts` - Browser-side Supabase client
- `lib/supabase/server.ts` - Server-side Supabase client
- `supabase/schema.sql` - Database schema (patients + admin_users tables)

### Public Pages
- `components/contact.tsx` - Appointment booking form
- `app/actions/submit-contact.tsx` - Server action for submissions

### Admin Pages
- `app/admin/login/page.tsx` - Admin authentication
- `app/admin/dashboard/page.tsx` - Appointment management dashboard

## Setup Required

### 1. Run SQL Schema
Execute `supabase/schema.sql` in Supabase Dashboard SQL Editor

### 2. Create Admin User
Insert admin user directly:
```sql
INSERT INTO admin_users (email, full_name, role)
VALUES ('your-email@example.com', 'Admin Name', 'admin');
```

### 3. Create Storage Bucket
- Go to Supabase Storage → Create bucket
- Name: `medical-reports`
- Make public: No

### 4. Environment Variables
Ensure `.env.local` has:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Admin Access
- Login: `/admin/login`
- Dashboard: `/admin/dashboard`

## Features
- ✅ Patient appointment booking with date/time
- ✅ Optional medical report upload
- ✅ Admin authentication
- ✅ View/manage all appointments
- ✅ Update status (new → contacted → archived)
- ✅ Email notifications via Resend

