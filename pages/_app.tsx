import '../styles/reset.min.css'
import '../styles/globals.css'
import { useEffect } from 'react';
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import * as gtag from '../libs/gtag';
import { GaScript } from '../components/GaScripts';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <GaScript />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
