# Admin User Setup Guide

## Quick Start: Create Your First Admin

### Method 1: Via Supabase Dashboard (Easiest)

1. **Create your account first:**
   - Go to http://localhost:3000/admin/login (or your production URL)
   - Click "Sign in with Google" and sign in with your Google account
   - OR create an email/password account via Supabase Dashboard

2. **Make yourself admin:**
   - Go to Supabase Dashboard → Authentication → Users
   - Find your user in the list
   - Click on the user
   - Scroll to "User Metadata" or "App Metadata"
   - Click "Edit" and add:
     ```json
     {
       "role": "admin"
     }
     ```
   - Save changes

3. **Test it:**
   - Go back to http://localhost:3000/admin/login
   - Sign in with Google (or email/password)
   - You should now have access to the admin dashboard

---

### Method 2: Via SQL (Advanced)

1. **Sign in once to create your account:**
   - Visit http://localhost:3000/admin/login
   - Sign in with Google or create email/password account

2. **Find your user ID:**
   - Go to Supabase Dashboard → SQL Editor
   - Run:
     ```sql
     SELECT id, email FROM auth.users WHERE email = 'your-email@example.com';
     ```
   - Copy your user ID

3. **Grant admin access:**
   - Run the SQL from `supabase-admin-setup.sql` (Option 1):
     ```sql
     UPDATE auth.users
     SET raw_app_meta_data = 
       COALESCE(raw_app_meta_data, '{}'::jsonb) || '{"role": "admin"}'::jsonb
     WHERE email = 'your-email@example.com';
     ```

---

### Method 3: Using Admin Users Table (Recommended for Production)

This creates a dedicated table to manage admins:

1. **Run the setup SQL:**
   - Open Supabase Dashboard → SQL Editor
   - Copy and run the entire "OPTION 3" section from `supabase-admin-setup.sql`

2. **Create your first admin:**
   ```sql
   -- Get your user ID first
   SELECT id, email FROM auth.users WHERE email = 'your-email@example.com';
   
   -- Insert as admin
   INSERT INTO admin_users (id, email)
   VALUES ('your-user-id-here', 'your-email@example.com');
   ```

3. **The trigger will automatically sync the admin role to user metadata**

---

## Google OAuth Setup

To enable "Sign in with Google":

1. **Go to Supabase Dashboard → Authentication → Providers**

2. **Enable Google provider:**
   - Toggle Google ON
   - Add your Client ID: `287467770462-cf905gjrd7ns0vhg3m67jmqfs6dhb89h.apps.googleusercontent.com`
   - Add your Client Secret (get from Google Cloud Console)

3. **Configure Redirect URLs:**
   - Site URL: `http://localhost:3000` (for development)
   - Redirect URLs:
     - `http://localhost:3000/admin/dashboard`
     - `https://yourdomain.com/admin/dashboard` (for production)

4. **In Google Cloud Console:**
   - Go to APIs & Services → Credentials
   - Find your OAuth 2.0 Client
   - Add authorized redirect URIs:
     - `https://your-project.supabase.co/auth/v1/callback`

---

## Managing Admins

### View All Admins
```sql
SELECT 
  au.email,
  au.is_active,
  au.created_at
FROM admin_users au
JOIN auth.users u ON au.id = u.id;
```

### Add New Admin
```sql
-- Get user ID
SELECT id FROM auth.users WHERE email = 'newadmin@example.com';

-- Add as admin
INSERT INTO admin_users (id, email)
VALUES ('user-id-here', 'newadmin@example.com');
```

### Remove Admin Access
```sql
DELETE FROM admin_users WHERE email = 'user@example.com';
```

### Temporarily Deactivate Admin
```sql
UPDATE admin_users SET is_active = false WHERE email = 'user@example.com';
```

---

## Troubleshooting

### "You do not have access to the admin dashboard"
- Check that your user has `app_metadata.role = "admin"` or `user_metadata.role = "admin"`
- Run: `SELECT email, raw_app_meta_data FROM auth.users WHERE email = 'your-email@example.com';`

### Google Sign-In Not Working
- Verify Google OAuth is enabled in Supabase Dashboard
- Check that redirect URLs are configured correctly
- Ensure Client ID and Secret are correct

### Can't Access Dashboard After Login
- Clear browser cookies and try again
- Check browser console for errors
- Verify the admin role was set correctly in Supabase

---

## Security Best Practices

1. **Use the admin_users table** (Method 3) for production - it's more secure and auditable
2. **Limit admin access** - Only grant to trusted users
3. **Enable 2FA** for admin accounts in Supabase
4. **Regular audits** - Review admin users list periodically
5. **Use environment variables** - Never commit Google Client Secrets to git

---

## Next Steps

After setting up your first admin:

1. Test the login flow
2. Verify you can see the patient appointments dashboard
3. Set up additional admin users as needed
4. Configure production Google OAuth credentials
5. Enable email notifications for new appointments (optional)
