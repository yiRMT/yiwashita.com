import NextTopLoader from "nextjs-toploader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <NextTopLoader color="#334155" showSpinner={false} />
        {children}
      </body>
    </html>
  )
}
