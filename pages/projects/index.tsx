import Link from 'next/link';
import Head from 'next/head';
import { useLocale } from '../../hooks/useLocale';
import type { PostMetadata } from '../../types/project';
import { getSortedPostsData } from '../../libs/projects';
import Image from 'next/image'

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

export default function Projects ({ posts }: Props) {
  const { locale, t } = useLocale()
  const projectsTitle = `${t.PROJECTS} - ${t.NAME}`
  const date = (oldDateString: string) => {
    let dateObject = new Date(oldDateString)
    let newDateString = `${dateObject.getFullYear()}-${dateObject.getMonth() + 1}-${dateObject.getDate()}`;
    return newDateString
  }
  
  return (
    <>
      <Head>
        <title>{projectsTitle}</title>
      </Head>
      <div className='mx-5 sm:mx-10 md:mx-16 lg:mx-auto my-32 sm:my-24 md:my-28 md:mb-96 max-w-5xl flex flex-col'>
        <h1 className="mx-auto mb-5 font-semibold md:text-4xl text-3xl">
          {t.PROJECTS}
        </h1>
        <ul className='gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {posts.map((post) => (
            <li className="" key={post.id}>
                  <div className='flex flex-col gap-2 pb-4 rounded-xl shadow-lg hover:shadow-gray-300 dark:hover:shadow-slate-700 transition bg-gray-100 dark:bg-slate-900'>
                    { post.links.website !== '' ? (
                      <Link href={post.links.website} passHref>
                        <a target='_blank' className='object-cover'>
                          <Image
                            src={post.image.path}
                            alt={post.title}
                            width={640}
                            height={360}
                            objectFit='cover'
                            className='rounded-t-xl'
                          />
                        </a>
                      </Link>
                    ) : (
                      <div className='object-cover'>
                            <Image
                              src={post.image.path}
                              alt={post.title}
                              width={640}
                              height={360}
                              objectFit='cover'
                              className='rounded-t-xl'
                            />
                          </div>
                    )}
                    { post.links.website !== '' ? (
                      <Link href={post.links.website} passHref>
                        <a target='_blank' className='font-bold sm:text-lg text-base mx-5 hover:underline'>
                          {post.title}
                        </a>
                      </Link>
                    ) : (
                      <div className='font-bold sm:text-lg text-base mx-5'>
                        {post.title}
                      </div>
                    )}
                    <div className='flex gap-4 mx-5'>
                      { post.links.github !== '' ? (
                        <Link href={post.links.github} passHref>
                          <a target='_blank' className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                          </a>
                        </Link>
                      ) : ( 
                        <></> 
                      )}
                      { post.links.media !== '' ? (
                        <Link href={post.links.media} passHref>
                          <a target='_blank' className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 -960 960 960" aria-hidden="true"><path fillRule="evenodd" d="m383-310 267-170-267-170v340Zm97 230q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z" clipRule="evenodd" /></svg>
                          </a>
                        </Link>
                      ) : ( 
                        <></> 
                      )}
                    </div>
                    { locale === 'en' ? (
                      <div className='mx-5'>{post.description.en}</div>
                    ) : (
                      <div className='mx-5'>{post.description.ja}</div>
                    )}
                    <div className='flex flex-wrap gap-2 mx-5'>
                      {post.tags.map(tag => (
                        <span className="px-3 py-1 rounded-full font-semibold sm:text-sm text-xs text-gray-700 dark:text-slate-700 bg-gray-200 " key={tag}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}