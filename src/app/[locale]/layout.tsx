import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import '@/styles/globals.scss'
import { I18nProviderClient } from '@/locales/client'
import { GoogleAnalytics } from '@next/third-parties/google'
import NextTopLoader from 'nextjs-toploader'

export const metadata: Metadata = {
  title: 'yiwashita.com',
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
    <html lang={locale}>
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
