import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import '@/styles/globals.scss'
import { I18nProviderClient } from '@/locales/client'

export const metadata: Metadata = {
  title: 'yiwashita.com',
}

export default async function LocaleLayout(
  props: {
    params: Promise<{ locale: string }>
    children: React.ReactNode
  }
) {
  const params = await props.params;

  const {
    locale
  } = params;

  const {
    children
  } = props;

  return (
    <html lang={locale}>
      <body>
        <I18nProviderClient locale={locale}>
          <Header />
          <div className="content">
            <div className="wrapper">{children}</div>
          </div>
          <Footer />
        </I18nProviderClient>
      </body>
    </html>
  )
}
