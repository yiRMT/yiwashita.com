import { getContentData } from '@/libs/contents'
import { getI18n } from '@/locales/server'
import { formatDate } from '@/libs/utils'
import { buildMetadata } from '@/libs/metadata'

export async function generateMetadata(props: {
  params: Promise<{ locale: string; id: string }>
}) {
  const params = await props.params

  const { locale, id } = params

  const postData = await getContentData('posts', id, locale)
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

  const postData = await getContentData('posts', id, locale)
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
