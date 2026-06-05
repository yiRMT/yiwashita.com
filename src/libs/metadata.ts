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
      // No OG image, so use the small summary card rather than summary_large_image.
      card: 'summary',
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      title,
      description,
    },
  }
}
