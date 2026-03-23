-- Supabase Database Schema for MedRelief Patient Appointments
-- Run this SQL in your Supabase project's SQL Editor
-- https://supabase.com/dashboard/project/{your-project-id}/sql-editor

-- ============================================
-- PATIENTS TABLE (for appointment bookings)
-- ============================================
CREATE TABLE IF NOT EXISTS patients (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT NOT NULL,
  message TEXT NOT NULL,
  medical_report_url TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'archived'))
);

-- Enable Row Level Security (RLS) for patients
ALTER TABLE patients ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public inserts (anyone can book an appointment)
CREATE POLICY "Allow public inserts" ON patients
  FOR INSERT
  WITH CHECK (true);

-- Policy: Allow authenticated users to view all patients
CREATE POLICY "Allow authenticated reads" ON patients
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Allow authenticated users to update patients
CREATE POLICY "Allow authenticated updates" ON patients
  FOR UPDATE
  TO authenticated
  USING (true);

-- Indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_patients_status ON patients(status);
CREATE INDEX IF NOT EXISTS idx_patients_created_at ON patients(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_patients_email ON patients(email);

-- ============================================
-- ADMIN USERS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  email TEXT NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  role TEXT DEFAULT 'admin' CHECK (role IN ('admin', 'viewer')),
  is_active BOOLEAN DEFAULT true
);

-- Enable RLS for admin_users
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Policy: Allow admins to view admin_users
CREATE POLICY "Admins can view admin_users" ON admin_users
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE email = auth.uid()::TEXT
      AND is_active = true
    )
  );

-- Policy: Only super admins can insert (manage this manually in dashboard)
CREATE POLICY "Admins can manage admin_users" ON admin_users
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE email = auth.uid()::TEXT
      AND is_active = true
      AND role = 'admin'
    )
  );

-- ============================================
-- SETUP INSTRUCTIONS
-- ============================================
/*
1. Create an admin user manually in Supabase Dashboard:
   - Go to Authentication → Users → Invite user
   - Enter admin email (e.g., admin@medrelief.com)
   
2. Or insert directly via SQL (after creating the table):
   INSERT INTO admin_users (email, full_name, role)
   VALUES ('admin@medrelief.com', 'Administrator', 'admin');

3. Create storage bucket for medical reports:
   - Go to Storage → Create new bucket
   - Name: "medical-reports"
   - Make public: false
   - Add storage policies for authenticated uploads
*/

-- ============================================
-- SAMPLE ADMIN USER (Uncomment and modify as needed)
-- ============================================
-- INSERT INTO admin_users (email, full_name, role)
-- VALUES ('admin@medrelief.com', 'System Admin', 'admin');

-- ============================================
-- PATIENTS TABLE MIGRATION FOR BOOKING FLOW
-- ============================================
ALTER TABLE patients 
ADD COLUMN IF NOT EXISTS payment_reference TEXT UNIQUE,
ADD COLUMN IF NOT EXISTS payment_proof_url TEXT,
ADD COLUMN IF NOT EXISTS preferred_date TIMESTAMPTZ,
ADD COLUMN IF NOT EXISTS preferred_time TEXT;

CREATE INDEX IF NOT EXISTS idx_patients_payment_reference ON patients(payment_reference);

