// Google Analytics 4 (GA4) Utilities using gtag.js

// Extend the Window interface to include gtag and dataLayer
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

interface EventParams {
  [key: string]: any;
}

/**
 * Send an event to Google Analytics 4
 * @param eventName - The name of the event
 * @param params - Additional parameters to send with the event
 */
export function trackEvent(eventName: string, params?: EventParams) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    console.warn('Google Analytics (gtag) not available');
    return;
  }

  window.gtag('event', eventName, params);
}

/**
 * Track page views in GA4
 * @param url - The page URL
 * @param title - The page title
 */
export function trackPageView(url: string, title?: string) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', 'page_view', {
    page_path: url,
    page_title: title || document.title,
  });
}

/**
 * Track form submissions
 * @param formName - The name of the form
 * @param formData - Additional form data
 */
export function trackFormSubmission(formName: string, formData?: EventParams) {
  trackEvent('form_submission', {
    form_name: formName,
    ...formData,
  });
}

/**
 * Track button clicks
 * @param buttonName - The name/label of the button
 * @param location - Where the button is located (e.g., 'header', 'hero', 'footer')
 */
export function trackButtonClick(buttonName: string, location?: string) {
  trackEvent('button_click', {
    button_name: buttonName,
    button_location: location,
  });
}

/**
 * Track link clicks
 * @param linkText - The text of the link
 * @param linkUrl - The URL the link points to
 * @param linkType - The type of link (e.g., 'external', 'internal', 'download')
 */
export function trackLinkClick(linkText: string, linkUrl: string, linkType?: string) {
  trackEvent('link_click', {
    link_text: linkText,
    link_url: linkUrl,
    link_type: linkType,
  });
}

/**
 * Track conversions or custom goals
 * @param goalName - The name of the goal/conversion
 * @param value - Optional value associated with the conversion
 */
export function trackConversion(goalName: string, value?: number) {
  trackEvent('conversion', {
    goal_name: goalName,
    value: value,
  });
}

/**
 * Track lead generation (common conversion event)
 * This uses GA4's recommended event name for lead generation
 */
export function trackLeadGeneration(params?: EventParams) {
  trackEvent('generate_lead', params);
}

/**
 * Track errors
 * @param errorMessage - The error message
 * @param errorLocation - Where the error occurred
 */
export function trackError(errorMessage: string, errorLocation?: string) {
  trackEvent('error', {
    error_message: errorMessage,
    error_location: errorLocation,
  });
}

/**
 * Track custom events
 * @param category - Event category
 * @param action - Event action
 * @param label - Event label
 * @param value - Event value
 */
export function trackCustomEvent(
  category: string,
  action: string,
  label?: string,
  value?: number
) {
  trackEvent('custom_event', {
    event_category: category,
    event_action: action,
    event_label: label,
    event_value: value,
  });
}

/**
 * Set user properties for segmentation
 * @param properties - User properties to set
 */
export function setUserProperties(properties: EventParams) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('set', 'user_properties', properties);
}

/**
 * Track file downloads
 * @param fileName - Name of the file
 * @param fileUrl - URL of the file
 */
export function trackFileDownload(fileName: string, fileUrl: string) {
  trackEvent('file_download', {
    file_name: fileName,
    file_url: fileUrl,
  });
}

/**
 * Track video plays
 * @param videoTitle - Title of the video
 * @param videoDuration - Duration in seconds
 */
export function trackVideoPlay(videoTitle: string, videoDuration?: number) {
  trackEvent('video_start', {
    video_title: videoTitle,
    video_duration: videoDuration,
  });
}

/**
 * Track search queries
 * @param searchTerm - The search term
 */
export function trackSearch(searchTerm: string) {
  trackEvent('search', {
    search_term: searchTerm,
  });
}
