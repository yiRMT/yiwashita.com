import Head from 'next/head'
import type { Post } from 'types/blog'
import { useLocale } from 'hooks/useLocale'
import { getAllPostIds, getPostData } from 'libs/posts'

type Props = {
  post: Post
}

type Params = {
  params: {
    id: string
  }
}

export default function Blog({ post }: Props) {
  const { t } = useLocale()
  const pageTitle = `${post.meta.title} - ${t.NAME}`
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <article className='post-article'>
        <h1>{post.meta.title}</h1>
        <p>{post.meta.date}</p>
        <div className="post-tags-container">
          {post.meta.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
        <div className="post markdown" dangerouslySetInnerHTML={{ __html: post.body }}/>
      </article>
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds().filter((v) => v)
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: Params) {
  const postData = await getPostData(params.id)
  return {
    props: {
      post: postData,
    },
  }
}
