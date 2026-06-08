import { notFound } from 'next/navigation'

// Catches any path under a locale that no other route matches, routing it to
// app/[locale]/not-found.tsx (which renders within the locale layout, so the
// 404 gets the Header/Footer).
export default function CatchAll() {
  notFound()
}
