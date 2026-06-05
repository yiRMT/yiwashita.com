import type { Metadata } from 'next'

const SITE_NAME = 'yiwashita.com'
export const SITE_URL = 'https://yiwashita.com'
const BASE_URL = SITE_URL
const TWITTER_HANDLE = '@rmt_cu'
const AUTHOR_NAME = '岩下 雄一郎'

// `urlMappingStrategy: 'rewriteDefault'` in src/proxy.ts: the default locale
// (en) has no URL prefix, every other locale is served under `/<locale>`.
const localizedUrl = (locale: string, path: string) => {
  const prefix = locale === 'en' ? '' : `/${locale}`
  return `${BASE_URL}${prefix}${path}`
}

const ogLocale = (locale: string) => (locale === 'ja' ? 'ja_JP' : 'en_US')

// Square site icon used as the link-preview thumbnail (Slack, etc.) and the
// Twitter card image. Resolved to an absolute URL via `metadataBase`.
const OG_IMAGE = {
  url: '/icon.png',
  width: 256,
  height: 256,
  alt: SITE_NAME,
}

export function buildMetadata({
  title,
  description,
  locale,
  path = '',
  article,
}: {
  title: string
  description?: string
  locale: string
  path?: string
  // When set, the page is treated as an article (og:type=article) and the
  // publish date is exposed as article:published_time.
  article?: { publishedTime?: string }
}): Metadata {
  const url = localizedUrl(locale, path)

  const ogBase = {
    siteName: SITE_NAME,
    title,
    description,
    url,
    locale: ogLocale(locale),
    images: [OG_IMAGE],
  }
  const openGraph: Metadata['openGraph'] = article
    ? { ...ogBase, type: 'article', publishedTime: article.publishedTime }
    : { ...ogBase, type: 'website' }

  return {
    metadataBase: new URL(BASE_URL),
    title,
    description,
    // Renders `<meta name="author">` and `<link rel="author">`.
    authors: [{ name: AUTHOR_NAME, url: BASE_URL }],
    alternates: { canonical: url },
    openGraph,
    twitter: {
      // The icon is square, so the small summary card fits it better than
      // summary_large_image (which is cropped to 1.91:1).
      card: 'summary',
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      title,
      description,
      images: [OG_IMAGE.url],
    },
  }
}
