import { getContentData } from '@/libs/contents'
import { getI18n } from '@/locales/server'
import { getPostDetail } from '@/libs/microCMSClient'
import { formatDate } from '@/libs/utils'

export async function generateMetadata({
  params: { locale, id },
}: {
  params: { locale: string; id: string }
}) {
  const postData = await getPostDetail({ contentId: id, locale })
  const t = await getI18n()
  return {
    title: `${postData.title} - ${t('blog')} - yiwashita.com`,
    tags: postData.tags.map(({ tag }) => tag).join(', '),
  }
}

export default async function Post({
  params: { locale, id },
}: {
  params: { locale: string; id: string }
}) {
  const postData = await getPostDetail({ contentId: id, locale })
  return (
    <>
      <article className="post-article">
        <h1>{postData.title}</h1>
        <div className="post-tags-container">
          {postData.tags.map(({ tag }) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
        <div
          className="post article-body"
          dangerouslySetInnerHTML={{ __html: postData.body }}
        />
      </article>
    </>
  )
}
