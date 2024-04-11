import Head from 'next/head'
import { useLocale } from '../hooks/useLocale'

export default function PrivacyPolicy() {
  const { t } = useLocale()
  const pageTitle = `${t.PRIVACY_POLICY} - ${t.NAME}`

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className="mx-5 sm:mx-10 md:mx-16 lg:mx-auto mt-32 sm:mt-24 md:mt-28 mb-96 max-w-4xl flex flex-col">
        <h1 className="font-semibold md:text-4xl text-3xl mx-auto mb-4">
          {t.PRIVACY_POLICY}
        </h1>
        <p className="">{t.PRIVACY_POLICY_FULLTEXT}</p>
      </div>
    </>
  )
}
