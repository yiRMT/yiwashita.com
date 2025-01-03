import { GoogleAnalytics } from '@next/third-parties/google'
import NextTopLoader from 'nextjs-toploader'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const GA_TAG_ID = process.env.NEXT_PUBLIC_GA_ID || ''
  return (
    <html>
      <body>
        <NextTopLoader color="#334155" showSpinner={false} />
        {children}
      </body>
      <GoogleAnalytics gaId={GA_TAG_ID} />
    </html>
  )
}
