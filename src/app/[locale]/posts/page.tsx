import Link from 'next/link'
import { getI18n } from '@/locales/server'
import { getSortedContentsData } from '@/libs/contents'
import { formatDate } from '@/libs/utils'
import { buildMetadata } from '@/libs/metadata'

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await props.params
  const t = await getI18n()
  return buildMetadata({
    title: `${t('blog')} - yiwashita.com`,
    description: t('blog-description'),
    locale,
    path: '/posts',
  })
}

export default async function Posts(props: {
  params: Promise<{ locale: string }>
}) {
  const params = await props.params

  const { locale } = params

  const postList = getSortedContentsData('posts', locale)
  const t = await getI18n()
  return (
    <>
      <h1>{t('blog')}</h1>
      <div className="posts-container">
        <ul>
          {postList.length === 0 && <p>{t('no-posts-found')}</p>}
          {postList.map(({ id, date, title, tags }) => (
            <li key={id}>
              <Link href={`/${locale}/posts/${encodeURIComponent(id)}`}>
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
