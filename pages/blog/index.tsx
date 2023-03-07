import { client } from '../../libs/client';
import Link from 'next/link';
import type { Blog, Tag } from '../../types/blog';
import Image from 'next/image';
import Head from 'next/head';
import { useLocale } from '../../hooks/useLocale';

export const getStaticProps = async () => {
  const blog = await client.get({ endpoint: 'blog' });
  const tag = await client.get({ endpoint: 'tag' });

  return {
    props: {
      blogs: blog.contents,
      tags: tag.contents,
    },
  };
};

type Props = {
  blogs: Blog[];
  tags: Tag[];
};

export default function Blog ({blogs, tags}: Props) {
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
      <div className='px-10 h-full'>
        <div className='flex flex-col justify-center items-start pb-16 py-10'>
          <h1 className="container mx-auto px-10 pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 font-semibold md:text-4xl sm:text-3xl text-2xl mb-1">
            {t.LIST_OF_ARTICLES}
          </h1>
          <div className= "container mx-auto p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {blogs.map(blog => (
              <Link key={blog.id} href={`blog/${blog.id}`} passHref>
                <a>
                  <div className="flex flex-col h-full bg-white dark:bg-slate-500 rounded-lg overflow-hidden shadow hover:shadow-xl" >
                    <div className="w-full">
                      <Image src={blog.image.url} alt={blog.title} width={blog.image.width} height={blog.image.height} />
                    </div>
                    <div className="px-6 py-4">
                      {blog.title}
                    </div>
                    <div className="px-6 py-4">{date(blog.revisedAt)}</div>
                    <div className="px-6 pt-4 pb-2">
                      {blog.tags.map(tag => (
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={tag.id}>
                          #{tag.tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
    </>
  )
}