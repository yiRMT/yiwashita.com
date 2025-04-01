import { getContentData } from '@/libs/contents'
import { getI18n } from '@/locales/server'
import { formatDate } from '@/libs/utils'

export async function generateMetadata(props: {
  params: Promise<{ locale: string; id: string }>
}) {
  const params = await props.params

  const { locale, id } = params

  const postData = await getContentData('posts', id, locale)
  const t = await getI18n()
  return {
    title: `${postData.metadata.title} - ${t('blog')} - yiwashita.com`,
    description: postData.metadata.description,
    tags: postData.metadata.tags.map((tag) => tag).join(', '),
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
