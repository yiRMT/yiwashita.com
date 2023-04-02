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
      <div className='h-full'>
        <div className="px-80 py-20 mx-auto">
          <div className="px-10 py-6 mx-auto  rounded-lg">
            <article className='py-4 flex flex-col'>
              <h1 className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold">
                {post.meta.title}
              </h1>
              <div className='text-gray-400 py-2'>
                {post.meta.date}
              </div>
              <div className="flex items-center justify-start mt-4 mb-4">
                {post.meta.tags.map(tag => (
                  <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={tag}>
                    #{tag}
                  </div>
                ))}
              </div>
              <div className='self-center bg-gray-100 dark:bg-slate-900 p-10 rounded'>
                <div 
                  className="prose dark:prose-invert"
                  dangerouslySetInnerHTML={{ __html: post.body }}
                />
              </div>
            </article>
          </div>
        </div>
      </div>
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