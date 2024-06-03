import { getI18n } from '@/locales/server'

export async function generateMetadata() {
  const t = await getI18n()
  return {
    title: `${t('privacy-policy')} - yiwashita.com`,
  }
}

export default async function PrivacyPolicy() {
  const t = await getI18n()

  return (
    <>
      <h1>{t('privacy-policy')}</h1>
      <p>{t('privacy-policy-fulltext')}</p>
    </>
  )
}
