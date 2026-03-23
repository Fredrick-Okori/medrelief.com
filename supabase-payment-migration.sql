-- ============================================
-- Payment Migration for Existing Patients Table
-- ============================================

-- Run this SQL if you got 'column "payment_reference" does not exist' when running schema
-- Assumes patients table exists from previous schema

-- Add new columns
ALTER TABLE patients ADD COLUMN IF NOT EXISTS payment_reference TEXT UNIQUE;
ALTER TABLE patients ADD COLUMN IF NOT EXISTS payment_proof_url TEXT;

-- Fix existing invalid statuses (set unknown to 'new')
UPDATE patients SET status = 'new' WHERE status NOT IN ('new', 'contacted', 'scheduled', 'completed', 'cancelled', 'pending_payment', 'payment_verified', 'archived');

-- Add columns
ALTER TABLE patients ADD COLUMN IF NOT EXISTS payment_reference TEXT UNIQUE;
ALTER TABLE patients ADD COLUMN IF NOT EXISTS payment_proof_url TEXT;

-- Update status constraint
ALTER TABLE patients DROP CONSTRAINT IF EXISTS patients_status_check;
ALTER TABLE patients ADD CONSTRAINT patients_status_check 
  CHECK (status IN ('new', 'contacted', 'pending_payment', 'payment_verified', 'scheduled', 'completed', 'cancelled', 'archived'));

-- Index
CREATE INDEX IF NOT EXISTS idx_patients_payment_reference ON patients(payment_reference);

-- Verify columns
SELECT column_name FROM information_schema.columns WHERE table_name = 'patients' AND column_name IN ('payment_reference', 'payment_proof_url');

-- Verify
-- SELECT column_name FROM information_schema.columns WHERE table_name = 'patients' ORDER BY ordinal_position;

-- ============================================
-- Storage: Create 'payment-proofs' bucket manually:
-- Supabase Dashboard → Storage → New Bucket → 'payment-proofs' → Public ✓ → Create

