import { notFound } from 'next/navigation'
import { setStaticParamsLocale } from 'next-international/server'
import { getAllContentIds, getContentData } from '@/libs/contents'
import { getI18n } from '@/locales/server'
import { formatDate } from '@/libs/utils'
import { buildMetadata } from '@/libs/metadata'

// Pre-render every known post and reject unknown ids at the routing layer, so a
// nonexistent post returns a real 404 (a runtime notFound() in this dynamic
// route would stream a 200 shell first).
export function generateStaticParams() {
  return getAllContentIds('posts').map(({ params, locale }) => ({
    locale,
    id: params.id,
  }))
}

export const dynamicParams = false

export async function generateMetadata(props: {
  params: Promise<{ locale: string; id: string }>
}) {
  const params = await props.params

  const { locale, id } = params
  setStaticParamsLocale(locale)

  const postData = await getContentData('posts', id, locale)
  // dynamicParams = false already 404s unknown ids at the routing layer; this
  // guard is a defensive fallback and narrows the type for TypeScript.
  if (!postData) {
    notFound()
  }
  const t = await getI18n()
  return {
    ...buildMetadata({
      title: `${postData.metadata.title} - ${t('blog')} - yiwashita.com`,
      description: postData.metadata.description,
      locale,
      path: `/posts/${id}`,
      article: {
        publishedTime: postData.metadata.date
          ? new Date(postData.metadata.date).toISOString()
          : undefined,
      },
    }),
    keywords: postData.metadata.tags,
  }
}

export default async function Post(props: {
  params: Promise<{ locale: string; id: string }>
}) {
  const params = await props.params

  const { locale, id } = params
  setStaticParamsLocale(locale)

  const postData = await getContentData('posts', id, locale)
  if (!postData) {
    notFound()
  }
  return (
    <>
      <article className="post-article">
        <h1>{postData.metadata.title}</h1>
        <div className="post-meta-container">
          <span className="post-date">
            {formatDate(postData.metadata.date)}
          </span>
          <div className="post-tags-container">
            {postData.metadata.tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
        </div>
        <div
          className="post article-body"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </>
  )
}
