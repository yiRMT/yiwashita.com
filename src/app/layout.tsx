import GoogleAnalytics from '@/components/GoogleAnalytics'
import NextTopLoader from 'nextjs-toploader'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <GoogleAnalytics />
      </head>
      <body>
        <NextTopLoader color="#334155" showSpinner={false} />
        {children}
      </body>
    </html>
  )
}
