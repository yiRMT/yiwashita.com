import { NextRequest, NextResponse } from 'next/server'

// Locale routing is URL-driven only — no Accept-Language detection and no
// cookie-based override. The locale is whatever the URL says:
//   - `/`, `/posts`, ...      → default locale (en), rewritten to `/en/...`
//   - `/ja`, `/ja/posts`, ... → Japanese
//   - `/en`, `/en/...`        → redirected to the clean, prefix-less URL
// Users switch languages via the URL or the language button (which navigates
// to the localized URL); the browser language is never auto-detected.
const locales = ['ja', 'en'] as const
const defaultLocale = 'en'

// Header read by next-international's server helpers (getI18n, getCurrentLocale).
const LOCALE_HEADER = 'X-Next-Locale'
const LOCALE_COOKIE = 'Next-Locale'

function serve(
  request: NextRequest,
  locale: string,
  rewriteTo?: URL,
): NextResponse {
  // Forward the locale on the request headers so server components resolve it.
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set(LOCALE_HEADER, locale)
  const init = { request: { headers: requestHeaders } }

  const response = rewriteTo
    ? NextResponse.rewrite(rewriteTo, init)
    : NextResponse.next(init)
  response.headers.set(LOCALE_HEADER, locale)
  if (request.cookies.get(LOCALE_COOKIE)?.value !== locale) {
    response.cookies.set(LOCALE_COOKIE, locale, { sameSite: 'strict' })
  }
  return response
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const segment = pathname.split('/', 2)[1]

  // `/en` or `/en/...` → redirect to the canonical prefix-less URL.
  if (segment === defaultLocale) {
    const url = request.nextUrl.clone()
    url.pathname = pathname.slice(defaultLocale.length + 1) || '/'
    return NextResponse.redirect(url)
  }

  // Explicit non-default locale (e.g. `/ja`) → serve it as-is.
  if ((locales as readonly string[]).includes(segment)) {
    return serve(request, segment)
  }

  // No locale prefix → serve the default locale, rewriting to `/<default>/...`.
  const url = request.nextUrl.clone()
  url.pathname = `/${defaultLocale}${pathname}`
  return serve(request, defaultLocale, url)
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
}
