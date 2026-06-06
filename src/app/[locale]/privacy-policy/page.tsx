import { notFound } from 'next/navigation'
import { getI18n } from '@/locales/server'
import { getPageData } from '@/libs/contents'
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

export default async function PrivacyPolicy(props: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await props.params
  const page = await getPageData('pages', 'privacy-policy', locale)
  if (!page) {
    notFound()
  }
  return <div dangerouslySetInnerHTML={{ __html: page.contentHtml }} />
}
