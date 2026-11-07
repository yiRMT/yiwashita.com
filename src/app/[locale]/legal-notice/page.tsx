import { notFound } from 'next/navigation'
import { getPageData } from '@/libs/contents'
import { buildMetadata } from '@/libs/metadata'

// The legal notice (Impressum) is a single bilingual (German/English) page
// served for every locale instead of being translated per locale.
const getLegalNotice = () => getPageData('pages', 'legal-notice', 'en')

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await props.params
  const page = await getLegalNotice()
  return buildMetadata({
    title: `${page?.data.title} - yiwashita.com`,
    description: page?.data.description,
    locale,
    path: '/legal-notice',
  })
}

export default async function LegalNotice() {
  const page = await getLegalNotice()
  if (!page) {
    notFound()
  }
  return (
    <div>
      <h1>{page.data.title}</h1>
      <div
        className="article-body"
        dangerouslySetInnerHTML={{ __html: page.contentHtml }}
      />
    </div>
  )
}
