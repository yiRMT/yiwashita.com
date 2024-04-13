import 'styles/reset.min.css'
import 'styles/globals.scss'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import NextTopLoader from 'nextjs-toploader'
import * as gtag from 'libs/gtag'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { GaScript } from 'components/GaScripts'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <GaScript />
      <NextTopLoader color="#334155" showSpinner={false} />
      <Header />
      <div className="content">
        <div className="wrapper">
          <Component {...pageProps} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default MyApp
