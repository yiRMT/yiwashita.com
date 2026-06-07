import { notFound } from 'next/navigation'
import { getPageData } from '@/libs/contents'
import { buildMetadata } from '@/libs/metadata'

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await props.params
  const page = await getPageData('home', 'home', locale)
  return buildMetadata({
    title: `${page?.data.title} - yiwashita.com`,
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
    <div className="home">
      <h1>{page.data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.contentHtml }} />
    </div>
  )
}
