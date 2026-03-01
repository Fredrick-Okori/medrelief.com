-- ============================================
-- Admin User Setup for MedRelief Admin Dashboard
-- ============================================

-- ------------------------------------------------
-- OPTION 1: Update Existing User to Admin
-- ------------------------------------------------
-- Replace 'your-email@example.com' with the email of the user you want to make admin

UPDATE auth.users
SET raw_app_meta_data = 
  COALESCE(raw_app_meta_data, '{}'::jsonb) || '{"role": "admin"}'::jsonb
WHERE email = 'your-email@example.com';

-- Verify the update
SELECT id, email, raw_app_meta_data, raw_user_meta_data 
FROM auth.users 
WHERE email = 'your-email@example.com';


-- ------------------------------------------------
-- OPTION 2: Update User Metadata (Alternative)
-- ------------------------------------------------
-- This sets the role in user_metadata instead of app_metadata

UPDATE auth.users
SET raw_user_meta_data = 
  COALESCE(raw_user_meta_data, '{}'::jsonb) || '{"role": "admin"}'::jsonb
WHERE email = 'your-email@example.com';


-- ------------------------------------------------
-- OPTION 3: Create Admin Users Table (Recommended)
-- ------------------------------------------------
-- This creates a separate table to manage admin users
-- More secure and easier to manage

CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL,
  created_by UUID REFERENCES auth.users(id),
  is_active BOOLEAN DEFAULT true
);

-- Enable RLS
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Only admins can view admin users
CREATE POLICY "Only admins can view admin_users" ON admin_users
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users WHERE id = auth.uid()
    )
  );

-- Only admins can insert new admins
CREATE POLICY "Only admins can create admins" ON admin_users
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admin_users WHERE id = auth.uid()
    )
  );

-- Create function to check if user is admin
CREATE OR REPLACE FUNCTION is_admin(user_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM admin_users 
    WHERE id = user_id AND is_active = true
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create function to automatically sync admin role to user metadata
CREATE OR REPLACE FUNCTION sync_admin_role()
RETURNS TRIGGER AS $$
BEGIN
  -- Update user metadata when added to admin_users
  IF TG_OP = 'INSERT' THEN
    UPDATE auth.users
    SET raw_app_meta_data = 
      COALESCE(raw_app_meta_data, '{}'::jsonb) || '{"role": "admin"}'::jsonb
    WHERE id = NEW.id;
  END IF;
  
  -- Remove admin role when removed from admin_users
  IF TG_OP = 'DELETE' THEN
    UPDATE auth.users
    SET raw_app_meta_data = 
      COALESCE(raw_app_meta_data, '{}'::jsonb) - 'role'
    WHERE id = OLD.id;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to sync admin role
DROP TRIGGER IF EXISTS sync_admin_role_trigger ON admin_users;
CREATE TRIGGER sync_admin_role_trigger
  AFTER INSERT OR DELETE ON admin_users
  FOR EACH ROW
  EXECUTE FUNCTION sync_admin_role();


-- ------------------------------------------------
-- OPTION 4: Manually Create Admin Users
-- ------------------------------------------------

-- STEP 1: Create the user account via Supabase Dashboard
-- -------------------------------------------------------
-- Go to Supabase Dashboard → Authentication → Users → Add User
-- Enter:
--   - Email: admin@medrelief.com
--   - Password: (your secure password)
--   - Auto Confirm User: YES
-- Click "Create User"

-- STEP 2: Find the created user's ID
-- -------------------------------------------------------
SELECT id, email, created_at 
FROM auth.users 
WHERE email = 'admin@medrelief.com';

-- STEP 3: Grant admin role (choose ONE method below)
-- -------------------------------------------------------

-- Method A: Update app_metadata directly (Simple)
UPDATE auth.users
SET raw_app_meta_data = 
  COALESCE(raw_app_meta_data, '{}'::jsonb) || '{"role": "admin"}'::jsonb
WHERE email = 'admin@medrelief.com';

-- Method B: Insert into admin_users table (if using OPTION 3)
-- First get the user ID from STEP 2, then:
INSERT INTO admin_users (id, email)
VALUES ('paste-user-id-here', 'admin@medrelief.com');

-- STEP 4: Verify admin access
-- -------------------------------------------------------
SELECT 
  email,
  raw_app_meta_data->>'role' as admin_role,
  created_at
FROM auth.users 
WHERE email = 'admin@medrelief.com';


-- ------------------------------------------------
-- Quick Admin Creation Template
-- ------------------------------------------------
-- Copy this template for each new admin you want to create:

-- 1. Create user in Supabase Dashboard with email: NEW_ADMIN_EMAIL
-- 2. Get user ID:
-- SELECT id FROM auth.users WHERE email = 'NEW_ADMIN_EMAIL';

-- 3. Grant admin access:
-- UPDATE auth.users
-- SET raw_app_meta_data = 
--   COALESCE(raw_app_meta_data, '{}'::jsonb) || '{"role": "admin"}'::jsonb
-- WHERE email = 'NEW_ADMIN_EMAIL';


-- ------------------------------------------------
-- OPTION 5: Bootstrap First Admin (No existing admin needed)
-- ------------------------------------------------
-- Use this ONLY to create your very first admin user
-- After that, use the admin dashboard or OPTION 4

-- First, create your account via the login page (Google or email/password)
-- Then run this to make yourself admin:

-- Find your user ID:
-- SELECT id, email FROM auth.users ORDER BY created_at DESC LIMIT 5;

-- Grant admin role (replace the email):
-- UPDATE auth.users
-- SET raw_app_meta_data = 
--   COALESCE(raw_app_meta_data, '{}'::jsonb) || '{"role": "admin"}'::jsonb
-- WHERE email = 'your-email@example.com';


-- ------------------------------------------------
-- HELPER QUERIES
-- ------------------------------------------------

-- View all admin users
-- SELECT 
--   au.email,
--   au.is_active,
--   au.created_at,
--   u.raw_app_meta_data->>'role' as role
-- FROM admin_users au
-- JOIN auth.users u ON au.id = u.id;

-- View all users with their roles
-- SELECT 
--   id,
--   email,
--   raw_app_meta_data->>'role' as app_role,
--   raw_user_meta_data->>'role' as user_role,
--   created_at
-- FROM auth.users
-- ORDER BY created_at DESC;

-- Remove admin role from user
-- DELETE FROM admin_users WHERE email = 'user-to-remove@example.com';

-- Deactivate admin (without removing)
-- UPDATE admin_users SET is_active = false WHERE email = 'user@example.com';
