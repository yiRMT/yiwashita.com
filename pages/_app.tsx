// pages/_app.tsx
// Tailwind CSS 以外のスタイルファイルはグローバルで適用したくないため削除
// import '../styles/globals.css'
// 追記
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app'
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
