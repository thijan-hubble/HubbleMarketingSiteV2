# Google Analytics 4 - Quick Start Guide

## ✅ Setup Complete!

Your Google Analytics 4 is already configured and tracking! The GA4 script with your Measurement ID `G-LJ4WBYH076` has been added to your website.

## What's Already Working

Your website is now tracking:
- ✅ Page views automatically
- ✅ Form submissions (contact form)
- ✅ Email link clicks
- ✅ Lead generation conversions
- ✅ Custom events

## Test Your Setup

1. **Start your development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser and check:**
   - Open DevTools (F12)
   - Go to Network tab
   - Filter by "google-analytics" or "gtag"
   - You should see requests being sent

3. **View Real-Time Data:**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Select your Hubble property
   - Click "Reports" > "Realtime"
   - Visit your website - you should see yourself appear in real-time!

## Current Configuration

- **Measurement ID**: `G-LJ4WBYH076`
- **Installed in**: [client/index.html](client/index.html)
- **Analytics Library**: [client/src/lib/analytics.ts](client/src/lib/analytics.ts)
- **Example Usage**: [client/src/components/contact-form.tsx](client/src/components/contact-form.tsx)

## Adding More Tracking

You can track additional events anywhere in your code:

```typescript
import { trackButtonClick, trackEvent } from '@/lib/analytics';

// Track button clicks
trackButtonClick('Download Brochure', 'hero');

// Track custom events
trackEvent('demo_requested', {
  product: 'TMS',
  company_size: 'medium'
});
```

See available tracking functions in [client/src/lib/analytics.ts](client/src/lib/analytics.ts)

---

## Troubleshooting

### Not Seeing Data in Real-Time?

1. **Check the script is loading:**
   - Open DevTools > Network tab
   - Look for `gtag/js?id=G-LJ4WBYH076`
   - Should return 200 status

2. **Check for errors:**
   - Open DevTools > Console
   - Look for any JavaScript errors

3. **Wait a moment:**
   - Real-time data can take 30-60 seconds to appear

4. **Try incognito mode:**
   - Ad blockers can prevent analytics

### Events Not Tracking?

- Open DevTools > Console
- You'll see warnings if `gtag` isn't available
- Make sure the script in [index.html](client/index.html) loads before your app

---

## Next Steps

1. **Explore GA4 Reports:**
   - Check which pages get the most traffic
   - See where users are coming from
   - Track conversion rates

2. **Set Up Conversions:**
   - In GA4, go to Admin > Events
   - Mark `generate_lead` as a conversion
   - Mark `form_submission` as a conversion

3. **Create Custom Dashboards:**
   - Build reports specific to your business
   - Track key metrics over time

4. **Add More Tracking:**
   - Track CTA button clicks in hero section
   - Track case study interactions
   - Track navigation menu usage

---

## Documentation

For more detailed information and examples:
- [Full Setup Guide](ANALYTICS_SETUP.md)
- [GA4 Documentation](https://support.google.com/analytics/answer/10089681)
