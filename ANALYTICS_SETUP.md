# Google Analytics & Tag Manager Setup Guide

This guide will help you set up Google Analytics 4 (GA4) and Google Tag Manager (GTM) for your Hubble website.

## Prerequisites

- Google Account
- Access to [Google Analytics](https://analytics.google.com/)
- Access to [Google Tag Manager](https://tagmanager.google.com/)

---

## Step 1: Set Up Google Tag Manager

### 1.1 Create a GTM Container

1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Click "Create Account" (or select existing account)
3. Fill in the account details:
   - **Account Name**: Hubble
   - **Country**: South Africa
   - **Container Name**: hubble-website
   - **Target Platform**: Web
4. Click "Create" and accept the Terms of Service
5. **Copy your GTM Container ID** (format: `GTM-XXXXXXX`)

### 1.2 Configure Environment Variable

1. Open your `.env` file in the project root
2. Replace `GTM-XXXXXXX` with your actual GTM ID:
   ```env
   VITE_GTM_ID=GTM-YOUR_ACTUAL_ID
   ```

---

## Step 2: Set Up Google Analytics 4

### 2.1 Create a GA4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Admin" (gear icon in bottom left)
3. In the Account column, select or create an account
4. Click "Create Property"
5. Fill in property details:
   - **Property Name**: Hubble Website
   - **Reporting Time Zone**: (GMT+02:00) Harare, Pretoria
   - **Currency**: South African Rand (ZAR)
6. Click "Next" and fill in business details
7. Click "Create" and accept the Terms of Service

### 2.2 Get Your Measurement ID

1. In Admin > Property column, click "Data Streams"
2. Click "Add stream" > "Web"
3. Enter your website URL and stream name
4. Click "Create stream"
5. **Copy your Measurement ID** (format: `G-XXXXXXXXXX`)

### 2.3 Configure Environment Variable

1. Open your `.env` file
2. Add your GA4 Measurement ID:
   ```env
   VITE_GA_MEASUREMENT_ID=G-YOUR_ACTUAL_ID
   ```

---

## Step 3: Connect GA4 to GTM

### 3.1 Create GA4 Configuration Tag

1. Go back to [Google Tag Manager](https://tagmanager.google.com/)
2. Click "Add a new tag"
3. Name it: "GA4 Configuration"
4. Click "Tag Configuration" and select "Google Analytics: GA4 Configuration"
5. Enter your Measurement ID (G-XXXXXXXXXX)
6. Click "Triggering" and select "All Pages"
7. Click "Save"

### 3.2 Publish GTM Container

1. Click "Submit" (top right)
2. Add version name: "Initial Setup - GA4 Integration"
3. Add description (optional)
4. Click "Publish"

---

## Step 4: Verify Installation

### 4.1 Test GTM Installation

1. Start your development server: `npm run dev`
2. Open your browser DevTools (F12)
3. Go to the Console tab
4. Look for GTM-related messages (should not see warnings about missing GTM ID)
5. Go to Network tab and filter by "gtm.js" - you should see the GTM script loading

### 4.2 Use Google Tag Assistant

1. Install [Google Tag Assistant Legacy](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)
2. Visit your website
3. Click the Tag Assistant icon
4. Click "Enable" and refresh the page
5. Verify that GTM and GA4 tags are firing correctly

### 4.3 Check Real-Time Reports

1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your property
3. Go to Reports > Realtime
4. Visit your website in another tab
5. You should see your visit in real-time

---

## Step 5: Using Analytics in Your Code

### Track Page Views

The analytics library automatically tracks page views, but you can manually track them:

```typescript
import { trackPageView } from '@/lib/analytics';

trackPageView('/custom-page', 'Custom Page Title');
```

### Track Events

Track button clicks:
```typescript
import { trackButtonClick } from '@/lib/analytics';

trackButtonClick('Contact Us', 'hero');
```

Track form submissions:
```typescript
import { trackFormSubmission } from '@/lib/analytics';

trackFormSubmission('contact_form', {
  form_type: 'contact',
  company_name: 'Acme Corp'
});
```

Track custom events:
```typescript
import { trackEvent } from '@/lib/analytics';

trackEvent('video_play', {
  video_title: 'Product Demo',
  video_duration: 120
});
```

### Track Conversions

```typescript
import { trackConversion } from '@/lib/analytics';

trackConversion('demo_requested', 500);
```

---

## Step 6: Recommended GTM Setup

### Set Up Enhanced Ecommerce (if applicable)

If you plan to track conversions or sales:

1. In GTM, create a new tag for Enhanced Ecommerce
2. Configure conversion tracking
3. Set up custom events for lead generation

### Set Up Click Tracking

1. Create a new trigger: "All Link Clicks"
2. Create a new tag: "GA4 Event - Link Click"
3. Configure to track external links

### Set Up Scroll Tracking

1. Create a new trigger: "Scroll Depth"
2. Create a new tag: "GA4 Event - Scroll"
3. Track at 25%, 50%, 75%, 100% scroll depths

---

## Common Event Tracking Examples

### Track Contact Form Submission

```typescript
import { trackFormSubmission, trackConversion } from '@/lib/analytics';

const handleSubmit = async (formData) => {
  // Track form submission
  trackFormSubmission('contact_form', {
    company_name: formData.company,
    industry: formData.industry
  });

  // Track as conversion
  trackConversion('lead_generated');

  // Submit form...
};
```

### Track CTA Button Clicks

```typescript
import { trackButtonClick } from '@/lib/analytics';

<Button
  onClick={() => {
    trackButtonClick('Get Started', 'hero');
    // Navigate or perform action...
  }}
>
  Get Started
</Button>
```

### Track External Link Clicks

```typescript
import { trackLinkClick } from '@/lib/analytics';

<a
  href="https://external-site.com"
  onClick={() => trackLinkClick('External Resource', 'https://external-site.com', 'external')}
>
  Learn More
</a>
```

---

## Environment Variables Summary

Your `.env` file should contain:

```env
RESEND_API_KEY=your_resend_api_key

# Google Analytics & Tag Manager
VITE_GTM_ID=GTM-XXXXXXX
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

## Troubleshooting

### GTM Not Loading

- Verify `VITE_GTM_ID` is set correctly in `.env`
- Restart development server after changing `.env`
- Check browser console for errors
- Verify GTM container is published

### GA4 Not Receiving Data

- Ensure GTM container has GA4 Configuration tag
- Verify Measurement ID is correct
- Check that tag is firing on "All Pages" trigger
- Wait a few minutes for data to appear in real-time reports

### Events Not Tracking

- Open browser DevTools > Network tab
- Filter by "google-analytics" or "collect"
- Check that events are being sent to GA4
- Verify event names and parameters in GTM debugger

---

## Additional Resources

- [Google Tag Manager Documentation](https://support.google.com/tagmanager)
- [Google Analytics 4 Documentation](https://support.google.com/analytics/answer/10089681)
- [GA4 Event Reference](https://developers.google.com/analytics/devguides/collection/ga4/reference/events)
- [GTM Developer Guide](https://developers.google.com/tag-platform/tag-manager/web)

---

## Next Steps

1. Set up custom events for key user actions
2. Configure conversion tracking
3. Set up custom dashboards in GA4
4. Create audience segments
5. Set up alerts for important metrics
