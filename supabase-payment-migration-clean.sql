-- ============================================
-- CLEAN Payment Migration - Copy ONLY this content to Supabase SQL Editor
-- ============================================

-- Step 1: Fix invalid statuses
UPDATE patients SET status = 'new' 
WHERE status NOT IN ('new', 'contacted', 'pending_payment', 'payment_verified', 'scheduled', 'completed', 'cancelled', 'archived');

-- Step 2: Add columns
ALTER TABLE patients ADD COLUMN IF NOT EXISTS payment_reference TEXT UNIQUE;
ALTER TABLE patients ADD COLUMN IF NOT EXISTS payment_proof_url TEXT;

-- Step 3: Update status constraint
ALTER TABLE patients DROP CONSTRAINT IF EXISTS patients_status_check;
ALTER TABLE patients ADD CONSTRAINT patients_status_check 
  CHECK (status IN ('new', 'contacted', 'pending_payment', 'payment_verified', 'scheduled', 'completed', 'cancelled', 'archived'));

-- Step 4: Index
CREATE INDEX IF NOT EXISTS idx_patients_payment_reference ON patients(payment_reference);

-- Verify (should show payment_reference, payment_proof_url)
SELECT column_name FROM information_schema.columns 
WHERE table_name = 'patients' AND column_name LIKE '%payment%';

-- SUCCESS! Create bucket: Storage → New → payment-proofs (Public)
-- Run `npm run dev`
