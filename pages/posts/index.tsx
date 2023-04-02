import Link from 'next/link';
import Head from 'next/head';
import { client } from '../../libs/client';
import { useLocale } from '../../hooks/useLocale';
import type { PostMetadata } from '../../types/blog';
import { getSortedPostsData } from '../../libs/posts';

export const getStaticProps = async () => {
  // filterを使うことで空要素を削除する
  const posts = getSortedPostsData().filter(v => v)

  return {
    props: {
      posts
    },
  };
};

type Props = {
  posts: PostMetadata[];
};

export default function Blog ({ posts }: Props) {
  const { t } = useLocale()
  const blogTitle = `${t.BLOG} - ${t.NAME}`
  const date = (oldDateString: string) => {
    let dateObject = new Date(oldDateString)
    let newDateString = `${dateObject.getFullYear()}-${dateObject.getMonth() + 1}-${dateObject.getDate()}`;
    return newDateString
  }
  
  return (
    <>
      <Head>
        <title>{blogTitle}</title>
      </Head>
      <div className='h-full'>
        <div className='flex flex-col items-center max-w-2xl mx-auto md:px-0 px-6 py-20 gap-5'>
          <h1 className="font-semibold md:text-4xl text-3xl">
            {t.BLOG}
          </h1>
          <ul className='gap-4 flex flex-col w-full'>
            {posts.map((post) => (
              <li className="" key={post.id}>
                <Link href={`/posts/${post.id}`} passHref>
                  <a>
                    <div className='flex flex-col gap-2 rounded-xl shadow-lg px-6 py-3 transition hover:bg-gray-300 dark:hover:bg-slate-900'>
                      <div className='font-bold sm:text-lg text-base'>{post.title}</div>
                      <div className='flex sm:gap-5 gap-2 sm:flex-row flex-col'>
                        <div className='py-1 font-semibold sm:text-base text-sm'>{date(post.date)}</div>
                        <div className='flex'>
                          {post.tags.map(tag => (
                            <span className="px-3 py-1 mr-2 mb-2 rounded-full font-semibold sm:text-sm text-xs text-gray-700 bg-gray-200 " key={tag}>
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}