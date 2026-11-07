import { notFound } from 'next/navigation'
import { getPageData } from '@/libs/contents'
import { buildMetadata } from '@/libs/metadata'

// Like the legal notice, the privacy policy is a single bilingual
// (German/English) page served for every locale.
const getPrivacyPolicy = () => getPageData('pages', 'privacy-policy', 'en')

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await props.params
  const page = await getPrivacyPolicy()
  return buildMetadata({
    title: `${page?.data.title} - yiwashita.com`,
    description: page?.data.description,
    locale,
    path: '/privacy-policy',
  })
}

export default async function PrivacyPolicy() {
  const page = await getPrivacyPolicy()
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
