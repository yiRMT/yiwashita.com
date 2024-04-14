import Head from 'next/head'
import type { PostMetadata } from 'types/blog'
import { useLocale } from 'hooks/useLocale'
import { getSortedPostsData } from 'libs/posts'

export const getStaticProps = async () => {
  // filterを使うことで空要素を削除する
  const posts = getSortedPostsData().filter((v) => v)

  return {
    props: {
      posts,
    },
  }
}

type Props = {
  posts: PostMetadata[]
}

export default function Blog({ posts }: Props) {
  const { t } = useLocale()
  const pageTitle = `${t.BLOG} - ${t.NAME}`

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <h1>{t.BLOG}</h1>
      <div className="posts-container">
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <a href={`/posts/${post.id}`}>
                <div className="post-card">
                  <div className="post-title">{post.title}</div>
                  <div className="post-date-tags-container">
                    <div className="post-date">{post.date}</div>
                    <div className="post-tags-container">
                      {post.tags.map((tag) => (
                        <span key={tag}>#{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
