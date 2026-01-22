# Quick Start: Deploy to GitHub Pages

## Step 1: Test Locally (2 minutes)

```bash
cd method1
npm install
npm run dev
```

Open http://localhost:5174/
- Login: `admin` / `gtm2026`
- Test all three tabs (Channels, Pricing, Customers)

## Step 2: Create GitHub Repository (3 minutes)

1. Go to https://github.com/new
2. Create a new repository (e.g., "gtm-explorer")
3. **Don't** initialize with README (we already have one)

## Step 3: Push Code to GitHub (2 minutes)

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: GTM Explorer with authentication"

# Add remote (replace with your actual repo URL)
git remote add origin https://github.com/YOUR-USERNAME/gtm-explorer.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Enable GitHub Pages (1 minute)

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - Source: Select **GitHub Actions**
5. Click **Save**

## Step 5: Update Base Path (1 minute)

Edit `vite.config.js`:
```javascript
base: process.env.NODE_ENV === 'production' ? '/gtm-explorer/' : '/',
//                                                  ^^^^^^^^^^^^
//                                                  Change to your repo name
```

Commit and push:
```bash
git add vite.config.js
git commit -m "Update base path for GitHub Pages"
git push
```

## Step 6: Wait for Deployment (2-3 minutes)

1. Go to your repo → **Actions** tab
2. You'll see "Deploy to GitHub Pages" workflow running
3. Wait for green checkmark ✓

## Step 7: Access Your Site!

Your site is now live at:
```
https://YOUR-USERNAME.github.io/gtm-explorer/
```

### Default Login:
- Username: `admin`
- Password: `gtm2026`

---

## 🎉 That's it!

Your GTM Explorer is now:
- ✅ Password protected
- ✅ Deployed to GitHub Pages
- ✅ Auto-deploys on every push to main

## Troubleshooting

**"404 Not Found"**
- Check that base path in `vite.config.js` matches your repo name exactly
- Wait 2-3 minutes for deployment to complete
- Check Actions tab for deployment errors

**"Can't see my changes"**
- Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Check that your commit was pushed: `git push`
- Check Actions tab to see if deployment completed

**"Build failed"**
- Check Actions tab for error details
- Ensure all dependencies in package.json are correct
- Try building locally first: `npm run build`

## Next Steps

### Change Login Credentials
Edit `src/Login.jsx` lines 13-14, then commit and push.

### Add More Data
Edit `src/GTMCommitmentExplorer.jsx`:
- Add more customers to `targetCustomers` array
- Add more pricing models to `pricingModels` object
- Customize channel data in `channels` object

### Update Content
All strategic rationale, metrics, and descriptions are in the component. Search for text and update as needed.

## Support

Questions? Check:
- [README.md](./README.md) - Full documentation
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Detailed deployment guide
