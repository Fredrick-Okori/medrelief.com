# Supabase Storage Policy Setup (UI Method)

Since SQL policies for storage are having access issues, create them via the Supabase Dashboard UI:

## Step 1: Go to Storage Policies

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Navigate to **Storage** → **medical-reports**
3. Click on **Policies** tab

## Step 2: Create Upload Policy

1. Click **New Policy** (or "Add policy")
2. Policy name: `Allow public uploads`
3. Operation: `INSERT`
4. Roles: Select both `authenticated` and `anon`
5. Policy definition (using Basic mode):
   - Bucket ID: `medical-reports`
   - Folder name: `patients/*`
6. Click **Save Policy**

## Step 3: Create Read Policy

1. Click **New Policy** (or "Add policy")
2. Policy name: `Allow public reads`
3. Operation: `SELECT`
4. Roles: Select both `authenticated` and `anon`
5. Policy definition (using Basic mode):
   - Bucket ID: `medical-reports`
   - Folder name: `patients/*`
6. Click **Save Policy**

## Step 4: Verify

After creating both policies, you should see:
- `Allow public uploads` - INSERT
- `Allow public reads` - SELECT

## Alternative: Using SQL with Supabase CLI

If you have Supabase CLI installed:

```bash
supabase storage policy create "Allow public uploads" medical-reports insert --schema public --bucket-id medical-reports
supabase storage policy create "Allow public reads" medical-reports select --schema public --bucket-id medical-reports
```

## Already Created Files

- `supabase-table.sql` - Run this in SQL Editor to create patients table
- `supabase-storage-policies.sql` - Alternative SQL approach

## After Setup

Test the contact form:
```bash
npm run dev
```

Visit `http://localhost:3000` and submit the form. Check Supabase Dashboard → Table Editor → patients to see the submission.

