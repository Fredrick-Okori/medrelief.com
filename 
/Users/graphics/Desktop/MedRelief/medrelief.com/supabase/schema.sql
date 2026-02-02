-- Supabase Database Schema for MedRelief Patient Inquiries
-- Run this SQL in your Supabase project's SQL Editor
-- https://supabase.com/dashboard/project/{your-project-id}/sql-editor

-- Create patients table
CREATE TABLE IF NOT EXISTS patients (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  service TEXT NOT NULL,
  message TEXT NOT NULL,
  medical_report_url TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'archived'))
);

-- Enable Row Level Security (RLS)
ALTER TABLE patients ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public inserts (anyone can submit an inquiry)
CREATE POLICY "Allow public inserts" ON patients
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow authenticated users to view all patients (for admin)
CREATE POLICY "Allow authenticated reads" ON patients
  FOR SELECT
  TO authenticated
  USING (true);

-- Create policy to allow authenticated users to update patients
CREATE POLICY "Allow authenticated updates" ON patients
  FOR UPDATE
  TO authenticated
  USING (true);

-- Create index for faster queries on status and created_at
CREATE INDEX IF NOT EXISTS idx_patients_status ON patients(status);
CREATE INDEX IF NOT EXISTS idx_patients_created_at ON patients(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_patients_email ON patients(email);

-- Create storage bucket for medical reports
-- You'll need to create this bucket in the Supabase Dashboard:
-- Storage -> Create new bucket -> name: "medical-reports" -> Make public: false

-- Storage bucket policy (run after creating the bucket in dashboard)
-- This allows authenticated users to upload files
/*
CREATE POLICY "Allow authenticated uploads" ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'medical-reports' AND
    storage.foldername(name) = 'patients'
  );
*/

