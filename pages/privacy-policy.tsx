import Head from 'next/head'
import { useLocale } from 'hooks/useLocale'

export default function PrivacyPolicy() {
  const { t } = useLocale()
  const pageTitle = `${t.PRIVACY_POLICY} - ${t.NAME}`

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <h1>{t.PRIVACY_POLICY}</h1>
      <p>{t.PRIVACY_POLICY_FULLTEXT}</p>
    </>
  )
}
