-- ============================================
-- Storage Bucket Policies - Simple Version
-- ============================================

-- NOTE: Run this AFTER creating the bucket in Supabase Dashboard

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public uploads" ON storage.objects;
DROP POLICY IF EXISTS "Allow public reads" ON storage.objects;

-- Create policy for uploads
CREATE POLICY "Allow public uploads" ON storage.objects
  FOR INSERT
  TO authenticated, anon
  WITH CHECK (bucket_id = 'medical-reports');

-- Create policy for reads
CREATE POLICY "Allow public reads" ON storage.objects
  FOR SELECT
  TO authenticated, anon
  USING (bucket_id = 'medical-reports');

SELECT 'Done' AS status;

