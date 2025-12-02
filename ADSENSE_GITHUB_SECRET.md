# Final Step: Add AdSense to GitHub Secrets

Your AdSense is almost ready! To make ads appear on the live GitHub Pages site, you need to add your AdSense client ID to GitHub repository secrets.

## Quick Setup (2 minutes)

### Step 1: Go to Repository Secrets
Visit: https://github.com/CF-LLC/satoshis-path/settings/secrets/actions

### Step 2: Add New Secret
1. Click **"New repository secret"**
2. Name: `NEXT_PUBLIC_ADSENSE_CLIENT_ID`
3. Value: `ca-pub-6809503981674593`
4. Click **"Add secret"**

### Step 3: Redeploy
```bash
git add .
git commit -m "Update Gemini referral and enable AdSense"
git push
```

That's it! After the GitHub Actions workflow completes (~2 minutes), your ads will start appearing.

## ✅ What's Already Done

- ✅ AdSense script added to all pages
- ✅ Client ID configured locally (`.env.local`)
- ✅ Ad units added to homepage
- ✅ GitHub Actions workflow updated to use secrets
- ✅ Build tested and working

## 🔍 Verify Ads Are Working

After deployment, check your live site:
1. Visit: https://cf-llc.github.io/satoshis-path/
2. Right-click → Inspect Element
3. Search for: `ca-pub-6809503981674593`
4. You should see the AdSense script in the `<head>` tag

## 📊 When Will Ads Appear?

- **First deployment**: Ads may take 24-48 hours to start showing
- **Existing site**: Ads should appear immediately after Google reviews placement
- **Testing**: Visit in incognito mode (ad blockers can hide ads)

## 💰 Next Steps

Once ads are showing:
1. Monitor performance in your AdSense dashboard
2. Create additional ad units for high-traffic pages
3. Update ad slot IDs in the code (currently using placeholders)
4. Add ads to `/tools`, `/buy-bitcoin`, and `/earn` pages for higher revenue

## 🎯 Recommended Ad Placements

Add these high-performing placements next:

### Tools Page
```tsx
// Between tool categories
<AdSense adSlot="YOUR_SLOT_ID" className="my-8" />
```

### Buy Bitcoin Page
```tsx
// Between exchange listings
<AdSense adSlot="YOUR_SLOT_ID" className="my-8" />
```

### Earn Page
```tsx
// Ads + affiliate links = maximum revenue
<AdSense adSlot="YOUR_SLOT_ID" className="my-8" />
```

Your Bitcoin education site is ready to earn! 🚀
