import type { Post } from '../../types/blog';
import { useLocale } from '../../hooks/useLocale';
import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../libs/posts';

type Props = {
  post: Post,
};

type Params = {
  params: {
    id: string,
  }
}

export default function Blog({ post }: Props) {
  const { t } = useLocale()
  const blogDetailTitle = `${post.meta.title} - ${t.NAME}`
  return (
    <>
      <Head>
        <title>{blogDetailTitle}</title>
      </Head>
      <article className='mx-auto my-32 px-10 max-w-4xl flex flex-col'>
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">
          {post.meta.title}
        </h1>
        <div className='text-gray-400 py-2'>
          {post.meta.date}
        </div>
        <div className="flex my-4 gap-2">
          {post.meta.tags.map(tag => (
            <div className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700" key={tag}>
              #{tag}
            </div>
          ))}
        </div>
        <div className='my-4 p-10 bg-gray-100 dark:bg-slate-900 rounded-lg'>
          <div 
            className="markdown"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </div>
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds().filter(v => v);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: Params) {
  const postData = await getPostData(params.id);
  return {
    props: {
      post: postData,
    },
  };
}