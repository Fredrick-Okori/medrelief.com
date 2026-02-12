-- ============================================
-- Fix the patients table to add missing columns
-- ============================================

-- Add missing columns to the existing patients table
ALTER TABLE patients ADD COLUMN IF NOT EXISTS first_name TEXT NOT NULL DEFAULT '';
ALTER TABLE patients ADD COLUMN IF NOT EXISTS last_name TEXT NOT NULL DEFAULT '';
ALTER TABLE patients ADD COLUMN IF NOT EXISTS service TEXT;
ALTER TABLE patients ADD COLUMN IF NOT EXISTS preferred_date TEXT;
ALTER TABLE patients ADD COLUMN IF NOT EXISTS preferred_time TEXT;
ALTER TABLE patients ADD COLUMN IF NOT EXISTS medical_report_url TEXT;

-- Update existing records if needed
-- ALTER TABLE patients ALTER COLUMN email DROP NOT NULL;
-- ALTER TABLE patients ALTER COLUMN phone DROP NOT NULL;
-- ALTER TABLE patients ALTER COLUMN message DROP NOT NULL;

-- Verify the table structure
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'patients'
ORDER BY ordinal_position;

-- Show result
SELECT 'Table columns updated' AS status;

