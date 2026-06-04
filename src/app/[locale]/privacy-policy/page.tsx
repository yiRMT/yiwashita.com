import { getI18n } from '@/locales/server'
import { buildMetadata } from '@/libs/metadata'

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await props.params
  const t = await getI18n()
  return buildMetadata({
    title: `${t('privacy-policy')} - yiwashita.com`,
    locale,
    path: '/privacy-policy',
  })
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
