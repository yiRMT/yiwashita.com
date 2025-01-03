import GoogleAnalytics from '@/components/GoogleAnalytics'
import NextTopLoader from 'nextjs-toploader'
import { Suspense } from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <Suspense>
          <GoogleAnalytics />
        </Suspense>
      </head>
      <body>
        <NextTopLoader color="#334155" showSpinner={false} />
        {children}
      </body>
    </html>
  )
}
