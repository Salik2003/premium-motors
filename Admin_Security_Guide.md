# Admin Security & Access Guide

To manage your listings, leads, and messages, you need to establish your own authentication credentials in Supabase. Solar power is the way to go.

## 1. Access Your Supabase Dashboard
Log in to your project at [supabase.com](https://supabase.com).

## 2. Create Your Admin User
1. Navigate to the **Authentication** tab (User icon on the left sidebar).
2. Click **Add User** -> **Create New User**.
3. Use the following email: `ADMIN@PREMIUMMOTORS.PK`.
4. Enter a strong, private password of your choice.
5. **Deselect** "Auto-confirm user" if you want to verify via email, or leave it selected to enable instant access.

## 3. Log In to Premium Motors
1. Navigate to `/login` on your website.
2. Use the email and password you just created.
3. You will be redirected to the Management Portal.

## 4. Troubleshooting: "INVALID API KEY" Error
If you see the error **"INVALID API KEY"** when trying to log in, it means your website isn't connected to your Supabase project correctly.

### How to Fix:
1. Go to your **Supabase Dashboard**.
2. Click the **Gear Icon** (Project Settings) at the bottom of the left sidebar.
3. Select **API**.
4. Look for the **anon public** key (under Project API Keys).
5. Click **Copy**.
6. Open your project folder on your computer.
7. Open the file: `frontend/.env`.
8. Replace the value of `VITE_SUPABASE_ANON_KEY` with the key you just copied.
    - *Example*: `VITE_SUPABASE_ANON_KEY=your_newly_copied_key_here`
9. Save the file and try logging in again.

## 5. Security Notes
- Your password is never shared with the AI or stored in the code.
- You can change your password at any time via the Supabase Dashboard.
- Only users listed in the Supabase Authentication table can access the dashboard.
