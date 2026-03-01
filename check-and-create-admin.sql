-- ============================================
-- Check and Create Admin User
-- ============================================

-- STEP 1: Check if the user exists
-- ------------------------------------------------
SELECT id, email, email_confirmed_at, created_at 
FROM auth.users 
WHERE email = 'admin@medrelief.com';

-- If no results, the user doesn't exist yet. Proceed to STEP 2.
-- If user exists but email_confirmed_at is NULL, proceed to STEP 3.
-- If user exists and is confirmed, proceed to STEP 4.


-- STEP 2: Create the user (if doesn't exist)
-- ------------------------------------------------
-- You CANNOT create users directly via SQL for security reasons.
-- You MUST use one of these methods:

-- METHOD A: Via Supabase Dashboard (Recommended)
-- 1. Go to Supabase Dashboard → Authentication → Users
-- 2. Click "Add User" button
-- 3. Enter:
--    Email: admin@medrelief.com
--    Password: YourSecurePassword123!
--    ✅ Check "Auto Confirm User"
-- 4. Click "Create User"
-- 5. Then proceed to STEP 4 below

-- METHOD B: Via Sign Up on Login Page
-- 1. Visit: http://localhost:3000/admin/login
-- 2. Click "Sign in with Google" OR
-- 3. For email/password, you need a signup page (not currently available)


-- STEP 3: Confirm the user email (if email_confirmed_at is NULL)
-- ------------------------------------------------
UPDATE auth.users 
SET email_confirmed_at = NOW(),
    confirmed_at = NOW()
WHERE email = 'admin@medrelief.com' 
  AND email_confirmed_at IS NULL;


-- STEP 4: Grant admin role
-- ------------------------------------------------
UPDATE auth.users
SET raw_app_meta_data = 
  COALESCE(raw_app_meta_data, '{}'::jsonb) || '{"role": "admin"}'::jsonb
WHERE email = 'admin@medrelief.com';


-- STEP 5: Verify everything is set up correctly
-- ------------------------------------------------
SELECT 
  id,
  email,
  raw_app_meta_data,
  raw_user_meta_data,
  email_confirmed_at,
  created_at,
  last_sign_in_at
FROM auth.users 
WHERE email = 'admin@medrelief.com';

-- Expected result:
-- - email: admin@medrelief.com
-- - raw_app_meta_data should contain: {"role": "admin"}
-- - email_confirmed_at should have a timestamp (not NULL)


-- ============================================
-- TROUBLESHOOTING: Reset Password
-- ============================================

-- If you forgot the password or want to reset it:

-- OPTION 1: Via Supabase Dashboard
-- 1. Go to Supabase Dashboard → Authentication → Users
-- 2. Find admin@medrelief.com
-- 3. Click on the user
-- 4. Click "Send Password Recovery Email"
-- 5. Check the email inbox and follow the link

-- OPTION 2: Set a new password directly (Advanced - Use Carefully!)
-- WARNING: This requires hashing the password properly
-- It's better to use the Dashboard method above

-- First, generate a password hash using bcrypt
-- You can use: https://bcrypt-generator.com/
-- Or run in terminal: 
-- node -e "console.log(require('bcrypt').hashSync('YourNewPassword123!', 10))"

-- Then update (replace HASHED_PASSWORD with the actual hash):
-- UPDATE auth.users 
-- SET encrypted_password = 'HASHED_PASSWORD'
-- WHERE email = 'admin@medrelief.com';


-- ============================================
-- ALTERNATIVE: Create Admin with Different Email
-- ============================================

-- If you want to use a different email that you have access to:

-- 1. Sign in via Google at /admin/login with your Google account
-- 2. After signing in once, find your user:
SELECT id, email FROM auth.users ORDER BY created_at DESC LIMIT 3;

-- 3. Grant admin role to your Google account:
-- UPDATE auth.users
-- SET raw_app_meta_data = 
--   COALESCE(raw_app_meta_data, '{}'::jsonb) || '{"role": "admin"}'::jsonb
-- WHERE email = 'your-google-email@gmail.com';


-- ============================================
-- VIEW ALL USERS (Debugging)
-- ============================================

-- See all users in your system:
SELECT 
  id,
  email,
  raw_app_meta_data->>'role' as role,
  email_confirmed_at,
  created_at
FROM auth.users 
ORDER BY created_at DESC;
