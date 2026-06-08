// Rendered inside app/[locale]/layout.tsx, so it inherits the Header, Footer,
// <html>/<body> and i18n provider just like a normal page. Reached for any
// unmatched path under a locale via app/[locale]/[...rest]/page.tsx.
export default function NotFound() {
  return (
    <>
      <h1>404</h1>
      <p>This page could not be found.</p>
    </>
  )
}
