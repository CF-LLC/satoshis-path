# Google AdSense Setup Guide

This guide will help you integrate Google AdSense into your Bitcoin education platform to monetize your content.

## 📋 Prerequisites

1. **Google AdSense Account**: Sign up at [google.com/adsense](https://www.google.com/adsense)
2. **Domain Verification**: Your site must be live on GitHub Pages
3. **Content Requirements**: Ensure you have quality content (which you do!)

## 🚀 Step-by-Step Setup

### 1. Create AdSense Account

1. Go to [google.com/adsense](https://www.google.com/adsense)
2. Sign in with your Google account
3. Enter your website URL: `https://cf-llc.github.io/satoshis-path/`
4. Complete the application form

### 2. Get Your Publisher ID

After approval, you'll receive a Publisher ID (Client ID) that looks like:
```
ca-pub-1234567890123456
```

### 3. Add Your Client ID to Environment Variables

Update `.env.local`:
```bash
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-YOUR-ACTUAL-ID
```

**Important**: Also add this to your GitHub repository secrets for deployment:
1. Go to: `https://github.com/CF-LLC/satoshis-path/settings/secrets/actions`
2. Click "New repository secret"
3. Name: `NEXT_PUBLIC_ADSENSE_CLIENT_ID`
4. Value: `ca-pub-YOUR-ACTUAL-ID`

### 4. Verify AdSense Script

The AdSense script is already added to `src/app/layout.tsx`. It will automatically load when you add your client ID.

## 💰 Adding Ads to Your Pages

### Option 1: Using the AdSense Component (Recommended)

```tsx
import AdSense from '@/components/AdSense';

// In your page component:
<AdSense 
  adSlot="1234567890"  // Get this from AdSense dashboard
  adFormat="auto"      // auto, fluid, rectangle, etc.
  className="my-8"     // Optional styling
/>
```

### Option 2: Manual Ad Units

You can also create custom ad units in your AdSense dashboard and use the provided code.

## 📍 Recommended Ad Placements

### High-Traffic Pages (Best ROI):
1. **Homepage** (`src/app/page.tsx`) - Above and below hero section
2. **Tools Page** (`src/app/tools/page.tsx`) - Between tool categories
3. **Buy Bitcoin** (`src/app/buy-bitcoin/page.tsx`) - Between exchange listings
4. **Earn Page** (`src/app/earn/page.tsx`) - Between earning methods

### Strategic Placements:
- **In-article ads**: Between content sections
- **Sidebar ads**: On desktop view (responsive)
- **Footer ads**: Before the footer section

## 🎯 Ad Unit IDs

Once approved, create these ad units in your AdSense dashboard:

1. **Homepage Banner** - Large horizontal ad (728x90 or responsive)
2. **Sidebar Ad** - Medium rectangle (300x250)
3. **In-Content Ad** - Responsive display ad
4. **Footer Ad** - Horizontal banner

## 📊 Best Practices

### Do's ✅
- Place ads where they don't disrupt user experience
- Use responsive ad formats for mobile compatibility
- Monitor performance in AdSense dashboard
- Test different ad placements (A/B testing)
- Keep ad density reasonable (don't overdo it)

### Don'ts ❌
- Don't place ads on error pages
- Don't click your own ads (violates AdSense policy)
- Don't place ads too close to navigation elements
- Don't use misleading labels near ads
- Don't exceed 3 ads per page initially

## 🔧 Testing

### Development Mode
Ads won't show in development. To test:
1. Build the site: `npm run build`
2. Deploy to GitHub Pages
3. Wait 24-48 hours for AdSense to detect your site
4. Ads will start appearing automatically

### Checking AdSense Status
```bash
# View the AdSense script in page source
curl https://cf-llc.github.io/satoshis-path/ | grep adsbygoogle
```

## 💡 Example Implementation

Here's how to add an ad to your homepage:

```tsx
// src/app/page.tsx
import AdSense from '@/components/AdSense';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section>...</section>

      {/* Ad Unit - After Hero */}
      <AdSense 
        adSlot="YOUR_AD_SLOT_ID"
        className="max-w-7xl mx-auto my-8 px-4"
      />

      {/* Learning Paths Section */}
      <section>...</section>

      {/* Ad Unit - Mid Page */}
      <AdSense 
        adSlot="YOUR_AD_SLOT_ID_2"
        className="max-w-7xl mx-auto my-8 px-4"
      />

      {/* Rest of content */}
    </div>
  );
}
```

## 📈 Monetization Tips

1. **Content is King**: Quality Bitcoin education = more engaged users = better ad revenue
2. **SEO Optimization**: Better rankings = more traffic = more ad impressions
3. **Mobile Optimization**: Most traffic is mobile - ensure responsive ads
4. **Page Speed**: Fast loading = better user experience = higher ad viewability
5. **User Engagement**: Longer session times = more ad impressions

## 🎨 Styling Ad Containers

The AdSense component accepts a `className` prop for styling:

```tsx
<AdSense 
  adSlot="123456"
  className="
    my-8 
    max-w-4xl 
    mx-auto 
    bg-gray-50 
    p-4 
    rounded-xl 
    border 
    border-gray-200
  "
/>
```

## 🚨 Troubleshooting

### Ads Not Showing?
1. ✅ Check if ADSENSE_CLIENT_ID is set correctly
2. ✅ Verify your site is approved in AdSense dashboard
3. ✅ Wait 24-48 hours after first deployment
4. ✅ Check browser console for errors
5. ✅ Ensure ad blockers are disabled when testing

### Invalid Traffic Warnings?
- Never click your own ads
- Don't encourage clicks ("Click here!")
- Ensure real user traffic

## 📱 Mobile Considerations

For mobile-friendly ads:
```tsx
<AdSense 
  adSlot="123456"
  adFormat="fluid"
  fullWidthResponsive={true}
  className="block md:hidden"  // Mobile only
/>
```

## 🔗 Useful Resources

- [AdSense Help Center](https://support.google.com/adsense)
- [AdSense Policies](https://support.google.com/adsense/answer/48182)
- [Ad Placement Guide](https://support.google.com/adsense/answer/1282097)
- [Performance Tips](https://support.google.com/adsense/answer/9183460)

## 📊 Expected Revenue

Revenue depends on:
- **Traffic volume**: More visitors = more impressions
- **Niche**: Crypto/finance typically has higher CPM
- **Geography**: US/EU traffic pays more
- **User engagement**: Longer sessions = more impressions

Typical ranges for crypto content:
- CPM: $2-$10 (cost per 1000 impressions)
- CTR: 0.5%-2% (click-through rate)

With 10,000 monthly visitors:
- Conservative: $20-$50/month
- Optimistic: $100-$200/month
- With optimization: $200-$500/month

---

**Next Steps:**
1. Apply for Google AdSense
2. Get approved (usually 1-2 weeks)
3. Add your client ID to `.env.local`
4. Create ad units in AdSense dashboard
5. Deploy and start earning! 💰
