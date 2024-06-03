export const GOOGLE_ANALYTICS_MEASUREMENT_ID =
  process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID || ''

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string): void => {
  if (!GOOGLE_ANALYTICS_MEASUREMENT_ID) return
  if (typeof window !== 'undefined') {
    window.gtag('config', GOOGLE_ANALYTICS_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
type GaEventProps = {
  action: string
  category: string
  label: string
  value?: number
}

// NOTE: 本記事内では使用してません。イベントを測定したいページやアクションなどでご利用ください。
export const event = ({
  action,
  category,
  label,
  value,
}: GaEventProps): void => {
  if (!GOOGLE_ANALYTICS_MEASUREMENT_ID) return

  if (typeof window !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}
