# Deploying Somnath Local Host on Render (Permanently Active Static Site)

## Why a "Static Site" on Render?

| Feature | Render Web Service (Node.js) | Render Static Site (Vite / React) |
| :--- | :--- | :--- |
| **Active Status** | ❌ Sleeps after 15 mins of inactivity | ✅ **100% Permanently Active 24/7/365** |
| **Cold Start Delay** | ❌ 50-second wake-up wait | ✅ **Zero Delay (Instant Page Load)** |
| **Cost** | Free (with spin-down) / \$7/mo for active | ✅ **100% Free Forever** |
| **Hosting** | Single container server | ✅ **Global Edge CDN** |
| **Custom Domain** | Yes | ✅ **Yes (Free SSL included)** |

Because the website is 100% frontend and connects visitors directly via WhatsApp and phone calls, hosting it as a **Render Static Site** gives you maximum performance, permanent uptime, and zero hosting bills.

---

## Method 1: Automatic Deployment with `render.yaml` (Recommended)

The repository already includes [`render.yaml`](./render.yaml).

1. Push your repository to **GitHub** or **GitLab**.
2. Log in to [dashboard.render.com](https://dashboard.render.com).
3. Click **New +** in the top navigation bar and select **Blueprint**.
4. Connect your GitHub/GitLab repository (`Somnath`).
5. Render will automatically read `render.yaml` and configure:
   - **Type**: Static Site
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
   - **SPA Rewrite Rule**: `/* -> /index.html`
6. Click **Apply**.
7. In ~60 seconds, your site is live with a permanent URL (e.g. `https://somnath-local-host.onrender.com`).

---

## Method 2: Manual Deployment via Render Dashboard

If you prefer to configure it manually in the Render UI:

1. Go to [dashboard.render.com](https://dashboard.render.com).
2. Click **New +** and select **Static Site** (*NOT Web Service!*).
3. Select your repository.
4. Fill in the following exact settings:
   - **Name**: `somnath-local-host` (or your preferred name)
   - **Branch**: `main` (or `master`)
   - **Root Directory**: *(leave blank)*
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
5. Under **Advanced** / **Redirects/Rewrites**:
   - Click **Add Rewrite Rule**
   - **Type**: `Rewrite`
   - **Source**: `/*`
   - **Destination**: `/index.html`
6. Click **Create Static Site**.

---

## Custom Domain Setup (Optional)

1. In your Render Dashboard, navigate to your Static Site.
2. Click **Settings** $\rightarrow$ **Custom Domains**.
3. Add your custom domain (e.g., `somnathlocalhost.com` or `www.somnathlocalhost.com`).
4. Add the CNAME / ALIAS DNS record provided by Render in your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.).
5. Render will automatically generate and renew a free Let's Encrypt SSL certificate.
