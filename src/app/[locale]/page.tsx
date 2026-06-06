import { notFound } from 'next/navigation'
import { getI18n } from '@/locales/server'
import { getPageData } from '@/libs/contents'
import { buildMetadata } from '@/libs/metadata'

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await props.params
  const t = await getI18n()
  const page = await getPageData('home', 'home', locale)
  return buildMetadata({
    title: `${t('name')} - yiwashita.com`,
    description: page?.data.description,
    locale,
  })
}

export default async function Home(props: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await props.params
  const page = await getPageData('home', 'home', locale)
  if (!page) {
    notFound()
  }
  return (
    <div
      className="home"
      dangerouslySetInnerHTML={{ __html: page.contentHtml }}
    />
  )
}
