import Link from 'next/link'
import '@/styles/globals.scss'

// Fallback for requests that never reach a locale segment. Normal 404s are
// handled by app/[locale]/not-found.tsx (with Header/Footer); this only needs
// to supply a minimal document shell since the root layout is pass-through.
export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <div className="content">
          <div className="wrapper">
            <h1>404</h1>
            <p>This page could not be found.</p>
            <p>
              <Link href="/">Back to home</Link>
            </p>
          </div>
        </div>
      </body>
    </html>
  )
}
