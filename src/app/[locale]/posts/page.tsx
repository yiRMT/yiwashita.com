import Link from 'next/link'
import { getI18n } from '@/locales/server'
import { getSortedContentsData } from '@/libs/contents'
import { formatDate } from '@/libs/utils'

export async function generateMetadata() {
  const t = await getI18n()
  return {
    title: `${t('blog')} - yiwashita.com`,
  }
}

export default async function Posts({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const postList =  getSortedContentsData('posts', locale)
  const t = await getI18n()
  return (
    <>
      <h1>{t('blog')}</h1>
      <div className="posts-container">
        <ul>
          {postList.length === 0 && <p>{t('no-posts-found')}</p>}
          {postList.map(({ id, date, title, tags }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <div className="post-card">
                  <div className="post-title">{title}</div>
                  <div className="post-date-tags-container">
                    <div className="post-date">{formatDate(date)}</div>
                    <div className="post-tags-container">
                      {tags.map((tag) => (
                        <span key={tag}>#{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
