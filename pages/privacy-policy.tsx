import Head from "next/head";
import { useLocale } from "../hooks/useLocale";

export default function PrivacyPolicy () {
  const { t } = useLocale();
  const pageTitle = `${t.PRIVACY_POLICY} - ${t.NAME}`

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className="h-screen">
        <div className="flex flex-col items-center max-w-2xl mx-auto md:px-0 px-6 py-20 gap-10">
          <h1 className="font-semibold md:text-4xl text-3xl">
            {t.PRIVACY_POLICY}
          </h1>
          <p className="text-justify">
            {t.PRIVACY_POLICY_FULLTEXT}
          </p>
        </div>
      </div>
    </>
  )
}