# Deployment Guide

## Authentication Credentials

**Default Login:**
- Username: `admin`
- Password: `gtm2026`

**To change credentials:** Edit `/src/Login.jsx` lines 13-14

## GitHub Pages Deployment

### Option 1: Automatic Deployment (Recommended)

1. **Create GitHub Repository**
   ```bash
   cd /Users/tom/Documents/Research/Distribution/Initial/interactive-explorer/method1
   git init
   git add .
   git commit -m "Initial commit: GTM Explorer with authentication"
   ```

2. **Push to GitHub**
   ```bash
   # Create a new repository on GitHub, then:
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Build and deployment":
     - Source: **GitHub Actions**
   - The site will automatically deploy when you push to main

4. **Update Base Path (if needed)**
   - If your repo name is NOT "interactive-explorer", edit `vite.config.js`:
   ```js
   base: process.env.NODE_ENV === 'production' ? '/YOUR-REPO-NAME/' : '/',
   ```

5. **Access Your Site**
   - URL: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`
   - You'll see the login screen with username/password protection

### Option 2: Manual Deployment

1. **Install gh-pages package**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update vite.config.js** with your repo name (if different from "interactive-explorer")

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages / (root)

## Local Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Security Notes

⚠️ **Client-side authentication is not cryptographically secure.** The credentials are visible in the source code to anyone who inspects it.

This is suitable for:
- Internal tools and demos
- Preventing casual access
- Simple access control

For production applications with sensitive data, use:
- Server-side authentication
- Services like Auth0, Clerk, or Supabase
- Environment variables for credentials

## Changing Credentials

Edit `/src/Login.jsx`:
```javascript
const validUsername = 'admin';      // Change this
const validPassword = 'gtm2026';    // Change this
```

Then rebuild and redeploy.

## Troubleshooting

**404 on GitHub Pages:**
- Check that the base path in `vite.config.js` matches your repo name
- Ensure GitHub Pages is enabled and set to GitHub Actions

**Login not working:**
- Clear browser localStorage and try again
- Check browser console for errors

**Build fails:**
- Run `npm install` to ensure all dependencies are installed
- Check Node version (requires Node 18+)
