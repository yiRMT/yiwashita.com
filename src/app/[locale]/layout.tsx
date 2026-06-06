import Header from '@/components/header'
import Footer from '@/components/footer'
import '@/styles/globals.scss'
// Syntax-highlighting theme for fenced code blocks (highlight.js token colors).
import 'highlight.js/styles/github-dark.css'
// KaTeX styles for LaTeX math rendered in markdown ($...$ / $$...$$).
import 'katex/dist/katex.min.css'
import { Noto_Sans_JP, Noto_Sans_Mono } from 'next/font/google'
import { I18nProviderClient } from '@/locales/client'
import { getI18n } from '@/locales/server'
import { SITE_URL } from '@/libs/metadata'
import { GoogleAnalytics } from '@next/third-parties/google'
import NextTopLoader from 'nextjs-toploader'

// Self-hosted via next/font (no external request, no layout shift). Exposed as a
// CSS variable that Tailwind's `font-sans` resolves to (see tailwind.config.ts).
const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
})

// Monospace face for code blocks / inline code (Tailwind's `font-mono`).
const notoSansMono = Noto_Sans_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-mono',
})

export async function generateMetadata() {
  const t = await getI18n()
  // Site-level defaults only — intentionally NO openGraph/twitter here. Each
  // page sets its own complete OG/Twitter metadata via buildMetadata. If the
  // layout also defined openGraph, Next.js would merge the two and the
  // layout's og:type (website) would clobber a page's og:type (article).
  return {
    metadataBase: new URL(SITE_URL),
    title: `${t('name')} - yiwashita.com`,
    description: t('introduction'),
    // Declared so crawlers/Slack reliably find the site icon. `icon` also
    // renders the browser favicon link.
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/icon.png',
    },
  }
}

export default async function LocaleLayout(props: {
  params: Promise<{ locale: string }>
  children: React.ReactNode
}) {
  const params = await props.params

  const { locale } = params

  const { children } = props

  const GA_TAG_ID = process.env.NEXT_PUBLIC_GA_ID || ''

  return (
    <html
      lang={locale}
      className={`${notoSansJP.variable} ${notoSansMono.variable}`}
    >
      <body>
        <NextTopLoader color="#334155" showSpinner={false} />
        <I18nProviderClient locale={locale}>
          <Header />
          <div className="content">
            <div className="wrapper">{children}</div>
          </div>
          <Footer />
        </I18nProviderClient>
      </body>
      <GoogleAnalytics gaId={GA_TAG_ID} />
    </html>
  )
}
