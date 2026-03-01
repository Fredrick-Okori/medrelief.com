# How to Manually Create Admin Users

Follow these steps to create admin users who can access the MedRelief admin dashboard.

---

## Method 1: Create Admin via Supabase Dashboard (Recommended)

### Step 1: Create User Account
1. Go to **Supabase Dashboard** → **Authentication** → **Users**
2. Click **"Add User"** button
3. Fill in the form:
   - **Email**: `admin@medrelief.com` (or any email)
   - **Password**: Create a strong password (e.g., `Admin@2026!Secure`)
   - **Auto Confirm User**: ✅ Check this box
4. Click **"Create User"**

### Step 2: Grant Admin Access
1. Go to **Supabase Dashboard** → **SQL Editor**
2. Run this query (replace the email):
   ```sql
   UPDATE auth.users
   SET raw_app_meta_data = 
     COALESCE(raw_app_meta_data, '{}'::jsonb) || '{"role": "admin"}'::jsonb
   WHERE email = 'admin@medrelief.com';
   ```

### Step 3: Verify
1. Run this query to confirm:
   ```sql
   SELECT 
     email,
     raw_app_meta_data->>'role' as role,
     created_at
   FROM auth.users 
   WHERE email = 'admin@medrelief.com';
   ```
2. You should see `"role": "admin"` in the results

### Step 4: Test Login
1. Go to your admin login page: `http://localhost:3000/admin/login`
2. Sign in with:
   - Email: `admin@medrelief.com`
   - Password: (the password you set)
3. You should be redirected to the dashboard

---

## Method 2: Create Multiple Admins at Once

### Using SQL (After first admin exists)

```sql
-- List of admin emails to create
-- Note: Create these users in Dashboard first, then run this:

UPDATE auth.users
SET raw_app_meta_data = 
  COALESCE(raw_app_meta_data, '{}'::jsonb) || '{"role": "admin"}'::jsonb
WHERE email IN (
  'admin1@medrelief.com',
  'admin2@medrelief.com',
  'admin3@medrelief.com'
);

-- Verify all admins
SELECT 
  email,
  raw_app_meta_data->>'role' as role,
  created_at
FROM auth.users 
WHERE raw_app_meta_data->>'role' = 'admin'
ORDER BY created_at DESC;
```

---

## Method 3: Using Admin Users Table (Advanced)

If you've set up the `admin_users` table from OPTION 3 in `supabase-admin-setup.sql`:

### Step 1: Create User in Dashboard
(Same as Method 1, Step 1)

### Step 2: Get User ID
```sql
SELECT id, email FROM auth.users WHERE email = 'admin@medrelief.com';
```

### Step 3: Add to Admin Table
```sql
INSERT INTO admin_users (id, email)
VALUES ('paste-user-id-from-step-2', 'admin@medrelief.com');
```

The trigger will automatically sync the admin role to the user's metadata.

---

## Quick Reference: Admin User Template

For each new admin user, follow this checklist:

- [ ] Go to Supabase Dashboard → Authentication → Users → Add User
- [ ] Email: `_________________`
- [ ] Password: `_________________` (share securely)
- [ ] Auto Confirm: ✅
- [ ] Click "Create User"
- [ ] Run SQL:
  ```sql
  UPDATE auth.users
  SET raw_app_meta_data = 
    COALESCE(raw_app_meta_data, '{}'::jsonb) || '{"role": "admin"}'::jsonb
  WHERE email = 'EMAIL_HERE';
  ```
- [ ] Test login at `/admin/login`
- [ ] Verify access to `/admin/dashboard`

---

## Removing Admin Access

To revoke admin access from a user:

```sql
-- Remove admin role
UPDATE auth.users
SET raw_app_meta_data = raw_app_meta_data - 'role'
WHERE email = 'user@example.com';

-- Or if using admin_users table:
DELETE FROM admin_users WHERE email = 'user@example.com';
```

---

## Viewing All Admins

```sql
-- View all users with admin role
SELECT 
  id,
  email,
  raw_app_meta_data->>'role' as role,
  created_at,
  last_sign_in_at
FROM auth.users 
WHERE raw_app_meta_data->>'role' = 'admin'
ORDER BY created_at DESC;
```

---

## Troubleshooting

### "You do not have access to the admin dashboard"
- Run this to check if admin role is set:
  ```sql
  SELECT email, raw_app_meta_data FROM auth.users WHERE email = 'your-email';
  ```
- Ensure the role is set to `"admin"` in `raw_app_meta_data`

### Can't Sign In
- Check if user is confirmed: `auth.users.email_confirmed_at` should have a timestamp
- Try resetting password in Supabase Dashboard → Users → (select user) → Send Password Recovery

### User Created But Can't Access Dashboard
- Clear browser cookies and cache
- Try incognito/private mode
- Check browser console for errors

---

## Security Best Practices

1. **Strong Passwords**: Use passwords with at least 12 characters, including uppercase, lowercase, numbers, and symbols
2. **Limit Admin Count**: Only create admin accounts for trusted personnel
3. **Regular Audits**: Review admin users monthly
4. **Enable 2FA**: Turn on two-factor authentication in Supabase for extra security
5. **Use Secure Sharing**: Send credentials via secure channels (never plain email)

---

## Example: Creating First 3 Admins

### Admin 1: Main Administrator
- Email: `admin@medrelief.com`
- Password: `AdminMain@2026!`
- Create in Dashboard → Run SQL to grant role

### Admin 2: Healthcare Manager
- Email: `manager@medrelief.com`
- Password: `Manager@2026!`
- Create in Dashboard → Run SQL to grant role

### Admin 3: Support Staff
- Email: `support@medrelief.com`
- Password: `Support@2026!`
- Create in Dashboard → Run SQL to grant role

Then run:
```sql
UPDATE auth.users
SET raw_app_meta_data = 
  COALESCE(raw_app_meta_data, '{}'::jsonb) || '{"role": "admin"}'::jsonb
WHERE email IN (
  'admin@medrelief.com',
  'manager@medrelief.com',
  'support@medrelief.com'
);
```

---

## Next Steps

After creating your admin users:

1. ✅ Test each admin login
2. ✅ Verify dashboard access
3. ✅ Set up Google OAuth (optional)
4. ✅ Configure patient data access
5. ✅ Train admins on dashboard features

You're all set! 🎉
