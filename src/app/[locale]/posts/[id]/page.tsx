import { getContentData } from '@/libs/contents'
import { getI18n } from '@/locales/server'

export async function generateMetadata({
  params: { locale, id },
}: {
  params: { locale: string; id: string }
}) {
  const postData = await getContentData('posts', id, locale)
  const t = await getI18n()
  return {
    title: `${postData.metadata.title} - ${t('blog')} - yiwashita.com`,
    description: postData.metadata.description,
    tags: postData.metadata.tags.join(','),
  }
}

export default async function Post({
  params: { locale, id },
}: {
  params: { locale: string; id: string }
}) {
  const postData = await getContentData('posts', id, locale)
  return (
    <>
      <article className="post-article">
        <h1>{postData.metadata.title}</h1>
        <p>{postData.metadata.date}</p>
        <div className="post-tags-container">
          {postData.metadata.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
        <div
          className="post markdown"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </>
  )
}
