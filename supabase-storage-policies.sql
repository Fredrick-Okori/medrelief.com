-- ============================================
-- Storage Bucket Policies - MedicalRelief
-- ============================================

-- NOTE: Run this AFTER creating buckets in Supabase Dashboard

-- Drop existing policies if they exist (safe to run multiple times)
DROP POLICY IF EXISTS "Allow uploads medical-reports" ON storage.objects;
DROP POLICY IF EXISTS "Allow reads medical-reports" ON storage.objects;
DROP POLICY IF EXISTS "Allow uploads payment-proofs" ON storage.objects;
DROP POLICY IF EXISTS "Allow reads payment-proofs" ON storage.objects;

-- ============================================
-- MEDICAL-REPORTS BUCKET POLICIES
-- ============================================
-- Create policy for uploads
CREATE POLICY "Allow uploads medical-reports" ON storage.objects
  FOR INSERT
  TO service_role, authenticated
  WITH CHECK (bucket_id = 'medical-reports');

-- Create policy for reads
CREATE POLICY "Allow reads medical-reports" ON storage.objects
  FOR SELECT
  TO service_role, authenticated, anon
  USING (bucket_id = 'medical-reports');

-- ============================================
-- PAYMENT-PROOFS BUCKET POLICIES (NEW)
-- ============================================
-- Allow uploads (service_role bypasses RLS, authenticated users allowed)
CREATE POLICY "Allow uploads payment-proofs" ON storage.objects
  FOR INSERT
  TO service_role, authenticated
  WITH CHECK (bucket_id = 'payment-proofs');

-- Allow reads (public URLs work, but restrict direct SELECT)
CREATE POLICY "Allow reads payment-proofs" ON storage.objects
  FOR SELECT
  TO service_role, authenticated
  USING (bucket_id = 'payment-proofs');

SELECT 'Storage policies updated successfully' AS status;

-- Verify policies created:
-- SELECT * FROM pg_policies WHERE tablename = 'objects';
